import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Case Study',
  description:
    'Explore our portfolio of successful projects. See how we have helped startups transform their ideas into real products.',
};

export default function CaseStudyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        <section className="section">
          <div className="container-custom">
            <h1 className="text-display-2 font-heading font-bold text-primary-800">
              Case Studies
            </h1>
            <p className="mt-6 max-w-2xl text-body-lg text-primary-700/70">
              Discover how we&apos;ve helped startups bring their visions to life.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
