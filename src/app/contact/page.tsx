import { Footer, Header } from '@/components/layout';
import { CTASection, FAQSectionContact } from '@/components/sections';
import ContactPageContent from '@/components/sections/ContactPageContent';

export default function ContactPage() {
  return (
    <>
      <Header />
      <ContactPageContent />
      <FAQSectionContact />
      <CTASection />
      <Footer />
    </>
  );
}
