import '@/styles/globals.css';
import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';

const nohemi = localFont({
  src: [
    {
      path: '../../public/assets/Nohemi-ExtraLight-BF6438cc58a2634.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/assets/Nohemi-Light-BF6438cc5899919.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/assets/Nohemi-Regular-BF6438cc4d0e493.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/assets/Nohemi-Medium-BF6438cc5883899.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/assets/Nohemi-SemiBold-BF6438cc588a48a.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/assets/Nohemi-Bold-BF6438cc587b5b5.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/assets/Nohemi-ExtraBold-BF6438cc5881baf.ttf',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-nohemi',
  display: 'swap',
});

const instrumentSerif = localFont({
  src: [
    {
      path: '../../public/assets/InstrumentSerif-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/assets/InstrumentSerif-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-instrument',
  display: 'swap',
});

const publicSans = localFont({
  src: [
    {
      path: '../../public/assets/PublicSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-public-sans',
  display: 'swap',
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
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
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
    <html
      lang="en"
      className={`${nohemi.variable} ${instrumentSerif.variable} ${publicSans.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
