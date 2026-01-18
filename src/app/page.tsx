import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import {
  BlogSection,
  ClientsSection,
  ContactUsSection,
  CTASection,
  FAQSection,
  ProcessSection,
  ProjectsSection,
  ReviewsSection,
  ServicesSection,
  SliderSection,
  WhyChooseUsSection,
} from '@/components/sections';
import { HeroSection } from '@/components/sections/HeroSection';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SliderSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <ProjectsSection />
        <ReviewsSection />
        <ClientsSection />
        <ProcessSection />
        <ContactUsSection />
        <FAQSection />
        <BlogSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
