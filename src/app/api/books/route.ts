import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const cardsRes = await fetch(`${process.env.URL}/v1/books`, {
    cache: 'no-store',
  })
  const cards = await cardsRes.json()
  console.log(cards)

  return NextResponse.json(cards, { status: 200 })
}

export async function POST(request: Request) {}
