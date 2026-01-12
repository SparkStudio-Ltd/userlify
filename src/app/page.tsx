import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { ServicesSection, SliderSection } from '@/components/sections';
import { HeroSection } from '@/components/sections/HeroSection';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SliderSection />
        <ServicesSection />
      </main>
      <Footer />
    </>
  );
}
