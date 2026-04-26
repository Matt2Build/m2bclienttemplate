import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin, isSupabaseConfigured } from '@/lib/supabase';

// Mock bookings for demo
const mockBookings = [
  {
    id: '1',
    created_at: new Date().toISOString(),
    customer_name: 'Demo Customer',
    customer_email: 'demo@example.com',
    customer_phone: '555-1234',
    service_type: 'Example Service',
    booking_date: new Date().toISOString().split('T')[0],
    status: 'pending',
    notes: 'This is a demo booking.',
  },
];

export async function POST(request: NextRequest) {
  try {
    // For demo/template purposes, return mock success
    if (!isSupabaseConfigured()) {
      const body = await request.json();
      return NextResponse.json(
        { 
          success: true, 
          demo: true,
          message: 'Demo mode: Configure Supabase in .env.local to save real bookings',
          booking: { 
            id: 'demo-' + Date.now(),
            ...body,
            status: 'pending',
            created_at: new Date().toISOString(),
          }
        },
        { status: 201 }
      );
    }

    const body = await request.json();
    
    const { data, error } = await supabaseAdmin
      .from('bookings')
      .insert([
        {
          customer_name: body.name,
          customer_email: body.email,
          customer_phone: body.phone,
          service_type: body.service,
          booking_date: body.date,
          notes: body.notes,
          status: 'pending',
        },
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to create booking' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, booking: data[0] },
      { status: 201 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  if (!isSupabaseConfigured()) {
    return NextResponse.json({ 
      demo: true,
      message: 'Demo mode: Configure Supabase in .env.local to fetch real bookings',
      bookings: mockBookings 
    });
  }

  const { data, error } = await supabaseAdmin
    .from('bookings')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    return NextResponse.json(
      { error: 'Failed to fetch bookings' },
      { status: 500 }
    );
  }

  return NextResponse.json({ bookings: data });
}
