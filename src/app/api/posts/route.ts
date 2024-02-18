import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({ message: null })
}

export async function POST(request: Request) {
  console.log(request.body)
  const req = JSON.stringify(request.body);

  if (req) {
    if (req === 'ajudar') {
      return NextResponse.json({ message: 'Olá, como posso ajudar?' })
    }
    if (req === 'preço') {
      return NextResponse.json({ message: 'Nossos serviços custam R$ 100,00 reais' })
    }
  }
  return NextResponse.json({ message: null })
}