import { Header } from '@/components/layout/Header';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="relative flex flex-1 flex-col items-center justify-center bg-white overflow-hidden px-4">
        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-[400px]">
          {/* Icon */}
          <Image
            src="/assets/icons/unlink.svg"
            alt="Page not found"
            width={120}
            height={120}
            className="mb-8 opacity-30"
          />

          {/* 404 Text */}
          <h1
            className="text-[#EA7B69] text-center mb-2"
            style={{
              fontFamily: 'Nohemi, sans-serif',
              fontSize: '48px',
              fontWeight: 700,
              lineHeight: '1',
            }}
          >
            404
          </h1>

          {/* Page not found Text */}
          <p
            className="text-[#2A0E63] text-center mb-10"
            style={{
              fontFamily: 'Cormorant, serif',
              fontSize: '36px',
              fontWeight: 400,
              fontStyle: 'italic',
              lineHeight: '1.2',
            }}
          >
            Page not found
          </p>

          {/* Back to Home Button */}
          <Link
            href="/"
            className="w-full max-w-[200px] h-[50px] bg-[#EA7B69] hover:bg-[#d96956] text-white rounded-full flex items-center justify-center transition-colors mb-4"
            style={{
              fontFamily: 'Nohemi, sans-serif',
              fontSize: '16px',
              fontWeight: 500,
            }}
          >
            Back to Home
          </Link>

          {/* I need help Button */}
          <Link
            href="/contact"
            className="w-full max-w-[200px] h-[50px] bg-transparent hover:bg-gray-50 text-[#2A0E63] rounded-full flex items-center justify-center transition-colors border border-gray-200"
            style={{
              fontFamily: 'Nohemi, sans-serif',
              fontSize: '16px',
              fontWeight: 500,
            }}
          >
            I need help
          </Link>
        </div>

        {/* USERLIFY Background Text */}
        <div
          className="absolute left-1/2 -translate-x-1/2 pointer-events-none select-none overflow-hidden"
          style={{
            width: '100%',
            maxWidth: '1472px',
            height: 'auto',
            bottom: '0',
            transform: 'translateX(-50%)',
          }}
        >
          <div
            className="text-transparent bg-clip-text text-center"
            style={{
              fontFamily: 'Nohemi, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(80px, 20vw, 306px)',
              lineHeight: '1',
              letterSpacing: 'clamp(2px, 1vw, 8px)',
              opacity: 0.05,
              background: 'linear-gradient(90deg, #FFFFFF 0%, #E86A54 20%, #E86A54 80%, #FFFFFF 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '-0.25em',
            }}
          >
            USERLIFY
          </div>
        </div>
      </main>
    </div>
  );
}
