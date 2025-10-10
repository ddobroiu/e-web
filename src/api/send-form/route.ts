import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'; // Importăm nodemailer
import Twilio from 'twilio';

// Twilio rămâne la fel
const twilioClient = Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // 1. Creează un "transporter" Nodemailer cu setările tale SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // true pentru portul 465, false pentru alte porturi
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // 2. Pregătește opțiunile pentru email
    const mailOptions = {
      from: `"Formular Site e-Web" <${process.env.SMTP_USER}>`, // Numele expeditorului și adresa
      to: 'contact@e-web.ro', // Adresa unde se primește email-ul
      replyTo: email, // Permite răspunsul direct către cel care a completat formularul
      subject: `Mesaj nou de la ${name}: ${subject}`,
      html: `<h1>Cerere nouă de la ${name}</h1><p>Email: <strong>${email}</strong></p><p>Subiect: ${subject}</p><h3>Mesaj:</h3><p>${message}</p>`,
    };

    // 3. Trimite email-ul
    await transporter.sendMail(mailOptions);

    // 4. Trimite mesajul WhatsApp cu Twilio (partea aceasta rămâne neschimbată)
    const whatsappMessage = `Mesaj nou de pe site!\nNume: ${name}\nEmail: ${email}\nSubiect: ${subject}\nMesaj: ${message}`;
    await twilioClient.messages.create({
      from: process.env.TWILIO_WHATSAPP_NUMBER,
      to: process.env.MY_WHATSAPP_NUMBER,
      body: whatsappMessage,
    });

    return NextResponse.json({ success: true, message: 'Mesajul a fost trimis cu succes!' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: 'A apărut o eroare la trimitere.' }, { status: 500 });
  }
}