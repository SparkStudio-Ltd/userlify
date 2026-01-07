/**
 * Common type definitions for the application
 */

// Navigation types
export interface NavItem {
  name: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  description?: string;
}

// Service types
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

// Case study types
export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: string;
  description: string;
  thumbnail: string;
  images: string[];
  tags: string[];
  results: {
    metric: string;
    value: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    avatar?: string;
  };
  publishedAt: string;
}

// Pricing types
export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  period: 'one-time' | 'monthly' | 'yearly';
  features: {
    text: string;
    included: boolean;
  }[];
  popular?: boolean;
  cta: {
    text: string;
    href: string;
  };
}

// Team member types
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  social: {
    twitter?: string;
    linkedin?: string;
    dribbble?: string;
    github?: string;
  };
}

// Testimonial types
export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  rating?: number;
}

// Blog post types
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: TeamMember;
  category: string;
  tags: string[];
  thumbnail: string;
  publishedAt: string;
  readingTime: number;
}

// Form types
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  budget?: string;
  projectType: string;
  message: string;
}

// API response types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

// Component prop types
export interface WithClassName {
  className?: string;
}

export interface WithChildren {
  children: React.ReactNode;
}

export interface WithClassNameAndChildren extends WithClassName, WithChildren {}
