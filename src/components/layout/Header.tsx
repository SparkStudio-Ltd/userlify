'use client';

import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/ui/Logo';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
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
          <div className="hidden items-center gap-1 rounded-full bg-gray-50 px-2 py-1.5 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'font-nav rounded-full px-5 py-2 text-sm font-medium transition-colors',
                  pathname === item.href
                    ? 'bg-white text-gray-950'
                    : 'text-gray-600 hover:text-gray-950'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button href="/contact" variant="primary" size="md">
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
                'block h-0.5 w-5 bg-gray-950 transition-all duration-300',
                isMobileMenuOpen && 'translate-y-[3px] rotate-45'
              )}
            />
            <span
              className={cn(
                'absolute block h-0.5 w-5 bg-gray-950 transition-all duration-300',
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
                  'font-nav block rounded-lg px-4 py-3 text-sm font-medium transition-colors',
                  pathname === item.href
                    ? 'bg-white text-gray-950'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-950'
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
