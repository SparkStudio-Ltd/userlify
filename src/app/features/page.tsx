import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Features',
  description:
    'Explore our comprehensive features including App Design, Web Design, Development, and more. See how we can help transform your startup ideas.',
};

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        <section className="section">
          <div className="container-custom">
            <h1 className="text-display-2 font-heading font-bold text-primary-800">
              Our Features
            </h1>
            <p className="mt-6 max-w-2xl text-body-lg text-primary-700/70">
              Comprehensive design and development services tailored for startups.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
