import { Footer, Header } from '@/components/layout';
import { ThankYouBannerSection } from '@/components/sections';
import ProcessStepsSection from '@/components/sections/ProcessStepsSection';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function ThankYouPage() {
    return (
        <>
            <Header />
            <ThankYouBannerSection/>
            <ProcessStepsSection/>
            <Footer />
        </>
    );
}
