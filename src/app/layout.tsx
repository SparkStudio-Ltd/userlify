import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: {
    default: 'Userlify - Design Agency Turning Startup Ideas into Real Products',
    template: '%s | Userlify',
  },
  description:
    'Userlify is a design agency specializing in App Design, Web Design, and Development. We turn startup ideas into real products.',
  keywords: [
    'design agency',
    'app design',
    'web design',
    'development',
    'startup',
    'product design',
    'UI/UX',
  ],
  authors: [{ name: 'Userlify', url: 'https://userlify.com' }],
  creator: 'Userlify',
  publisher: 'Userlify',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://userlify.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://userlify.com',
    siteName: 'Userlify',
    title: 'Userlify - Design Agency Turning Startup Ideas into Real Products',
    description:
      'We specialize in App Design, Web Design, and Development. Turn your startup ideas into real products.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Userlify - Design Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Userlify - Design Agency',
    description: 'Turning Startup Ideas into Real Products',
    images: ['/og-image.png'],
    creator: '@userlify',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FDF8F6' },
    { media: '(prefers-color-scheme: dark)', color: '#3D1D5C' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
