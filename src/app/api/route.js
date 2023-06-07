import { NextResponse } from 'next/server';
 
export async function GET() {
 
  const data = {
    name: "Pero"
  }
 
  return NextResponse.json({ data });
}