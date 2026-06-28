import { Metadata } from "next";
import AstrologerHero from "@/components/AstrologerHero";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import AreasServedDetailed from "@/components/AreasServedDetailed";
import Testimonials from "@/components/Testimonials";
import ConsultationProcess from "@/components/ConsultationProcess";
import FAQExtended from "@/components/FAQExtended";
import FinancialAstrologySEO from "@/components/FinancialAstrologySEO";
import CTASection from "@/components/CTASection";
import MobileCTABar from "@/components/MobileCTABar";

export const metadata: Metadata = {
    title: "Accurate Financial Astrology | Top Business Astrologer",
    description: "Navigate market trends and corporate growth with accurate financial astrology. Consult a top business astrologer to protect assets and ensure business success.",
    alternates: {
        canonical: "https://www.astrologer_in_navimumbai.in/financial-astrology",
    },
    openGraph: {
        title: "Financial Astrology & Business Guidance",
        description: "Overcome sudden losses and debts. Secure your investments and corporate growth with expert financial astrology and business astrologer consultations.",
        url: "https://www.astrologer_in_navimumbai.in/financial-astrology",
        siteName: "Astrologer in Navi Mumbai",
        locale: "en_IN",
        type: "website",
    },
};

export default function FinancialAstrologyPage() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Financial Astrologer in Navi Mumbai",
        "image": "https://www.astrologer_in_navimumbai.in/Logos/Fav.png",
        "@id": "https://www.astrologer_in_navimumbai.in/financial-astrology",
        "url": "https://www.astrologer_in_navimumbai.in/financial-astrology",
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
            "reviewCount": "720"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How can financial astrology help my corporate growth?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Financial astrology helps identify the most auspicious periods for investment, expansion, and debt clearance based on your horoscope and planetary transits."
                }
            },
            {
                "@type": "Question",
                "name": "Why should I consult a business astrologer?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A business astrologer provides strategic insights into partnership compatibility, workplace dynamics, and the timing of major business decisions to prevent losses and ensure long-term success."
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
                "name": "Financial Astrology",
                "item": "https://www.astrologer_in_navimumbai.in/financial-astrology"
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
                title={<>Accurate <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500 inline-block">Financial Astrology</span> Guidance</>}
                subtitle="Consult a top business astrologer to protect your corporate assets, overcome debts, and scale your wealth."
                tagText="Corporate Finance Expert"
            />
            <AboutSection />
            <Services />
            <WhyChooseUs />
            <AreasServedDetailed />
            <Testimonials />
            <ConsultationProcess />
            <FAQExtended />
            <FinancialAstrologySEO />
            <CTASection />
            <MobileCTABar />
        </div>
    );
}
