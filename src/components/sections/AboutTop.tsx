'use client';

import Image from 'next/image';


export default function AboutTopSection() {

  return (
    <main className="bg-white pb-12 md:pb-20 lg:pb-24 overflow-hidden">

      <section className="py-28 md:pt-44">
        <div className="mx-auto w-full max-w-[1472px] px-4 md:px-8 lg:px-12 2xl:px-0">
          <div className="flex flex-col gap-8 md:gap-16 lg:gap-24">
            <div className="mx-auto text-center md:w-[774px]">

              <h1 className="font-heading text-[40px] md:text-[56px] lg:text-[72px] leading-[48px] md:leading-[64px] lg:leading-[80px] tracking-[0px] text-[#2A0E63] font-bold" style={{ fontFamily: 'Nohemi, sans-serif'}}>
                <span className="block font-serif font-normal italic leading-[48px] md:leading-[64px] lg:leading-[80px] tracking-[-2px] text-[#E86A54]">
                  A Creative UI/UX{' '}
                </span>
                Design Agency
              </h1>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch gap-8 md:gap-12 lg:gap-16">
              <div className="h-full overflow-hidden rounded-2xl md:rounded-4xl shadow-soft-lg">
                <Image
                  src="/assets/images/about_image.png"
                  alt="Design preview"
                  width={832}
                  height={482}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>

              <div className="relative h-full">
                <div className="absolute -left-2 md:-left-6 -top-4 md:-top-8 h-[300px] w-[300px] md:h-[650px] md:w-[700px] rounded-full bg-gradient-to-br from-[#F6B9A4] via-[#F9D6C7] to-transparent blur-3xl opacity-70" />
                <div className="relative flex h-full flex-col gap-6 md:gap-10 rounded-2xl md:rounded-3xl bg-white p-6 md:p-10 shadow-soft-lg">
                  <div className="flex h-20 w-20 items-center justify-center gap-2 rounded-[99px] bg-[#FDEFED]">
                    <Image
                      src="/assets/icons/whySvg1.svg"
                      alt="idea icon"
                      width={40}
                      height={40}
                      className="h-10 w-10"
                    />
                  </div>
                  <h2 className="font-heading text-[18px] md:text-[20px] lg:text-[24px] font-medium leading-[26px] md:leading-[28px] lg:leading-[28px] tracking-[0px] text-[#030712]">
                    Userlify is a growing creative UI/UX design service company helping startups turn ideas
                  </h2>
                  <p className="font-nav text-[14px] md:text-[16px] lg:text-[18px] font-normal leading-[22px] md:leading-[26px] lg:leading-[28px] tracking-[-0.4px] text-[#030712]">
                    Userlify is a growing creative UI/UX design service company helping startups
                    turn ideas into user-focused digital products. We design experiences that are
                    simple, intuitive, and built to scale -- from early MVPs to live products on
                    the Play Store and App Store.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1920px] px-4 md:px-8 lg:px-12">
        <div className="mx-auto flex flex-col lg:flex-row w-full max-w-[1472px] gap-8 md:gap-16 lg:gap-24">
          <div className="flex flex-1 flex-col gap-4 md:gap-6">
            <span className="font-nav text-[12px] md:text-[14px] font-bold uppercase leading-[20px] tracking-[0.75px] text-primary">
              • Process
            </span>
            <h2 className="font-heading text-[28px] md:text-[40px] lg:text-[48px] font-medium leading-[36px] md:leading-[48px] lg:leading-[56px] text-[#030712]">
              Design Agency Turning
              <br />
              <span className="font-serif italic">Startup Ideas</span> into Real
            </h2>
            <p className="font-nav text-[14px] md:text-[16px] font-normal leading-[22px] md:leading-[24px] tracking-[-0.25px] text-[#030712]">
              We’re proud to have designed apps and digital experiences that are live on the Play
              Store and App Store. Each project reflects our passion for usability, creativity,
              and measurable business growth.
            </p>
          </div>

          <div className="flex flex-1 flex-col justify-between gap-6 md:gap-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
              <div className="flex flex-col gap-4">
                <h3 className="font-heading text-[18px] md:text-[24px] font-medium leading-[26px] md:leading-[32px] text-[#030712]">
                  Mission
                </h3>
                <p className="font-nav text-[14px] md:text-[16px] font-normal leading-[22px] md:leading-[24px] tracking-[-0.25px] text-[#030712]">
                  We’re proud to have designed apps and digital experiences that are live on the
                  Play Store and App Store. Each project reflects our passion for usability,
                  creativity, and measurable business growth.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-heading text-[18px] md:text-[24px] font-medium leading-[26px] md:leading-[32px] text-[#030712]">
                  Vision
                </h3>
                <p className="font-nav text-[14px] md:text-[16px] font-normal leading-[22px] md:leading-[24px] tracking-[-0.25px] text-[#030712]">
                  We’re proud to have designed apps and digital experiences that are live on the
                  Play Store and App Store. Each project reflects our passion for usability,
                  creativity, and measurable business growth.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-2xl bg-[#F8F8F7] p-6 md:p-8 gap-4 md:gap-2 min-h-[250px] md:h-[276px] lg:h-auto lg:min-h-[300px]">
              <p className="font-nav text-[14px] md:text-[20px] lg:text-[18px] font-normal italic leading-[22px] md:leading-[36px] lg:leading-[32px] tracking-[-0.6px] text-[#030712]">
                We’re proud to have designed apps and digital experiences that are live on the
                Play Store and App Store. Each project reflects our passion for usability,
                creativity, and measurable business growth.
              </p>
              <div className="flex w-full justify-end">
                <div className="flex flex-col items-end gap-2">
                  <Image
                    src="/assets/icons/signatureSvg.svg"
                    alt="Signature"
                    width={73}
                    height={56}
                    className="h-[40px] md:h-[56px] lg:h-[48px] w-auto"
                  />
                  <div className="text-right">
                    <p className="font-nav text-[14px] md:text-[21px] lg:text-[18px] font-normal italic leading-[22px] md:leading-[36px] lg:leading-[32px] tracking-[-0.6px] text-[#030712]">
                      Alamin Hossain
                    </p>
                    <p className="font-nav text-[11px] md:text-[13px] font-medium leading-[16px] md:leading-[20px] tracking-[0px] text-[#030712]">
                      Founder at Userlify
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
