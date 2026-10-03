import { Footer, Header } from '@/components/layout';
import { CTASection, ThankYouBannerSection } from '@/components/sections';
import ProcessStepsSection from '@/components/sections/ProcessStepsSection';

export default function ThankYouPage() {
    return (
        <>
            <Header />
            <ThankYouBannerSection/>
            <ProcessStepsSection/>
            <CTASection/>
            <Footer />
        </>
    );
}
