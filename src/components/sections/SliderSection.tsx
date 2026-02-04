import imageSliderData from '@/../public/data/image-slider.json';
import serviceSliderData from '@/../public/data/service-slider.json';
import { ImageSlider, ServiceSlider } from '@/components/sliders';

export default function SliderSection() {
    return (
        <section className="w-full pt-0 pb-16 bg-white">
            <div className="w-full">
                {/* Image Slider - Right to Left */}
                <ImageSlider slides={imageSliderData.slides} />

                {/* Gap between sliders - 96px */}
                <div className="h-0 md:h-24" />

                {/* Service Slider - Left to Right */}
                <ServiceSlider services={serviceSliderData.services} />
            </div>
        </section>
    );
}
