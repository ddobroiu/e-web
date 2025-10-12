import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

type FormBody = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const EMAIL_TO = process.env.EMAIL_TO || "contact@e-web.ro";
// SMTP vars: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS (configure in .env)

async function sendMail(body: FormBody) {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    throw new Error(
      "SMTP configuration missing. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS in environment."
    );
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: Number(process.env.SMTP_PORT || 587) === 465, // true for 465, false otherwise
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const html = `
    <h2>Mesaj nou de pe site</h2>
    <p><strong>Nume:</strong> ${escapeHtml(body.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(body.email)}</p>
    <p><strong>Subiect:</strong> ${escapeHtml(body.subject)}</p>
    <p><strong>Mesaj:</strong><br/>${escapeHtml(body.message).replace(/\n/g, "<br/>")}</p>
  `;

  const mailOptions = {
    from: `"e-Web Site" <${process.env.SMTP_USER}>`,
    to: EMAIL_TO,
    subject: `Cerere de contact: ${body.subject || "Fără subiect"}`,
    html,
    replyTo: body.email || undefined,
  };

  const info = await transporter.sendMail(mailOptions);
  return info;
}

function escapeHtml(unsafe: string) {
  return unsafe
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as FormBody;

    // validare minimă
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { success: false, message: "Toate câmpurile sunt obligatorii." },
        { status: 400 }
      );
    }

    await sendMail(body);

    return NextResponse.json({ success: true, message: "Mesaj trimis cu succes." });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Eroare internă.";
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}