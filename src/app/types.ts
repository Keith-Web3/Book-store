export interface Card {
  title: string
  _id: string
  price: number
  sales: number
  description: string
  status: 'published' | 'draft'
  coverImg: string
  createdAt: Date
  updatedAt: Date
}
