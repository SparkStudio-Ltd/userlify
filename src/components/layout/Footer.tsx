
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
    <footer className="relative w-full h-[746px] bg-[#0B041B] overflow-hidden">
      {/* Main Footer Content */}
      <div className="relative z-10 max-w-[1472px] mx-auto pt-[120px] px-12">
        {/* Footer Columns */}
        <div className="flex justify-between gap-8">
          {/* Brand / About - 30% */}
          <div className="w-[25%]">


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

          {/* Services - 14% */}
          <div className="w-[16.66%]">
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
          <div className="w-[16.66%]">
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

          {/* Company - 14% */}
          <div className="w-[16.66%]">
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

          {/* Contact - 14% */}
          <div className="w-[25%]">
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
                <li key={index} className="flex items-start gap-2">
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
        <div className="flex justify-between items-center mt-20 pb-8">
          {/* Copyright - 70% */}
          <div className="w-[70%]">
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

          {/* Social Icons - 30% */}
          <div className="w-[25%] flex justify-end gap-[43px]">
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
          width: '1472px',
          height: '306px',
          top: '90%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className="text-transparent bg-clip-text"
          style={{
            fontFamily: 'Nohemi, sans-serif',
            fontWeight: 700,
            fontSize: '306px',
            lineHeight: '306px',
            letterSpacing: '8px',
            opacity: 0.2,
            background: 'linear-gradient(90deg, #0B041B 0%, #E86A54 20%, #E86A54 80%, #0B041B 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          USERLIFY
        </div>
      </div>
    </footer>
  );
}
