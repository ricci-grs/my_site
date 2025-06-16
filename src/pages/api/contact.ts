import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = (await request.json()) as {
      from_name?: string;
      reply_to?: string;
      message?: string;
    };

    const name = data.from_name ?? '';
    const email = data.reply_to ?? '';
    const message = data.message ?? '';

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, message: 'Missing fields' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    console.log('Form received:', { name, email, message });

    return new Response(
      JSON.stringify({ success: true, message: 'Message received' }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error in /api/contact:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Server error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};