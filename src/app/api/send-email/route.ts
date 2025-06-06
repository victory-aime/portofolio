import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { sender, subject, message } = await req.json();
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GOOGLE_EMAIL,
        pass: process.env.GOOGLE_PASSWORD,
      },
    });
    const mailOptions = {
      from: `"${sender.name}" <${sender?.address}>`,
      to: process.env.GOOGLE_EMAIL,
      replyTo: sender?.address,
      subject,
      text: `
      Message reçu :
      ${message}
      `,
    };
    await transporter.sendMail(mailOptions);
    return new NextResponse(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new NextResponse(JSON.stringify({ success: false }), {
      status: 500,
    });
  }
}
