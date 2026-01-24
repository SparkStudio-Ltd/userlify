'use client';

import Image from 'next/image';


export default function AboutTopSection() {

    return (
        <main className="min-h-screen bg-white py-30">
        <section className="section">
          <div className="container-custom">
            <div className="flex flex-col gap-24">
              <div className="text-center">
                <h1 className="font-heading text-[72px] font-medium leading-[80px] tracking-[0px] text-[#2A0E63]">
                  A Creative UI/UX
                  <br />
                  Design Agency Built
                  <br />
                  for{' '}
                  <span className="font-serif text-[72px] font-normal italic leading-[80px] tracking-[-2px]">
                    Startup Growth
                  </span>
                </h1>
              </div>

              <div className="grid grid-flow-col items-center gap-16 ">
                <div className="overflow-hidden rounded-4xl shadow-soft-lg">
                  <Image
                    src="/assets/images/about_image.png"
                    alt="Design preview"
                    width={832}
                    height={482}
                    className="w-[832px] h-[482px] object-cover"
                    priority
                  />
                </div>

                <div className="relative">
                  <div className="absolute -left-6 -top-8 h-[650px] w-[700px] rounded-full bg-gradient-to-br from-[#F6B9A4] via-[#F9D6C7] to-transparent blur-3xl opacity-70" />
                  <div className="relative flex h-[482px] w-[576px] flex-col gap-10 rounded-3xl bg-white p-10 shadow-soft-lg">
                    <div className="flex h-20 w-20 items-center justify-center gap-2 rounded-[99px] bg-[#F2EDFD]">
                      <Image
                        src="/assets/icons/whySvg1.svg"
                        alt="idea icon"
                        width={40}
                        height={40}
                        className="h-10 w-10"
                      />
                    </div>
                    <h2 className="font-heading text-[24px] font-medium leading-[28px] tracking-[0px] text-[#030712]">
                      Userlify is a growing creative UI/UX design service company helping
                      startups turn ideas
                    </h2>
                    <p className="font-nav text-[18px] font-normal leading-[28px] tracking-[-0.4px] text-[#030712]">
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

        <section className="mx-auto w-full max-w-[1920px] px-12">
          <div className="mx-auto flex w-full max-w-[1472px] gap-24">
            <div className="flex flex-1 flex-col gap-6">
              <span className="font-nav text-[14px] font-bold uppercase leading-[20px] tracking-[0.75px] text-primary">
                • Process
              </span>
              <h2 className="font-heading text-[48px] font-medium leading-[56px] text-[#030712]">
                Design Agency Turning
                <br />
                <span className="font-serif italic">Startup Ideas</span> into Real
              </h2>
              <p className="font-nav text-[16px] font-normal leading-[24px] tracking-[-0.25px] text-[#030712]">
                We’re proud to have designed apps and digital experiences that are live on the Play
                Store and App Store. Each project reflects our passion for usability, creativity,
                and measurable business growth.
              </p>
            </div>

            <div className="flex flex-1 flex-col justify-between gap-10">
              <div className="grid grid-cols-2 gap-10">
                <div className="flex flex-col gap-4">
                  <h3 className="font-heading text-[24px] font-medium leading-[32px] text-[#030712]">
                    Mission
                  </h3>
                  <p className="font-nav text-[16px] font-normal leading-[24px] tracking-[-0.25px] text-[#030712]">
                    We’re proud to have designed apps and digital experiences that are live on the
                    Play Store and App Store. Each project reflects our passion for usability,
                    creativity, and measurable business growth.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="font-heading text-[24px] font-medium leading-[32px] text-[#030712]">
                    Vision
                  </h3>
                  <p className="font-nav text-[16px] font-normal leading-[24px] tracking-[-0.25px] text-[#030712]">
                    We’re proud to have designed apps and digital experiences that are live on the
                    Play Store and App Store. Each project reflects our passion for usability,
                    creativity, and measurable business growth.
                  </p>
                </div>
              </div>

              <div className="flex h-[276px] flex-col justify-between rounded-2xl bg-[#F8F8F7] p-6 gap-2">
                <p className="font-nav text-[20px] font-normal italic leading-[36px] tracking-[-0.6px] text-[#030712]">
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
                      className="h-[56px] w-[73px]"
                    />
                    <div className="text-right">
                      <p className="font-nav text-[21px] font-normal italic leading-[36px] tracking-[-0.6px] text-[#030712]">
                        Alamin Hossain
                      </p>
                      <p className="font-nav text-[13px] font-medium leading-[20px] tracking-[0px] text-[#030712]">
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
