import { getClient } from '@/lib/drupal-client'
import { Metadata } from 'next'
import { GET_MEETINGS } from '@/lib/queries'
import { MeetingsData } from '@/lib/types'
import Header from '../components/Header'
import MeetingCard from '../components/MeetingCard'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Meetings | Greenfield County',
  description: 'Browse Greenfield County public meetings and hearings.',
}

async function getMeetings() {
  try {
    const client = getClient()
    const data = await client.raw(GET_MEETINGS, { first: 50 })
    return data?.nodeMeetings?.nodes || []
  } catch (error) {
    console.error('Error fetching meetings:', error)
    return []
  }
}

export default async function MeetingsPage() {
  const items = await getMeetings()

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-primary-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Public Meetings
            </h1>
            <p className="text-lg text-primary-200">
              View upcoming and past Greenfield County public meetings and hearings.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">No Meetings Yet</h2>
              <p className="text-gray-500">
                Meetings will appear here once content is imported.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item: any) => (
                <MeetingCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
