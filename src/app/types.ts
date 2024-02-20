export interface Card {
  title: string
  price: number
  sales: number
  description: string
  status: 'published' | 'draft'
  coverImg: string
  createdAt: Date
  updatedAt: Date
  revenue: 0
  id: string
}
