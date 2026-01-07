import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Flexible pricing plans designed for startups of all sizes. Find the perfect plan for your project needs.',
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        <section className="section">
          <div className="container-custom">
            <h1 className="text-display-2 font-heading font-bold text-primary-800">
              Pricing Plans
            </h1>
            <p className="mt-6 max-w-2xl text-body-lg text-primary-700/70">
              Flexible plans designed to grow with your startup.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
