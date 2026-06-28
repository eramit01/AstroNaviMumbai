import { Metadata } from "next";
import AstrologerHero from "@/components/AstrologerHero";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import AreasServedDetailed from "@/components/AreasServedDetailed";
import Testimonials from "@/components/Testimonials";
import ConsultationProcess from "@/components/ConsultationProcess";
import FAQExtended from "@/components/FAQExtended";
import TorontoPujaSEO from "@/components/TorontoPujaSEO";
import CTASection from "@/components/CTASection";
import MobileCTABar from "@/components/MobileCTABar";

export const metadata: Metadata = {
    title: "Online Pandit for Toronto | Indian Hindu Priest Online",
    description: "Book an authentic Indian pandit online for Toronto. We provide highly trained Vedic scholars for live video call pujas.",
    alternates: {
        canonical: "https://www.astrologer_in_navimumbai.in/online-pandit-toronto",
    },
};

export default function TorontoPujaPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <AstrologerHero 
                title={<>Online Pandit <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500 inline-block">Services for Toronto</span></>}
                subtitle="Stay spiritually connected to your roots. Book an authentic Indian priest online for live virtual pujas perfectly synced to Toronto timezones."
                tagText="Toronto Virtual Hindu Priest"
            />
            <AboutSection />
            <Services />
            <WhyChooseUs />
            <AreasServedDetailed />
            <Testimonials />
            <ConsultationProcess />
            <FAQExtended />
            <TorontoPujaSEO />
            <CTASection area="Toronto" />
            <MobileCTABar />
        </div>
    );
}
