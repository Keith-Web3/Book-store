import { type NextRequest } from 'next/server'

export async function GET(req: NextRequest, res: Response) {
  const token = req.cookies.get(process.env.JWT_NAME!)?.value
  const response = await fetch(
    `${process.env.SERVER_URL}/v1/users/current-user`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
  const user = await response.json()

  return Response.json({ user })
}
