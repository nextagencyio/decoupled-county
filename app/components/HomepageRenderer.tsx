'use client'

import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import CTASection from './CTASection'
import ErrorBoundary from './ErrorBoundary'
import { DrupalHomepage } from '@/lib/types'
import {
  FileText,
  HardHat,
  TreePine,
  HeartPulse,
  Vote,
  Scale,
  Landmark,
  Building2,
  Shield,
  Users,
  BookOpen,
  Gavel,
  ArrowRight,
  Megaphone,
  Info,
} from 'lucide-react'
import Image from 'next/image'

interface HomepageRendererProps {
  homepageContent: DrupalHomepage | null | undefined
}

const quickLinks = [
  { title: 'Property Records', description: 'Search property records, deeds, and assessments', icon: FileText, href: '/services', color: 'bg-primary-600' },
  { title: 'Building Permits', description: 'Apply for building, zoning, and land use permits', icon: HardHat, href: '/services', color: 'bg-accent-600' },
  { title: 'Parks & Recreation', description: 'County parks, trails, programs, and facility rentals', icon: TreePine, href: '/departments', color: 'bg-primary-700' },
  { title: 'Public Health', description: 'Health department services, clinics, and resources', icon: HeartPulse, href: '/departments', color: 'bg-red-700' },
  { title: 'Elections', description: 'Voter registration, polling locations, and election results', icon: Vote, href: '/services', color: 'bg-primary-800' },
  { title: 'Court System', description: 'Court schedules, records, jury duty, and legal resources', icon: Scale, href: '/services', color: 'bg-primary-900' },
]

const countyServices = [
  { title: 'County Administration', description: 'County manager, budget, and administrative services', icon: Landmark },
  { title: 'Planning & Zoning', description: 'Land use planning, zoning maps, and development review', icon: Building2 },
  { title: "Sheriff's Office", description: 'Law enforcement, public safety, and community programs', icon: Shield },
  { title: 'Human Services', description: 'Social services, aging services, and community support', icon: Users },
  { title: 'Library System', description: 'County libraries, programs, and digital resources', icon: BookOpen },
  { title: 'Clerk of Court', description: 'Court filings, marriage licenses, and official records', icon: Gavel },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&q=80&fit=crop', alt: 'Greenfield County countryside', caption: 'County Countryside' },
  { src: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=600&q=80&fit=crop', alt: 'County park and recreation area', caption: 'County Parks' },
  { src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80&fit=crop', alt: 'Community meeting at county building', caption: 'Board Meeting' },
  { src: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&q=80&fit=crop', alt: 'Greenfield County courthouse', caption: 'County Courthouse' },
]

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Alert / Announcement Banner */}
      <div className="bg-accent-50 border-b border-accent-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0">
              <Megaphone className="w-5 h-5 text-accent-700" />
            </div>
            <p className="text-sm text-accent-900 font-medium">
              <span className="font-bold">Public Notice:</span> Board of Commissioners meeting scheduled for next Tuesday at 6:30 PM.{' '}
              <a href="/meetings" className="underline hover:text-accent-700">View agenda and details</a>
            </p>
          </div>
        </div>
      </div>

      <ErrorBoundary>
        <HeroSection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Quick Links Section */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Quick Links</h2>
            <p className="text-gray-600 mt-1">Access frequently used county services</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow group"
              >
                <div className="h-1 bg-primary-600" />
                <div className="p-6 flex items-start gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 ${link.color} rounded-lg flex items-center justify-center`}>
                    <link.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-primary-700 transition-colors">{link.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{link.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <ErrorBoundary>
        <StatsSection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* County Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">County Departments</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore the departments and services that Greenfield County provides to residents, businesses, and visitors.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {countyServices.map((service) => (
              <div
                key={service.title}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="h-1 bg-primary-600" />
                <div className="p-6 text-center">
                  <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-7 h-7 text-primary-700" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-500">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="/departments"
              className="inline-flex items-center px-6 py-3 bg-primary-700 text-white rounded hover:bg-primary-800 transition-colors font-bold"
            >
              View All Departments
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* County Photo Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Our County</h2>
            <p className="text-gray-600">Scenes from around Greenfield County</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img) => (
              <div key={img.caption} className="relative group overflow-hidden rounded-lg">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <p className="text-white text-sm font-medium">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ErrorBoundary>
        <CTASection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Official Multi-Column Footer */}
      <footer className="bg-primary-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* About */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent-500 rounded flex items-center justify-center">
                  <Landmark className="w-5 h-5 text-primary-900" />
                </div>
                <span className="text-lg font-bold text-white">Greenfield County</span>
              </div>
              <p className="text-primary-300 text-sm mb-4">
                An official website of Greenfield County. Dedicated to providing efficient, transparent, and responsive services to our residents.
              </p>
              <div className="text-primary-400 text-sm space-y-1">
                <p>100 County Square, Greenfield, NC 27401</p>
                <p>(336) 555-0100</p>
                <p>info@greenfieldcounty.gov</p>
              </div>
            </div>

            {/* Government */}
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Government</h4>
              <ul className="space-y-2 text-primary-300 text-sm">
                <li><a href="/officials" className="hover:text-accent-400 transition-colors">County Officials</a></li>
                <li><a href="/departments" className="hover:text-accent-400 transition-colors">Departments</a></li>
                <li><a href="/meetings" className="hover:text-accent-400 transition-colors">Public Meetings</a></li>
                <li><a href="/news" className="hover:text-accent-400 transition-colors">News & Announcements</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Services</h4>
              <ul className="space-y-2 text-primary-300 text-sm">
                <li><a href="/services" className="hover:text-accent-400 transition-colors">All Services</a></li>
                <li><a href="/services" className="hover:text-accent-400 transition-colors">Property Records</a></li>
                <li><a href="/services" className="hover:text-accent-400 transition-colors">Permits</a></li>
                <li><a href="/contact" className="hover:text-accent-400 transition-colors">Report an Issue</a></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Connect</h4>
              <ul className="space-y-2 text-primary-300 text-sm">
                <li><a href="/contact" className="hover:text-accent-400 transition-colors">Contact Us</a></li>
                <li><a href="/meetings" className="hover:text-accent-400 transition-colors">Public Hearings</a></li>
                <li><a href="/news" className="hover:text-accent-400 transition-colors">Newsletter</a></li>
                <li><a href="/contact" className="hover:text-accent-400 transition-colors">Feedback</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar with accessibility statement */}
        <div className="border-t border-primary-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-400">
              <p>&copy; {new Date().getFullYear()} Greenfield County. All rights reserved.</p>
              <div className="flex items-center gap-1">
                <Info className="w-3 h-3" />
                <span>An official website of Greenfield County</span>
              </div>
              <div className="flex gap-4">
                <a href="/accessibility" className="hover:text-accent-400 transition-colors">Accessibility</a>
                <a href="/privacy" className="hover:text-accent-400 transition-colors">Privacy Policy</a>
                <a href="/terms" className="hover:text-accent-400 transition-colors">Terms of Use</a>
                <a href="/sitemap" className="hover:text-accent-400 transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
