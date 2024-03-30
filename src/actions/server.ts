'use server'

import { redirect } from 'next/navigation'
import { z } from 'zod'
import { cookies } from 'next/headers'

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

export async function signup(_formStatus: any, formData: FormData) {
  const schema = z.object({
    email: z.string({
      required_error: 'Email is required',
      invalid_type_error: 'Invalid Email',
    }),
    name: z
      .string({
        required_error: 'Name is required',
      })
      .min(3, 'Name must be 3 or more characters long'),
    password: z
      .string({
        required_error: 'Please provide a password',
      })
      .min(8, 'Password must be 8 characters or more'),
    passwordConfirm: z
      .string()
      .refine(value => value === formData.get('password'), {
        message: 'Passwords are not the same',
      }),
  })

  const validatedFields = schema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
    passwordConfirm: formData.get('passwordConfirm'),
  })

  if (!validatedFields.success) {
    const { message, path } = JSON.parse(validatedFields.error.message)[0]
    return { message, path }
  }

  try {
    const response = await fetch(`${process.env.SERVER_URL}/v1/auth/signup`, {
      method: 'POST',
      body: JSON.stringify(validatedFields.data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()

    cookies().set('jwt', data.token, {
      expires: Date.now() + +process.env.JWT_EXPIRES_IN! * 24 * 60 * 60 * 1000,
    })
  } catch (err) {
    return { message: err, path: null }
  }

  redirect('/login')
}
