import { Metadata } from "next";
import AstrologerHero from "@/components/AstrologerHero";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import AreasServedDetailed from "@/components/AreasServedDetailed";
import Testimonials from "@/components/Testimonials";
import ConsultationProcess from "@/components/ConsultationProcess";
import FAQExtended from "@/components/FAQExtended";
import KundliMatchingSEO from "@/components/KundliMatchingSEO";
import CTASection from "@/components/CTASection";
import MobileCTABar from "@/components/MobileCTABar";

export const metadata: Metadata = {
    title: "Best Kundli Matching Near Me | Online Kundli Matching",
    description: "Looking for expert kundli matching near you? Get accurate online kundli matching for marriage from top Vedic astrologers. Ensure a happy married life.",
    alternates: {
        canonical: "https://www.astrologer_in_navimumbai.in/kundli-matching",
    },
    openGraph: {
        title: "Kundli Matching | Online Horoscope Matching for Marriage",
        description: "Get detailed online kundli matching and horoscope compatibility checking for a successful marriage. Expert guidance available near you.",
        url: "https://www.astrologer_in_navimumbai.in/kundli-matching",
        siteName: "Astrologer in Navi Mumbai",
        locale: "en_IN",
        type: "website",
    },
};

export default function KundliMatchingPage() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Kundli Matching Astrologer in Navi Mumbai",
        "image": "https://www.astrologer_in_navimumbai.in/Logos/Fav.png",
        "@id": "https://www.astrologer_in_navimumbai.in/kundli-matching",
        "url": "https://www.astrologer_in_navimumbai.in/kundli-matching",
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
            "ratingValue": "4.9",
            "reviewCount": "1340"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Why is kundli matching important for marriage?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Kundli matching helps determine the compatibility of the couple in terms of mindset, health, financial stability, and long-term harmony."
                }
            },
            {
                "@type": "Question",
                "name": "Do you provide online kundli matching?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we provide highly accurate online kundli matching services. You can consult with our expert astrologer via phone or video call."
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
                "name": "Kundli Matching",
                "item": "https://www.astrologer_in_navimumbai.in/kundli-matching"
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
                title={<>Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500 inline-block">Kundli Matching</span> Near You</>}
                subtitle="Get accurate online kundli matching and detailed horoscope compatibility for a successful and happy marriage."
                tagText="Kundli Matching Expert"
            />
            <AboutSection />
            <Services />
            <WhyChooseUs />
            <AreasServedDetailed />
            <Testimonials />
            <ConsultationProcess />
            <FAQExtended />
            <KundliMatchingSEO />
            <CTASection />
            <MobileCTABar />
        </div>
    );
}
