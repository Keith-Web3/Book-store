'use server'

export async function getBooks() {
  const cardsRes = await fetch(`${process.env.NEXT_PUBLIC_URL}/v1/books`, {
    cache: 'no-store',
  })
  const cards = await cardsRes.json()

  return cards.data.books
}
