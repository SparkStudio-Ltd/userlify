// import Image from 'next/image';
// import steps from '../../../public/data/process-steps.json';

// const cardPositions = [
//   'lg:left-0 lg:top-0',
//   'lg:left-[26%] lg:top-[43%]',
//   'lg:left-[52%] lg:top-0',
//   'lg:right-[-3%] lg:top-[42%]',
// ];

// const arrowPositions = [
//   { className: 'left-[26%] top-[25%] rotate-[12deg]' },
//   { className: 'left-[52%] top-[89%] rotate-[175deg] scale-x-[-1]' },
//   { className: 'right-[16%] top-[22%] rotate-[12deg]' },
// ];

// export default function ProcessStepsSection() {
//   const orderedSteps = [...steps].sort((a, b) => a.order - b.order);

//   return (
//     <section className="w-full bg-[#F8F8F7]">
//       <div className="mx-auto flex w-full h-[1100px] max-w-[1920px] justify-center">
//         <div className="flex w-full max-w-[1472px] flex-col items-center gap-24 rounded-[48px] bg-[#F8F8F7] py-18 sm:px-8 lg:h-[864px] lg:py-16">
//           <header className="flex max-w-[820px] flex-col items-center gap-4 text-center">
//             <div className="flex items-center justify-center gap-2 text-[14px] font-bold uppercase tracking-[0.75px] text-primary">
//               <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
//               <span className='font-nav'>Process</span>
//             </div>
//             <p className="font-serif text-5xl leading-[50px] tracking-[-0.5px] italic text-[#1E1F23]">
//               The Next Steps We Follow
//             </p>
//             <h2 className="font-heading text-5xl font-medium leading-[56px] text-[#1E1F23]">
//               After Receiving Your Request
//             </h2>
//           </header>

//           <div className="relative w-full flex-1 lg:min-h-[520px]">
//             <div className="grid w-full grid-cols-1 gap-8 lg:block">
//               {orderedSteps.map((step, index) => (
//                 <article
//                   key={step.id}
//                   className={`relative flex w-full flex-col gap-6 rounded-[24px] border border-[#E2DFDB] bg-white p-10 opacity-100 lg:absolute lg:h-[443px] lg:w-[350px] lg:gap-[200px] ${cardPositions[index]}`}
//                 >
//                   <div>
//                     <h3 className="font-sans text-[30px] font-normal text-[#1E1F23]">
//                       {step.title}
//                     </h3>
//                     <p className="font-nav mt-3 text-[16px] font-normal leading-[24px] tracking-[-0.25px] text-[#4B4B4B]">
//                       {step.description}
//                     </p>
//                   </div>
//                   <div>
//                     <Image
//                       src={step.icon}
//                       alt={`${step.title} icon`}
//                       width={56}
//                       height={56}
//                     />
//                   </div>
//                 </article>
//               ))}
//             </div>

//             {arrowPositions.map((arrow, index) => (
//               <div
//                 key={index}
//                 className={`pointer-events-none absolute hidden lg:block ${arrow.className}`}
//                 aria-hidden="true"
//               >
//                 <Image
//                   src="/assets/icons/arrowVector.svg"
//                   alt=""
//                   width={78}
//                   height={56}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import Image from 'next/image';
import steps from '../../../public/data/process-steps.json';

// Updated breakpoints to 2xl (1536px) to prevent overlap on 1400px screens
const cardPositions = [
  '2xl:left-0 2xl:top-0',
  '2xl:left-[25.3%] 2xl:top-[43%]',
  '2xl:left-[50.7%] 2xl:top-0',
  '2xl:right-0 2xl:top-[42%]',
];

const arrowPositions = [
  { className: 'left-[26%] top-[25%] rotate-[12deg]' },
  { className: 'left-[52%] top-[89%] rotate-[175deg] scale-x-[-1]' },
  { className: 'right-[18%] top-[22%] rotate-[12deg]' },
];

export default function ProcessStepsSection() {
  const orderedSteps = [...steps].sort((a, b) => a.order - b.order);

  return (
    <section className="w-full bg-[#F8F8F7] py-12 2xl:py-0">
      {/* Container: Grows with content on mobile, fixed height only on very large screens */}
      <div className="mx-auto flex w-full h-auto 2xl:h-[1100px] max-w-[1920px] justify-center px-4 lg:px-12 md:px-8 2xl:px-0">
        <div className="flex w-full max-w-[1472px] flex-col items-center gap-12 2xl:gap-24 rounded-[48px] bg-[#F8F8F7] py-8 2xl:py-16 2xl:h-[864px]">
          
          <header className="flex max-w-[820px] flex-col items-center gap-4 text-center">
            <div className="flex items-center justify-center gap-2 text-[14px] font-bold uppercase tracking-[0.75px] text-primary">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="font-nav">Process</span>
            </div>
            <p className="font-serif text-3xl md:text-5xl leading-tight md:leading-[50px] tracking-[-0.5px] italic text-[#1E1F23]">
              The Next Steps We Follow
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-medium leading-tight md:leading-[56px] text-[#1E1F23]">
              After Receiving Your Request
            </h2>
          </header>

          <div className="relative w-full flex-1 2xl:min-h-[520px]">
            {/* Grid for everything below 1536px (Mobile/Tablet/Laptop) */}
            {/* Absolute Zigzag for 2xl+ (Desktop) */}
            <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 2xl:block">
              {orderedSteps.map((step, index) => (
                <article
                  key={step.id}
                  className={`
                    group relative flex w-full flex-col gap-6 rounded-[24px] 
                    border border-[#E2DFDB] bg-white p-8 md:p-10 
                    transition-all duration-300 hover:shadow-lg hover:-translate-y-1
                    2xl:absolute 2xl:h-[443px] 2xl:w-[350px] 2xl:gap-[200px] 
                    ${cardPositions[index]}
                  `}
                >
                  <div>
                    <h3 className="font-sans text-[24px] md:text-[30px] font-normal text-[#1E1F23]">
                      {step.title}
                    </h3>
                    <p className="font-nav mt-3 text-[15px] md:text-[16px] font-normal leading-[24px] tracking-[-0.25px] text-[#4B4B4B]">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* ICON SECTION */}
                  <div className="mt-auto">
                    {/* Fixed Size Container for Icon */}
                    <div className="relative h-14 w-14">
                      
                      {/* 1. Original Black Icon (Fades out on hover) */}
                      <Image
                        src={step.icon}
                        alt={`${step.title} icon`}
                        fill
                        className="object-contain transition-opacity duration-300 group-hover:opacity-0"
                      />
                      <div
                        className="absolute inset-0 bg-[#E86A54] transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                        style={{
                          maskImage: `url(${step.icon})`,
                          maskSize: 'contain',
                          maskRepeat: 'no-repeat',
                          maskPosition: 'center',
                          WebkitMaskImage: `url(${step.icon})`, // For Safari support
                          WebkitMaskSize: 'contain',
                          WebkitMaskRepeat: 'no-repeat',
                          WebkitMaskPosition: 'center',
                        }}
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Arrows (Visible only on 2xl screens) */}
            {arrowPositions.map((arrow, index) => (
              <div
                key={index}
                className={`pointer-events-none absolute hidden 2xl:block ${arrow.className}`}
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