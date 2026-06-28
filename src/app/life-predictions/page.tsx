import { Metadata } from "next";
import AstrologerHero from "@/components/AstrologerHero";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import AreasServedDetailed from "@/components/AreasServedDetailed";
import Testimonials from "@/components/Testimonials";
import ConsultationProcess from "@/components/ConsultationProcess";
import FAQExtended from "@/components/FAQExtended";
import LifePredictionsSEO from "@/components/LifePredictionsSEO";
import CTASection from "@/components/CTASection";
import MobileCTABar from "@/components/MobileCTABar";

export const metadata: Metadata = {
    title: "Life Predictions | Wealth, Property & Foreign Settlement Astrology",
    description: "Will I become rich? Will I settle abroad? When will I buy a house? Get accurate life predictions from top astrologers to navigate your future with confidence.",
    alternates: {
        canonical: "https://www.astrologer_in_navimumbai.in/life-predictions",
    },
    openGraph: {
        title: "Life Predictions | Astrology for Wealth, Property & Success",
        description: "Get precise astrological answers to your biggest life questions: wealth, property, foreign settlement, and business success.",
        url: "https://www.astrologer_in_navimumbai.in/life-predictions",
        siteName: "Astrologer in Navi Mumbai",
        locale: "en_IN",
        type: "website",
    },
};

export default function LifePredictionsPage() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Life Prediction Astrologer in Navi Mumbai",
        "image": "https://www.astrologer_in_navimumbai.in/Logos/Fav.png",
        "@id": "https://www.astrologer_in_navimumbai.in/life-predictions",
        "url": "https://www.astrologer_in_navimumbai.in/life-predictions",
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
            "reviewCount": "1350"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Can astrology predict if I will become rich?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, by analyzing the 2nd (wealth) and 11th (gains) houses in your Kundli, an astrologer can accurately predict your financial success and periods of major wealth accumulation."
                }
            },
            {
                "@type": "Question",
                "name": "Will I settle abroad according to my horoscope?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The 9th and 12th houses govern foreign travel and settlement. An activated 12th house with favorable planetary transits indicates a high probability of settling abroad."
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
                "name": "Life Predictions",
                "item": "https://www.astrologer_in_navimumbai.in/life-predictions"
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
                title={<>Accurate <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500 inline-block">Life Predictions</span> & Astrology</>}
                subtitle="Will I become rich? Will I settle abroad? Get precise answers to your biggest life questions from our expert astrologer."
                tagText="Life Prediction Expert"
            />
            <AboutSection />
            <Services />
            <WhyChooseUs />
            <AreasServedDetailed />
            <Testimonials />
            <ConsultationProcess />
            <FAQExtended />
            <LifePredictionsSEO />
            <CTASection />
            <MobileCTABar />
        </div>
    );
}
