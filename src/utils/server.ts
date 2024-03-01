'use server'

export async function getBooks(page?: number, limit?: number) {
  const cardsRes = await fetch(
    `${process.env.SERVER_URL}/v1/books?page=${page}&limit=${limit}`,
    {
      cache: 'no-store',
    }
  )
  const cards = await cardsRes.json()

  return cards.data
}
