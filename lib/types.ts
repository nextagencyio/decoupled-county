// Shared types
export interface DrupalImage {
  url: string
  alt?: string
  width?: number
  height?: number
  variations?: ImageVariation[]
}

export interface ImageVariation {
  name: string
  url: string
  width: number
  height: number
}

export interface DrupalTerm {
  id: string
  name: string
  path?: string
}

// Base node type
export interface DrupalNode {
  __typename: string
  id: string
  title: string
  path: string
  body?: {
    processed: string
    summary?: string
  }
  image?: DrupalImage
  created?: {
    timestamp: number
  }
  changed?: {
    timestamp: number
  }
}

// Paragraph types
export interface DrupalStatItem {
  id: string
  number: string
  label: string
}

// Homepage
export interface DrupalHomepage extends DrupalNode {
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: {
    processed: string
  }
  statsItems?: DrupalStatItem[]
  featuredItemsTitle?: string
  ctaTitle?: string
  ctaDescription?: {
    processed: string
  }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface HomepageData {
  nodeHomepages: {
    nodes: DrupalHomepage[]
  }
}

// Department
export interface DrupalDepartment extends DrupalNode {
  phone?: string
  email?: string
  location?: string
  hours?: string
  departmentCategory?: DrupalTerm[]
}

export interface DepartmentsData {
  nodeDepartments: {
    nodes: DrupalDepartment[]
  }
}

// County Official
export interface DrupalOfficial extends DrupalNode {
  position?: string
  department?: DrupalTerm[]
  email?: string
  phone?: string
  office?: string
  photo?: DrupalImage
}

export interface OfficialsData {
  nodeOfficials: {
    nodes: DrupalOfficial[]
  }
}

// County Service
export interface DrupalService extends DrupalNode {
  department?: DrupalTerm[]
  onlineUrl?: string
  eligibility?: string
  fee?: string
  serviceCategory?: DrupalTerm[]
}

export interface ServicesData {
  nodeServices: {
    nodes: DrupalService[]
  }
}

// Public Meeting
export interface DrupalMeeting extends DrupalNode {
  meetingDate?: {
    timestamp: number
  }
  endDate?: {
    timestamp: number
  }
  location?: string
  meetingType?: DrupalTerm[]
  agendaUrl?: string
}

export interface MeetingsData {
  nodeMeetings: {
    nodes: DrupalMeeting[]
  }
}

// News Article
export interface DrupalNews extends DrupalNode {
  category?: DrupalTerm[]
  featured?: boolean
}

export interface NewsData {
  nodeNewsItems: {
    nodes: DrupalNews[]
  }
}

// Basic Page
export interface DrupalPage extends DrupalNode {}

// Feature color type
export type FeatureColor = 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'indigo'
