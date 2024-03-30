'use server'

import { redirect } from 'next/navigation'

export async function getBooks(page?: number, limit?: number) {
  const cardsRes = await fetch(
    `${process.env.SERVER_URL}/v1/books?page=${page}&limit=${limit}`,
    {
      cache: 'no-store',
    }
  )
  const cards = await cardsRes.json()

  console.log(cards)

  return cards.data
}

export async function signup(formStatus: any, formData: FormData) {
  const name = formData.get('name')
  const email = formData.get('email')
  const password = formData.get('password')
  const passwordConfirm = formData.get('passwordConfirm')

  console.log(name, email, password, passwordConfirm)
  redirect('/')
}
