import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="relative flex flex-1 flex-col items-center justify-center bg-white overflow-hidden">
        {/* Background Gradient Images */}
        <div
          className="pointer-events-none absolute left-0 top-0 h-full w-[35vw]"
          style={{
            background:
              'radial-gradient(60% 50% at 0% 50%, rgba(232, 106, 84, 0.18) 0%, rgba(232, 106, 84, 0) 70%)',
          }}
        />
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-[35vw]"
          style={{
            background:
              'radial-gradient(60% 50% at 100% 50%, rgba(232, 106, 84, 0.18) 0%, rgba(232, 106, 84, 0) 70%)',
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-1 flex-col items-center top-40 px-4">
          {/* Icon */}
          <Image
            src="/assets/icons/unlink.svg"
            alt="Page not found"
            width={120}
            height={120}
            className="mb-10 w-[80px] h-[80px] md:w-[120px] md:h-[120px]"
          />

          {/* Text Content */}
          <div className="flex flex-col items-center">
            <h1 className="text-center font-heading text-[72px] font-bold leading-[80px] text-primary">
              404
            </h1>
            <p className="text-center font-serif text-[36px] md:text-[72px] font-normal italic leading-[80px] tracking-[-2px] text-[#2A0E63]">
              Page not found
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" size="lg" href="/">
              Back to Home
            </Button>
            <Button variant="secondary" size="lg" href="/contact">
              I need help
            </Button>
          </div>
        </div>

        {/* USERLIFY Text at Bottom */}
        {/* <div className="flex w-full justify-center overflow-hidden">
          <p
            className="whitespace-nowrap font-heading text-[306px] font-bold leading-[306px] tracking-[8px] opacity-20"
            style={{
              background: 'linear-gradient(90deg, #FFFFFF 0%, #E86A54 20%, #E86A54 80%, #FFFFFF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            USERLIFY
          </p>
        </div> */}

        <div
          className="absolute left-1/2 -translate-x-1/2 pointer-events-none select-none overflow-hidden"
          style={{
            width: '1472px',
            height: '306px',
            top: '92%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div
            className="text-transparent bg-clip-text"
            style={{
              fontFamily: 'Nohemi, sans-serif',
              fontWeight: 700,
              fontSize: '306px',
              lineHeight: '306px',
              letterSpacing: '8px',
              opacity: 0.2,
              background: 'linear-gradient(90deg, #FFFFFF 0%, #E86A54 20%, #E86A54 80%, #FFFFFF 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            USERLIFY
          </div>
        </div>
      </main>
    </div>
  );
}
