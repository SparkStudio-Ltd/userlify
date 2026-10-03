import Image from "next/image";

type StatItem = {
  title: string;
  description: string;
};

type CleanCardProps = {
  content: StatItem;
  iconPath?: string; // Optional: in case you want different icons per card
};

export default function CleanCard({ content, iconPath = "/assets/icons/servicesIcon1.svg" }: CleanCardProps) {
  return (
    <div className="group flex flex-col gap-5 p-6 transition-all duration-300 hover:translate-y-[-4px]">
      {/* Icon Container */}
      <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-gray-100 transition-colors group-hover:bg-[#FF8A65]/5">
        <Image 
          src={iconPath} 
          width={32} 
          height={32} 
          className="h-8 w-8 object-contain transition-transform group-hover:scale-110" 
          alt="feature-icon" 
        />
        
        {/* Sublte Decorative Star/Sparkle (Matches your image) */}
        <div className="absolute -right-1 -top-1 text-[#FF8A65] opacity-40 group-hover:opacity-100">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
        </div>
      </div>

      {/* Text Content */}
      <div className="space-y-3">
        <h3 
          className="text-xl font-bold leading-tight text-gray-900 md:text-2xl" 
          style={{ fontFamily: 'Nohemi, sans-serif' }}
        >
          {content.title}
        </h3>
        <p 
          className="text-[15px] leading-relaxed text-gray-600 md:text-[16px]" 
          style={{ fontFamily: 'Public Sans, sans-serif' }}
        >
          {content.description}
        </p>
      </div>
    </div>
    
    //     <div className="flex flex-col gap-4 p-4">
    //   <div className="w-12 h-12 flex items-center justify-center text-gray-900">
    //     <Image src="/assets/icons/servicesIcon1.svg" width={40} height={40} className="w-10 h-10" alt="icon-featured"></Image>
    //   </div>
    //   <div>
    //     <h3 className="text-[21px] font-bold text-[#030712] mb-2" style={{ fontFamily: 'Nohemi, sans-serif' }}>
    //       {content.title}
    //     </h3>
    //     <p className="text-[16px] text-[#030712] leading-relaxed font-[400]" style={{ fontFamily: 'Public Sans, sans-serif' }}>
    //       {content.description}
    //     </p>
    //   </div>
    // </div>
  );
}