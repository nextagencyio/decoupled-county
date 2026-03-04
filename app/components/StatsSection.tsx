'use client'

import { DrupalHomepage } from '@/lib/types'

interface StatsSectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function StatsSection({ homepageContent }: StatsSectionProps) {
  const stats = (homepageContent as any)?.stats || (homepageContent as any)?.statsItems || []
  if (!stats || stats.length === 0) return null

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-0">
          {stats.map((stat: any, i: number) => (
            <div key={stat.id || i} className="flex items-center">
              <div className="text-center px-8 py-4">
                <div className="text-3xl md:text-4xl font-bold text-primary-800">{stat.value || stat.statValue || stat.number}</div>
                <div className="text-gray-500 mt-1 text-sm font-medium uppercase tracking-wide">{stat.label || stat.statLabel || stat.title}</div>
              </div>
              {i < stats.length - 1 && (
                <div className="hidden md:block w-px h-16 bg-primary-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
