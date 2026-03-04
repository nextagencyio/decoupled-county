'use client'

import { DrupalHomepage } from '@/lib/types'
import { Landmark } from 'lucide-react'

interface HeroSectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function HeroSection({ homepageContent }: HeroSectionProps) {
  const title = (homepageContent as any)?.heroTitle || (homepageContent as any)?.title || 'Welcome to Greenfield County'
  const subtitle = (homepageContent as any)?.heroSubtitle || ''
  const description = (homepageContent as any)?.heroDescription?.processed || ''

  return (
    <section className="bg-primary-800 pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-accent-400 rounded-full flex items-center justify-center">
              <Landmark className="w-6 h-6 text-primary-900" />
            </div>
            <span className="text-accent-300 text-sm font-medium uppercase tracking-wider">Official Website</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
          {subtitle && <p className="text-lg text-primary-200 mb-8">{subtitle}</p>}
          {description && (
            <div className="text-lg text-primary-200 mb-8" dangerouslySetInnerHTML={{ __html: description }} />
          )}
          <div className="flex flex-wrap gap-4">
            <a href="/services" className="px-6 py-3 bg-accent-500 text-primary-900 font-bold rounded hover:bg-accent-400 transition-colors">
              County Services
            </a>
            <a href="/contact" className="px-6 py-3 border-2 border-white text-white font-bold rounded hover:bg-white/10 transition-colors">
              Contact the County
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
