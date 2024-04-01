import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const token = cookies().get(process.env.JWT_NAME!)?.value
    const cardsRes = await fetch(`${process.env.SERVER_URL}/v1/books`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    if (!cardsRes.ok) {
      const data = await cardsRes.json()
      throw new Error(data.message)
    }
    revalidatePath('/store/products')
    return NextResponse.json(cardsRes, { status: 201 })
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 })
  }
}
