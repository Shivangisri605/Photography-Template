import { connectDB } from '@/lib/db';
import Message from '@/models/Message';
import { sendContactEmail } from '@/lib/email';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const { name, email, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create message in database
    const newMessage = new Message({
      name,
      email,
      message,
    });

    await newMessage.save();

    // Send email to shividu2005@gmail.com
    try {
      await sendContactEmail(name, email, message);
    } catch (emailError) {
      console.error('Failed to send email:', emailError);
      // Continue despite email failure - message is saved in DB
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully!',
        data: newMessage,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to send message' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    const messages = await Message.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: messages });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Failed to fetch messages' },
      { status: 500 }
    );
  }
}
