import { NextResponse } from 'next/server'

// Auth routes disabled - using anonymous guestbook
export async function GET() {
  return NextResponse.json({ error: 'Not implemented' }, { status: 404 })
}

export async function POST() {
  return NextResponse.json({ error: 'Not implemented' }, { status: 404 })
}
