import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const cardsRes = await fetch(`${process.env.SERVER_URL}/v1/books`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    revalidatePath('/store/products')
    return NextResponse.json(cardsRes, { status: 200 })
  } catch (err) {
    return NextResponse.json(err, { status: 500 })
  }
}
