import Image from 'next/image';

export function FooterLogo() {
  return (
    <Image
      src="/assets/footerlogo.svg"
      alt="Footer Userlify"
      width={40}
      height={40}
      className="h-10 w-auto"
      priority
    />
  );
}
