'use client';



import { Menu, X } from '@/components/icons';

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

        'fixed left-0 right-0 top-0 z-50 transition-all duration-300 px-4 md:px-12',

        isScrolled || isMobileMenuOpen ? 'bg-white shadow-soft backdrop-blur-md' : 'bg-transparent'

      )}

    >

      <Container>

        <nav className="flex h-20 max-w-[1472px] items-center justify-between">

          {/* Logo */}

          <Link href="/" className="flex items-center">

            <Logo />

          </Link>



          {/* Desktop navigation */}

          <div className="hidden items-center gap-1 rounded-full bg-gray-50 px-2.5 py-2.5 md:flex">

            {navigation.map((item) => (

              <Link

                key={item.name}

                href={item.href}

                className={cn(

                  'font-nav rounded-full px-5 py-2 text-base font-medium transition-colors',

                  pathname === item.href

                    ? 'bg-white text-gray-950 shadow-[0px_2px_2px_0px_#0000000A]'

                    : 'text-gray-600 hover:text-gray-950'

                )}

              >

                {item.name}

              </Link>

            ))}

          </div>



          {/* CTA Button */}

          <div className="hidden md:block">

            <Button className='px-5 py-3 text-base tracking-[-0.25px] font-medium' href="/contact">

              Get a Quote

            </Button>

          </div>



          {/* Mobile Menu Button */}

          <button

            type="button"

            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-gray-950 backdrop-blur-sm md:hidden"

            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}

            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}

          >

            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}

          </button>

        </nav>



        {/* Mobile Menu */}

        <div

          className={cn(

            'overflow-hidden transition-all duration-300 md:hidden',

            isMobileMenuOpen ? 'min-h-[22rem]' : 'max-h-0'

          )}

        >

          <div className="flex flex-col items-center justify-center ">

            {navigation.map((item) => (

              <Link

                key={item.name}

                href={item.href}

                className={cn(

                  'font-nav block w-full text-center rounded-lg px-6 py-3 text-lg font-medium transition-colors',

                  pathname === item.href

                    ? 'text-primary'

                    : 'text-gray-600 hover:text-primary'

                )}

                onClick={() => setIsMobileMenuOpen(false)}

              >

                {item.name}

              </Link>

            ))}

            <div className="pt-4">

              <Button href="/get-quote" variant="primary" size="lg" className="w-full">

                Get a Quote

              </Button>

            </div>

          </div>

        </div>

      </Container>

    </header>

  );

}