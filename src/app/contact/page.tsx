import { Footer, Header } from '@/components/layout';
import { ContactUsSection, CTASection, FAQSectionContact } from '@/components/sections';

export default function ContactPage() {
  return (
    <>
      <Header />
      <ContactUsSection />
      <FAQSectionContact />
      <CTASection />
      <Footer />
    </>
  );
}
