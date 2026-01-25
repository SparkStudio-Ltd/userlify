import Image from 'next/image';
import steps from '../../../public/data/process-steps.json';

const cardPositions = [
  'lg:left-0 lg:top-0',
  'lg:left-[26%] lg:top-[43%]',
  'lg:left-[52%] lg:top-0',
  'lg:right-[-3%] lg:top-[42%]',
];

const arrowPositions = [
  { className: 'left-[26%] top-[25%] rotate-[12deg]' },
  { className: 'left-[52%] top-[89%] rotate-[175deg] scale-x-[-1]' },
  { className: 'right-[16%] top-[22%] rotate-[12deg]' },
];

export default function ProcessStepsSection() {
  const orderedSteps = [...steps].sort((a, b) => a.order - b.order);

  return (
    <section className="w-full bg-[#F8F8F7]">
      <div className="mx-auto flex w-full h-[1100px] max-w-[1920px] justify-center">
        <div className="flex w-full max-w-[1472px] flex-col items-center gap-24 rounded-[48px] bg-[#F8F8F7] py-18 sm:px-8 lg:h-[864px] lg:py-16">
          <header className="flex max-w-[820px] flex-col items-center gap-4 text-center">
            <div className="flex items-center justify-center gap-2 text-[14px] font-bold uppercase tracking-[0.75px] text-primary">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
              <span className='font-nav'>Process</span>
            </div>
            <p className="font-serif text-5xl leading-[50px] tracking-[-0.5px] italic text-[#1E1F23]">
              The Next Steps We Follow
            </p>
            <h2 className="font-heading text-5xl font-medium leading-[56px] text-[#1E1F23]">
              After Receiving Your Request
            </h2>
          </header>

          <div className="relative w-full flex-1 lg:min-h-[520px]">
            <div className="grid w-full grid-cols-1 gap-8 lg:block">
              {orderedSteps.map((step, index) => (
                <article
                  key={step.id}
                  className={`relative flex w-full flex-col gap-6 rounded-[24px] border border-[#E2DFDB] bg-white p-10 opacity-100 lg:absolute lg:h-[443px] lg:w-[350px] lg:gap-[200px] ${cardPositions[index]}`}
                >
                  <div>
                    <h3 className="font-sans text-[30px] font-normal text-[#1E1F23]">
                      {step.title}
                    </h3>
                    <p className="font-nav mt-3 text-[16px] font-normal leading-[24px] tracking-[-0.25px] text-[#4B4B4B]">
                      {step.description}
                    </p>
                  </div>
                  <div>
                    <Image
                      src={step.icon}
                      alt={`${step.title} icon`}
                      width={56}
                      height={56}
                    />
                  </div>
                </article>
              ))}
            </div>

            {arrowPositions.map((arrow, index) => (
              <div
                key={index}
                className={`pointer-events-none absolute hidden lg:block ${arrow.className}`}
                aria-hidden="true"
              >
                <Image
                  src="/assets/icons/arrowVector.svg"
                  alt=""
                  width={78}
                  height={56}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
