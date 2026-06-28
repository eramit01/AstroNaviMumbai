import { Metadata } from "next";
import AstrologerHero from "@/components/AstrologerHero";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import AreasServedDetailed from "@/components/AreasServedDetailed";
import Testimonials from "@/components/Testimonials";
import ConsultationProcess from "@/components/ConsultationProcess";
import FAQExtended from "@/components/FAQExtended";
import MobileNumerologySEO from "@/components/MobileNumerologySEO";
import CTASection from "@/components/CTASection";
import MobileCTABar from "@/components/MobileCTABar";

export const metadata: Metadata = {
    title: "Mobile Number Numerology | Get a Lucky Phone Number",
    description: "Your phone number affects your luck. Consult our expert for mobile number numerology to choose a lucky sequence that attracts wealth, health, and success.",
    alternates: {
        canonical: "https://www.astrologer_in_navimumbai.in/mobile-number-numerology",
    },
    openGraph: {
        title: "Mobile Number Numerology | Attract Success & Wealth",
        description: "Is your mobile number bringing you bad luck? Discover the power of mobile number numerology to select a highly auspicious digital identity.",
        url: "https://www.astrologer_in_navimumbai.in/mobile-number-numerology",
        siteName: "Astrologer in Navi Mumbai",
        locale: "en_IN",
        type: "website",
    },
};

export default function MobileNumerologyPage() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Mobile Numerology Expert in Navi Mumbai",
        "image": "https://www.astrologer_in_navimumbai.in/Logos/Fav.png",
        "@id": "https://www.astrologer_in_navimumbai.in/mobile-number-numerology",
        "url": "https://www.astrologer_in_navimumbai.in/mobile-number-numerology",
        "telephone": "+919323600011",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Sai Sagar CHS, B-305, Plot no-50, Sector 20",
            "addressLocality": "Kharghar, Navi Mumbai",
            "addressRegion": "Maharashtra",
            "postalCode": "410210",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 19.0330,
            "longitude": 73.0297
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "750"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How does mobile number numerology work?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It calculates the sum and sequence of your phone digits. An expert matches these vibrations to your birth chart, ensuring the number acts as a magnet for positive opportunities."
                }
            },
            {
                "@type": "Question",
                "name": "Can changing my mobile number really bring success?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, because you use it constantly, its energetic frequency deeply impacts your daily life. An aligned number can clear obstacles and attract wealth and positive relationships."
                }
            }
        ]
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.astrologer_in_navimumbai.in/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Mobile Number Numerology",
                "item": "https://www.astrologer_in_navimumbai.in/mobile-number-numerology"
            }
        ]
    };

    return (
        <div className="flex flex-col min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <AstrologerHero 
                title={<>Lucky <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500 inline-block">Mobile Number</span> Numerology</>}
                subtitle="Transform your digital identity. Find a powerful, lucky mobile number that attracts wealth and success into your life."
                tagText="Mobile Numerology Expert"
            />
            <AboutSection />
            <Services />
            <WhyChooseUs />
            <AreasServedDetailed />
            <Testimonials />
            <ConsultationProcess />
            <FAQExtended />
            <MobileNumerologySEO />
            <CTASection />
            <MobileCTABar />
        </div>
    );
}
