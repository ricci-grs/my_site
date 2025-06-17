export const prerender = false;

import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

const {
  RECAPTCHA_SECRET_KEY,
  SMTP_HOST,
  SMTP_PORT,
  SMTP_SECURE,
  SMTP_USER,
  SMTP_PASS,
  EMAIL_TO
} = process.env;

const transpoter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: Number(SMTP_PORT),
  secure: SMTP_SECURE === 'true',
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS
  }
});

export const POST: APIRoute = async ({ request }) => {
  console.log("[ContactAPI] New request received");

  try {
    const data = await request.json();
    console.log("[ContactAPI] Request body:", data);

    const { from_name, reply_to, message, recaptchaToken } = data;

    if (!from_name || !reply_to || !message || !recaptchaToken) {
      console.warn("[ContactAPI] Missing fields");
      return new Response(
        JSON.stringify({ success: false, message: 'Missing fields or recaptcha' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const verifyRes = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      { method: 'POST' }
    );
    const verifyData = await verifyRes.json();
    console.log("[ContactAPI] Google reCAPTCHA verification data:", verifyData);

    if (!verifyData.success || verifyData.score < 0.5) {
      return new Response(
        JSON.stringify({ success: false, message: 'Failed reCAPTCHA verification' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const mailRes = await transpoter.sendMail({
      from: `"${from_name}" <${SMTP_USER}>`,
      to: EMAIL_TO,
      reply_to: reply_to,
      subject: `New Contact Message from ${from_name}`,
      text: message,
      html: `<p>${message}</p><p>From: ${from_name} (${reply_to})</p>`
    })

    console.log("[ContactAPI] Email sent:", mailRes.messageId);
    
    return new Response(
      JSON.stringify({ success: true, message: 'Message sent' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error("[ContactAPI] Server error: ", error);
    return new Response(
      JSON.stringify({ success: false, message: 'Server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};