import { NextRequest, NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

function validateEnv() {
  const requiredVars = ['DB_HOST', 'DB_USER', 'DB_PASSWORD', 'DB_NAME'];
  for (const key of requiredVars) {
    if (!process.env[key]) {
      throw new Error(`Missing required env variable: ${key}`);
    }
  }
}

export async function POST(req: NextRequest) {

    console.log('ENV TEST:', {
  DB_HOST: process.env.DB_HOST,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,
});

  try {
    validateEnv();

    const {
      name,
      phone,
      instagram,
      email,
      service,
      appointment_date,
      message,
    } = await req.json();

    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    const [result]: any = await connection.execute(
      `INSERT INTO bookings (name, phone, instagram, email, service, appointment_date, message)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [name, phone, instagram, email, service, appointment_date, message]
    );

    await connection.end();

    return NextResponse.json({ success: true, id: result.insertId });
  } catch (error) {
    const err = error as Error;
    console.error('❌ Booking API Error:', err.message);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
