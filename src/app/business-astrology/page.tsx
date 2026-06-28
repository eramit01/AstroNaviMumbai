import { Metadata } from "next";
import AstrologerHero from "@/components/AstrologerHero";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import AreasServedDetailed from "@/components/AreasServedDetailed";
import Testimonials from "@/components/Testimonials";
import ConsultationProcess from "@/components/ConsultationProcess";
import FAQExtended from "@/components/FAQExtended";
import BusinessAstrologySEO from "@/components/BusinessAstrologySEO";
import CTASection from "@/components/CTASection";
import MobileCTABar from "@/components/MobileCTABar";

export const metadata: Metadata = {
    title: "Expert Business Astrology Consultation | Corporate Astrologer",
    description: "Secure your business growth with expert business astrology consultation. Get accurate timing, industry selection, and remedies from top corporate astrologers.",
    alternates: {
        canonical: "https://www.astrologer_in_navimumbai.in/business-astrology",
    },
    openGraph: {
        title: "Business Astrology Consultation | Corporate Astrologer",
        description: "Facing business losses or looking to start a new venture? Get expert business astrology consultation to choose the right industry, name, and launch time.",
        url: "https://www.astrologer_in_navimumbai.in/business-astrology",
        siteName: "Astrologer in Navi Mumbai",
        locale: "en_IN",
        type: "website",
    },
};

export default function BusinessAstrologyPage() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Business Astrologer in Navi Mumbai",
        "image": "https://www.astrologer_in_navimumbai.in/Logos/Fav.png",
        "@id": "https://www.astrologer_in_navimumbai.in/business-astrology",
        "url": "https://www.astrologer_in_navimumbai.in/business-astrology",
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
            "reviewCount": "1150"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How does a business astrology consultation help?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It helps you choose the right industry, select an auspicious business name, find the best timing (Shubh Muhurat) for launches, and mitigate financial losses using Vedic remedies."
                }
            },
            {
                "@type": "Question",
                "name": "Can astrology help me avoid business losses?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, by analyzing your 7th and 11th houses, an astrologer can identify unfavorable periods and provide remedies to protect your wealth and ensure steady business growth."
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
                "name": "Business Astrology",
                "item": "https://www.astrologer_in_navimumbai.in/business-astrology"
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
                title={<>Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500 inline-block">Business Astrology</span> Consultation</>}
                subtitle="Scale your enterprise and protect your investments with precise timing and Vedic corporate astrology guidance."
                tagText="Business Astrologer"
            />
            <AboutSection />
            <Services />
            <WhyChooseUs />
            <AreasServedDetailed />
            <Testimonials />
            <ConsultationProcess />
            <FAQExtended />
            <BusinessAstrologySEO />
            <CTASection />
            <MobileCTABar />
        </div>
    );
}
