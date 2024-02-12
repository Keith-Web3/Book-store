import '../../../sass/pages/homepage.scss'
import BookCard from '@/components/Card'
import PageLayout from './pagelayout'

export default function Home() {
  return (
    <div className="homepage">
      <PageLayout>
        <BookCard
          price={3000}
          sales={2}
          status="published"
          title="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium perspiciatis vitae."
        />
      </PageLayout>
    </div>
  )
}
