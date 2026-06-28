import { Metadata } from "next";
import AstrologerHero from "@/components/AstrologerHero";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import AreasServedDetailed from "@/components/AreasServedDetailed";
import Testimonials from "@/components/Testimonials";
import ConsultationProcess from "@/components/ConsultationProcess";
import FAQExtended from "@/components/FAQExtended";
import NameNumerologySEO from "@/components/NameNumerologySEO";
import CTASection from "@/components/CTASection";
import MobileCTABar from "@/components/MobileCTABar";

export const metadata: Metadata = {
    title: "Name Numerology | Business Name Numerology Expert",
    description: "Align your personal and brand name with success. Consult our expert for name numerology and business name numerology to attract wealth and harmony.",
    alternates: {
        canonical: "https://www.astrologer_in_navimumbai.in/name-numerology",
    },
    openGraph: {
        title: "Name & Business Name Numerology Expert",
        description: "Does your name vibrate with success? Discover the power of name numerology and business name numerology to overcome obstacles and scale your enterprise.",
        url: "https://www.astrologer_in_navimumbai.in/name-numerology",
        siteName: "Astrologer in Navi Mumbai",
        locale: "en_IN",
        type: "website",
    },
};

export default function NameNumerologyPage() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Name Numerology Expert in Navi Mumbai",
        "image": "https://www.astrologer_in_navimumbai.in/Logos/Fav.png",
        "@id": "https://www.astrologer_in_navimumbai.in/name-numerology",
        "url": "https://www.astrologer_in_navimumbai.in/name-numerology",
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
            "reviewCount": "1040"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How does name numerology work?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Name numerology assigns a specific numerical value to each letter. An expert adjusts your spelling so the total sum harmonizes with your birth date, thereby removing blockages to success."
                }
            },
            {
                "@type": "Question",
                "name": "Why is business name numerology important?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The energetic vibration of your business name dictates its market success. Business name numerology ensures the name aligns with growth, attracts clients, and avoids legal or financial ruin."
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
                "name": "Name Numerology",
                "item": "https://www.astrologer_in_navimumbai.in/name-numerology"
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
                title={<>Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500 inline-block">Name Numerology</span> Guidance</>}
                subtitle="Transform your destiny and brand success with precise personal and business name numerology corrections."
                tagText="Name & Brand Numerologist"
            />
            <AboutSection />
            <Services />
            <WhyChooseUs />
            <AreasServedDetailed />
            <Testimonials />
            <ConsultationProcess />
            <FAQExtended />
            <NameNumerologySEO />
            <CTASection />
            <MobileCTABar />
        </div>
    );
}
