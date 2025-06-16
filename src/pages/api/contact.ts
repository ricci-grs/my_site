export const prerender = false;

import type { APIRoute } from 'astro';

const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET_KEY || 'YOUR_SECRET_KEY';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { from_name, reply_to, message, recaptchaToken } = data;

    if (!from_name || !reply_to || !message || !recaptchaToken) {
      return new Response(
        JSON.stringify({ success: false, message: 'Missing fields or recaptcha' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Verifica con Google
    const verifyRes = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET}&response=${recaptchaToken}`,
      { method: 'POST' }
    );
    const verifyData = await verifyRes.json();

    if (!verifyData.success || verifyData.score < 0.5) {
      return new Response(
        JSON.stringify({ success: false, message: 'Failed reCAPTCHA verification' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Processo form valido
    console.log('Form verified:', { from_name, reply_to, message });

    return new Response(
      JSON.stringify({ success: true, message: 'Message received' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in /api/contact:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};