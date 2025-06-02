import { NextResponse } from 'next/server';
import { sendEmail, FormData } from '../../../utils/mailer';

export async function POST(request: Request) {
  try {
    const data: FormData = await request.json();

    // Валидация данных
    if (!data.name || !data.phone) {
      return NextResponse.json(
        { error: 'Name and phone are required' },
        { status: 400 }
      );
    }

    // Отправка письма
    const result = await sendEmail(data);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in email API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 