import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Get a Quote',
  description:
    'Start your project with Userlify. Get a custom quote for your app design, web design, or development needs.',
};

export default function GetQuotePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        <section className="section">
          <div className="container-custom">
            <h1 className="text-display-2 font-heading font-bold text-primary-800">
              Get a Quote
            </h1>
            <p className="mt-6 max-w-2xl text-body-lg text-primary-700/70">
              Tell us about your project and we&apos;ll get back to you with a custom quote.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
