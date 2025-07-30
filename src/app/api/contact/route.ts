import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, message } = body;

    // TODO: Implement actual contact form processing
    // This could send emails, store in database, integrate with CRM, etc.
    console.log('Contact form submission:', { firstName, lastName, email, phone, message });

    // For now, just return success
    return NextResponse.json({
      success: true,
      message: 'Thank you for your message! We will get back to you soon.'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to send message. Please try again.'
      },
      { status: 500 }
    );
  }
} 