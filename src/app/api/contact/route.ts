import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, services, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !services || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Validate services is an array with at least one item
    if (!Array.isArray(services) || services.length === 0) {
      return NextResponse.json(
        { error: 'At least one service must be selected' },
        { status: 400 }
      );
    }

    // Get API URL from server-side environment variable (no NEXT_PUBLIC needed)
    const apiUrl = process.env.CONTACT_URL;

    if (!apiUrl) {
      console.error('CONTACT_URL environment variable is not configured');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    // Forward the request to the external API
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        service: services.join(', '), // Send as comma-separated string for compatibility
        message,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`External API error: ${response.status}`, errorText);
      return NextResponse.json(
        { error: 'Failed to send message. Please try again later.' },
        { status: response.status }
      );
    }

    // Return success response
    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
