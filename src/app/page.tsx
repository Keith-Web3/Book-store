import { redirect } from 'next/navigation'

interface pageProps {}

const page = function ({}: pageProps) {
  redirect('/store/products')
  return <div></div>
}

export default page
