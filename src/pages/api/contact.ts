import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const form = await request.formData();

    const name = form.get('from_name')?.toString() || '';
    const email = form.get('reply_to')?.toString() || '';
    const message = form.get('message')?.toString() || '';

    console.log('📩 Form received:', { name, email, message });

    return new Response(
      JSON.stringify({ success: true, message: 'Form received successfully' }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('❌ Error in /api/contact:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Server error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};