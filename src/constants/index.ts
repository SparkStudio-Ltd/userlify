/**
 * Application-wide constants
 */

export const SITE_CONFIG = {
  name: 'Userlify',
  tagline: 'Turning Startup Ideas into Real Products',
  description:
    'Userlify is a design agency specializing in App Design, Web Design, and Development.',
  url: 'https://userlify.com',
  email: 'hello@userlify.com',
  phone: '+1 (555) 123-4567',
  address: '123 Design Street, Creative City, CC 12345',
  social: {
    twitter: 'https://twitter.com/userlify',
    linkedin: 'https://linkedin.com/company/userlify',
    instagram: 'https://instagram.com/userlify',
    dribbble: 'https://dribbble.com/userlify',
    github: 'https://github.com/userlify',
  },
} as const;

export const NAVIGATION = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'Case Study', href: '/case-study' },
    { name: 'Pricing', href: '/pricing' },
  ],
  services: [
    { name: 'App Design', href: '/services/app-design' },
    { name: 'Web Design', href: '/services/web-design' },
    { name: 'Development', href: '/services/development' },
    { name: 'Branding', href: '/services/branding' },
  ],
  footer: {
    company: [
      { name: 'About', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
    ],
  },
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.6,
} as const;

export const API_ENDPOINTS = {
  contact: '/api/contact',
  quote: '/api/quote',
  newsletter: '/api/newsletter',
} as const;

export const SERVICES = [
  {
    id: 'app-design',
    title: 'App Design',
    description: 'Beautiful and intuitive mobile app designs that users love.',
    icon: 'app',
  },
  {
    id: 'web-design',
    title: 'Web Design',
    description: 'Stunning websites that convert visitors into customers.',
    icon: 'web',
  },
  {
    id: 'development',
    title: 'Development',
    description: 'Robust and scalable web and mobile applications.',
    icon: 'code',
  },
  {
    id: 'branding',
    title: 'Branding',
    description: 'Memorable brand identities that stand out.',
    icon: 'brand',
  },
] as const;
