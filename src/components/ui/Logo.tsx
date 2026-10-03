import Image from 'next/image';

export function Logo() {
  return (
    <Image
      src="/assets/userlify-logo.svg"
      alt="Userlify"
      width={40}
      height={40}
      className="h-10 w-auto"
      priority
    />
  );
}
