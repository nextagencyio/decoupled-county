import { Metadata } from 'next'
import { headers } from 'next/headers'
import { getServerApolloClient } from '@/lib/apollo-client'
import { GET_OFFICIALS } from '@/lib/queries'
import { OfficialsData } from '@/lib/types'
import Header from '../components/Header'
import OfficialCard from '../components/OfficialCard'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Officials | Greenfield County',
  description: 'Browse Greenfield County elected officials and leadership.',
}

async function getOfficials() {
  try {
    const requestHeaders = await headers()
    const apolloClient = getServerApolloClient(requestHeaders)
    const { data } = await apolloClient.query<OfficialsData>({
      query: GET_OFFICIALS,
      variables: { first: 50 },
      fetchPolicy: 'cache-first',
    })
    return data?.nodeOfficials?.nodes || []
  } catch (error) {
    console.error('Error fetching officials:', error)
    return []
  }
}

export default async function OfficialsPage() {
  const items = await getOfficials()

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-primary-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              County Officials
            </h1>
            <p className="text-lg text-primary-200">
              Meet the elected officials and leadership of Greenfield County.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">No Officials Yet</h2>
              <p className="text-gray-500">
                Officials will appear here once content is imported.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item) => (
                <OfficialCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
