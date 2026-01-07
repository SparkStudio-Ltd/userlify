'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/ui/Logo';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '/features' },
  { name: 'Case Study', href: '/case-study' },
  { name: 'Pricing', href: '/pricing' },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed left-0 right-0 top-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/90 shadow-soft backdrop-blur-md' : 'bg-transparent'
      )}
    >
      <Container>
        <nav className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 rounded-full border border-primary-800/10 bg-white/80 px-2 py-1.5 backdrop-blur-sm md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'rounded-full px-5 py-2 text-sm font-medium transition-colors',
                  pathname === item.href
                    ? 'bg-primary-50 text-primary-800'
                    : 'text-primary-700/70 hover:text-primary-800'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button href="/get-quote" variant="primary" size="md">
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={cn(
                'block h-0.5 w-5 bg-primary-800 transition-all duration-300',
                isMobileMenuOpen && 'translate-y-[3px] rotate-45'
              )}
            />
            <span
              className={cn(
                'absolute block h-0.5 w-5 bg-primary-800 transition-all duration-300',
                isMobileMenuOpen ? '-rotate-45' : 'translate-y-[6px]'
              )}
            />
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={cn(
            'overflow-hidden transition-all duration-300 md:hidden',
            isMobileMenuOpen ? 'max-h-80' : 'max-h-0'
          )}
        >
          <div className="space-y-1 pb-6 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'block rounded-lg px-4 py-3 text-sm font-medium transition-colors',
                  pathname === item.href
                    ? 'bg-primary-50 text-primary-800'
                    : 'text-primary-700/70 hover:bg-primary-50/50 hover:text-primary-800'
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Button href="/get-quote" variant="primary" size="md" className="w-full">
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
