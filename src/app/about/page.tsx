import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AboutTopSection, CTASection, OurTeamSection } from '@/components/sections';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Userlify.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <AboutTopSection/>
      <OurTeamSection/>
      <CTASection/>
      <Footer />
    </>
  );
}
