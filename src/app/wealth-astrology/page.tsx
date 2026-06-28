import { Metadata } from "next";
import AstrologerHero from "@/components/AstrologerHero";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import AreasServedDetailed from "@/components/AreasServedDetailed";
import Testimonials from "@/components/Testimonials";
import ConsultationProcess from "@/components/ConsultationProcess";
import FAQExtended from "@/components/FAQExtended";
import WealthAstrologySEO from "@/components/WealthAstrologySEO";
import CTASection from "@/components/CTASection";
import MobileCTABar from "@/components/MobileCTABar";

export const metadata: Metadata = {
    title: "Expert Wealth Astrology | Future Wealth Prediction & Money Horoscope",
    description: "Unlock financial abundance with expert wealth astrology. Get accurate future wealth prediction and your personalized money horoscope from top astrologers.",
    alternates: {
        canonical: "https://www.astrologer_in_navimumbai.in/wealth-astrology",
    },
    openGraph: {
        title: "Wealth Astrology | Money Horoscope & Predictions",
        description: "Struggling to save money? Get expert wealth astrology advice and future wealth predictions to remove financial blockages.",
        url: "https://www.astrologer_in_navimumbai.in/wealth-astrology",
        siteName: "Astrologer in Navi Mumbai",
        locale: "en_IN",
        type: "website",
    },
};

export default function WealthAstrologyPage() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Wealth Astrologer in Navi Mumbai",
        "image": "https://www.astrologer_in_navimumbai.in/Logos/Fav.png",
        "@id": "https://www.astrologer_in_navimumbai.in/wealth-astrology",
        "url": "https://www.astrologer_in_navimumbai.in/wealth-astrology",
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
            "reviewCount": "890"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How can wealth astrology help me save money?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Wealth astrology analyzes your 2nd and 11th houses to identify planetary blockages causing financial drain and provides remedies to ensure steady savings."
                }
            },
            {
                "@type": "Question",
                "name": "Can astrology predict my future wealth?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, by examining the Dashas of benefic planets like Jupiter and Venus, an astrologer can accurately predict periods of significant financial gain and wealth accumulation."
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
                "name": "Wealth Astrology",
                "item": "https://www.astrologer_in_navimumbai.in/wealth-astrology"
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
                title={<>Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500 inline-block">Wealth Astrology</span> Near You</>}
                subtitle="Unlock your money horoscope and get accurate future wealth predictions to secure lasting financial abundance."
                tagText="Wealth & Finance Expert"
            />
            <AboutSection />
            <Services />
            <WhyChooseUs />
            <AreasServedDetailed />
            <Testimonials />
            <ConsultationProcess />
            <FAQExtended />
            <WealthAstrologySEO />
            <CTASection />
            <MobileCTABar />
        </div>
    );
}
