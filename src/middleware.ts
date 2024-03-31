import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname.startsWith('/signup') ||
    request.nextUrl.pathname.startsWith('/login')
  )
    return

  const token = request.cookies.get(process.env.JWT_NAME!)

  if (!token?.value?.length) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.redirect(new URL('/signup', request.url))
}

export const config = {
  matcher: ['/((?!_next|api/auth).*)(.+)'],
}
