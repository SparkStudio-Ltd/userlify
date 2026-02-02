'use client';

import projectsData from '@/../public/data/projects.json';
import { ProjectCard } from '@/components/cards';
import { ArrowUpRight } from '@/components/icons';
import { Button } from '@/components/ui';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Card reveal animation
      const cards = gsap.utils.toArray('.card-item');

      cards.forEach((card) => {
        gsap.fromTo(
          card as Element,
          {
            filter: 'blur(20px)',
            opacity: 0,
            y: 100,
          },
          {
            filter: 'blur(0px)',
            opacity: 1,
            y: 0,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card as Element,
              start: 'top 85%',
              end: 'top 55%',
              scrub: 1,
              toggleActions: 'play reverse play reverse',
            },
          }
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#030712] px-4 lg:px-12 md:px-8 py-24 lg:py-30 text-white "
    >
      <div className="relative z-10 mx-auto max-w-[1472px]">
        {/* HEADER SECTION */}
        <div className="mb-20 grid gap-8 lg:grid-cols-2 lg:gap-[250px]">
          {/* LEFT COLUMN */}
          <div className='flex flex-col gap-4' >
            {/* Kicker */}
                    <p
                        className="text-[#EA7B69] text-sm leading-5 tracking-[0.75px] uppercase font-bold"
                        style={{ fontFamily: 'Public Sans, sans-serif' }}
                    >
                        • Stats
                    </p>

                    {/* Title */}
                    <h2
                        className="text-[48px] leading-[56px] font-medium text-white"
                        style={{ fontFamily: 'Nohemi, sans-serif' }}
                    >
                        Real Products, Real Impact {' '}
                        <span className="italic font-serif md:block">Designed by Userlify</span>
                    </h2>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col xl:pl-24 ">
            <p className="font-nav mb-6 text-base leading-relaxed text-white">
              We're proud to have designed apps and digital experiences that are live on
              the Play Store and App Store. Each project reflects our passion for
              usability, creativity, and measurable business growth.
            </p>
            <div>
              <Button
                variant="primary"
                size="lg"
                href="/portfolio/"
                className="group text-lg"
              >
                View All Portfolio
                <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>

        {/* PROJECTS GRID */}
        <div className="space-y-8">
          {/* First Row: 60-40 split */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3">
              {projectsData[0] && (
                <ProjectCard
                  title={projectsData[0].title}
                  description={projectsData[0].description}
                  image={projectsData[0].image}
                  tags={projectsData[0].tags}
                  isLarge={true}
                />
              )}
            </div>
            <div className="lg:col-span-2">
              {projectsData[1] && (
                <ProjectCard
                  title={projectsData[1].title}
                  description={projectsData[1].description}
                  image={projectsData[1].image}
                  tags={projectsData[1].tags}
                  isLarge={false}
                />
              )}
            </div>
          </div>

          {/* Second Row: 40-60 split */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
            <div className="lg:col-span-2">
              {projectsData[2] && (
                <ProjectCard
                  title={projectsData[2].title}
                  description={projectsData[2].description}
                  image={projectsData[2].image}
                  tags={projectsData[2].tags}
                  isLarge={false}
                />
              )}
            </div>
            <div className="lg:col-span-3">
              {projectsData[3] && (
                <ProjectCard
                  title={projectsData[3].title}
                  description={projectsData[3].description}
                  image={projectsData[3].image}
                  tags={projectsData[3].tags}
                  isLarge={true}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
