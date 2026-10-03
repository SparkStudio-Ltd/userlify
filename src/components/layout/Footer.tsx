import { FooterLogo } from '@/components/ui/FooterLogo';
import Image from 'next/image';
import Link from 'next/link';

const footerLinks = {
  services: [
    { name: 'UI/UX Design', href: '/services/uiux' },
    { name: 'Web Design', href: '/services/web-design' },
    { name: 'App Design', href: '/services/app-design' },
    { name: 'Landing Page', href: '/services/landing-page' },
  ],
  quickLinks: [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Services', href: '/services' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
};

const contactInfo = [
  { icon: '/assets/icons/location_icon.svg', text: 'Uttara, Dhaka' },
  { icon: '/assets/icons/location_icon.svg', text: 'Philadelphia, USA' },
  { icon: '/assets/icons/mail_icon.svg', text: 'support@userlify.com' },
];

const socialLinks = [
  { name: 'Facebook', href: 'https://facebook.com', icon: '/assets/icons/facebook_icon.svg' },
  { name: 'Twitter', href: 'https://twitter.com', icon: '/assets/icons/twitter_icon.svg' },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: '/assets/icons/linkedin_icon.svg' },
  { name: 'Instagram', href: 'https://instagram.com', icon: '/assets/icons/instagram_icon.svg' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // Changed fixed height h-[746px] to min-h to accommodate mobile stacking
    <footer className="relative w-full py-24 md:pt-24  px-4 md:px-12 min-h-screen md:min-h-[746px] bg-[#0B041B] overflow-hidden flex flex-col justify-between">

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-[1472px] mx-auto w-full">

        {/* Footer Columns */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-8 text-left">

          {/* Brand / About - 30% */}
          <div className="w-full md:w-[25%] flex flex-col items-start">
            <FooterLogo />
            <p
              className="mt-6 text-white"
              style={{
                fontFamily: 'Public Sans, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '24px',
                letterSpacing: '-0.25px',
              }}
            >
              Userlify, Inc. helps you stand out online with smart design, strong branding, clear
              with lorem ipsum dolor
            </p>
          </div>

          {/* Services & Quick Links Row on Mobile */}
          <div className="flex flex-row md:contents gap-8 md:gap-0 w-full md:w-auto">
            {/* Services - 14% */}
            <div className="w-1/2 md:w-[16.66%]">
              <h3
                className="text-white mb-4"
                style={{
                  fontFamily: 'Nohemi, sans-serif',
                  fontSize: '21px',
                  lineHeight: '21px',
                }}
              >
                Services
              </h3>
              <ul className="space-y-4">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white hover:text-[#EA7B69] transition-colors"
                      style={{
                        fontFamily: 'Public Sans, sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '24px',
                        letterSpacing: '-0.25px',
                      }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links - 14% */}
            <div className="w-1/2 md:w-[16.66%]">
              <h3
                className="text-white mb-4"
                style={{
                  fontFamily: 'Nohemi, sans-serif',
                  fontSize: '21px',
                  lineHeight: '21px',
                }}
              >
                Quick Links
              </h3>
              <ul className="space-y-4">
                {footerLinks.quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white hover:text-[#EA7B69] transition-colors"
                      style={{
                        fontFamily: 'Public Sans, sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '24px',
                        letterSpacing: '-0.25px',
                      }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Company - 14% */}
          <div className="w-full md:w-[16.66%]">
            <h3
              className="text-white mb-4"
              style={{
                fontFamily: 'Nohemi, sans-serif',
                fontSize: '21px',
                lineHeight: '21px',
              }}
            >
              Company
            </h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-[#EA7B69] transition-colors"
                    style={{
                      fontFamily: 'Public Sans, sans-serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '24px',
                      letterSpacing: '-0.25px',
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - 25% */}
          <div className="w-full md:w-[25%]">
            <h3
              className="text-white mb-4"
              style={{
                fontFamily: 'Nohemi, sans-serif',
                fontSize: '21px',
                lineHeight: '21px',
              }}
            >
              Contact
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li
                  key={index}
                  className="flex items-start justify-start gap-2"
                >
                  <Image src={info.icon} alt="" width={24} height={24} className="mt-0.5" />
                  <span
                    className="text-white"
                    style={{
                      fontFamily: 'Public Sans, sans-serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '24px',
                      letterSpacing: '-0.25px',
                    }}
                  >
                    {info.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom Row */}
        {/* Changed to flex-col-reverse for mobile (Copyright at bottom) or standard flex-col */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center mt-12 md:mt-20 pb-8 gap-8 md:gap-0">
          {/* Copyright */}
          <div className="w-full md:w-[70%] text-center md:text-left">
            <p
              className="text-white"
              style={{
                fontFamily: 'Public Sans, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '24px',
                letterSpacing: '-0.25px',
              }}
            >
              © {currentYear} Userlify, Inc. All Rights Reserved.
            </p>
          </div>

          {/* Social Icons */}
          <div className="w-full md:w-[25%] flex justify-start md:justify-end gap-4 md:gap-[43px]">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-[11px] border border-[#2D2F33] bg-[#1F2023] hover:bg-[#EA7B69] transition-colors"
              >
                <Image src={social.icon} alt={social.name} width={20} height={20} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* USERLIFY Background Text */}
      <div
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none select-none overflow-hidden"
        style={{
          width: '100%', // Changed from fixed px to %
          maxWidth: '1472px',
          height: 'auto', // Allow auto height
          bottom: '0', // Position at bottom
          top: 'auto', // Reset top
          transform: 'translateX(-50%)', // Center horizontally
        }}
      >
        <div
          className="text-transparent bg-clip-text text-center"
          style={{
            fontFamily: 'Nohemi, sans-serif',
            fontWeight: 700,
            // Responsive font size using Clamp or VW units
            fontSize: 'clamp(60px, 15vw, 306px)',
            lineHeight: '1',
            letterSpacing: 'clamp(2px, 1vw, 8px)',
            opacity: 0.2,
            background: 'linear-gradient(90deg, #0B041B 0%, #E86A54 20%, #E86A54 80%, #0B041B 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            // Added margin to push it partially off-screen if that was the intended "cut-off" look
            marginBottom: '-0.23em'
          }}
        >
          USERLIFY
        </div>
      </div>
    </footer>
  );
}