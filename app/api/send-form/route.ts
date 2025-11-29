import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Verificare și inițializare Resend doar dacă API key-ul există
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    // Verificare dacă Resend este disponibil
    if (!resend) {
      return NextResponse.json(
        { success: false, message: 'Serviciul de email nu este configurat.' },
        { status: 503 }
      );
    }

    const body: FormData = await request.json();
    const { name, email, subject, message } = body;

    // Validare basic
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: 'Toate câmpurile sunt obligatorii.' },
        { status: 400 }
      );
    }

    // Validare email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Adresa de email nu este validă.' },
        { status: 400 }
      );
    }

    // Template email HTML pentru o prezentare profesională
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="ro">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Mesaj nou de pe site-ul e-Web</title>
        <style>
          body { 
            font-family: 'Arial', sans-serif; 
            line-height: 1.6; 
            color: #333; 
            background-color: #f8fafc;
            margin: 0;
            padding: 0;
          }
          .container { 
            max-width: 600px; 
            margin: 0 auto; 
            background: white; 
            border-radius: 12px; 
            overflow: hidden;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          }
          .header { 
            background: linear-gradient(135deg, #0ea5e9, #6366f1); 
            color: white; 
            padding: 30px; 
            text-align: center; 
          }
          .header h1 { 
            margin: 0; 
            font-size: 24px; 
            font-weight: bold;
          }
          .content { 
            padding: 30px; 
          }
          .field { 
            margin-bottom: 20px; 
            padding: 15px; 
            background: #f1f5f9; 
            border-radius: 8px; 
            border-left: 4px solid #0ea5e9;
          }
          .field-label { 
            font-weight: bold; 
            color: #475569; 
            margin-bottom: 5px; 
            text-transform: uppercase; 
            font-size: 12px; 
            letter-spacing: 0.5px;
          }
          .field-value { 
            color: #1e293b; 
            font-size: 16px;
            word-wrap: break-word;
          }
          .message-field {
            background: #ecfdf5;
            border-left-color: #10b981;
          }
          .footer { 
            background: #f8fafc; 
            padding: 20px; 
            text-align: center; 
            color: #64748b; 
            font-size: 14px;
          }
          .logo {
            display: inline-block;
            background: white;
            padding: 8px 16px;
            border-radius: 6px;
            font-weight: bold;
            color: #0ea5e9;
            margin-bottom: 10px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">e-Web</div>
            <h1>📧 Mesaj Nou de pe Site</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">Ai primit o nouă cerere de contact</p>
          </div>
          
          <div class="content">
            <div class="field">
              <div class="field-label">👤 Nume Client</div>
              <div class="field-value">${name}</div>
            </div>
            
            <div class="field">
              <div class="field-label">📧 Email Contact</div>
              <div class="field-value">
                <a href="mailto:${email}" style="color: #0ea5e9; text-decoration: none;">${email}</a>
              </div>
            </div>
            
            <div class="field">
              <div class="field-label">📋 Subiect</div>
              <div class="field-value">${subject}</div>
            </div>
            
            <div class="field message-field">
              <div class="field-label">💬 Mesaj</div>
              <div class="field-value">${message.replace(/\n/g, '<br>')}</div>
            </div>
          </div>
          
          <div class="footer">
            <p><strong>e-Web</strong> - Soluții Digitale Personalizate</p>
            <p>📞 <a href="tel:0750473111" style="color: #0ea5e9;">0750 47 31 11</a> | 
               📧 <a href="mailto:contact@e-web.ro" style="color: #0ea5e9;">contact@e-web.ro</a></p>
            <p style="margin-top: 15px; font-size: 12px; opacity: 0.7;">
              Acest email a fost generat automat de sistemul de contact de pe site-ul www.e-web.ro
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Template text pentru clienții care nu suportă HTML
    const textContent = `
🌟 MESAJ NOU DE PE SITE-UL E-WEB 🌟

👤 Nume: ${name}
📧 Email: ${email}
📋 Subiect: ${subject}

💬 Mesaj:
${message}

---
e-Web - Soluții Digitale Personalizate
📞 0750 47 31 11 | 📧 contact@e-web.ro
www.e-web.ro
    `;

    // Trimitere email cu Resend
    const emailResponse = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'contact@e-web.ro',
      to: [process.env.ADMIN_EMAIL || 'contact@e-web.ro'],
      subject: `🚀 [e-Web Contact] ${subject} - ${name}`,
      html: htmlContent,
      text: textContent,
      replyTo: email, // Permite răspuns direct la clientul care a scris
    });

    console.log('📧 Email trimis cu succes:', emailResponse);

    return NextResponse.json({
      success: true,
      message: 'Mesajul a fost trimis cu succes! Vă vom contacta în curând.',
    });

  } catch (error) {
    console.error('❌ Eroare la trimiterea email-ului:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'A apărut o eroare la trimiterea mesajului. Vă rugăm să încercați din nou sau să ne contactați direct.' 
      },
      { status: 500 }
    );
  }
}