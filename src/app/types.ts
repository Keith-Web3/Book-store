export interface User {
  name: string
  email: string
  photo: string
}
export interface Card {
  title: string
  price: number
  sales: number
  description: string
  author: User
  status: 'published' | 'draft'
  coverImg: string
  createdAt: Date
  updatedAt: Date
  revenue: 0
  id: string
}
