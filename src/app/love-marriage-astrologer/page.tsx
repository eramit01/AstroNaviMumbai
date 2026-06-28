import { Metadata } from "next";
import AstrologerHero from "@/components/AstrologerHero";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import AreasServedDetailed from "@/components/AreasServedDetailed";
import Testimonials from "@/components/Testimonials";
import ConsultationProcess from "@/components/ConsultationProcess";
import FAQExtended from "@/components/FAQExtended";
import LoveMarriageSEO from "@/components/LoveMarriageSEO";
import CTASection from "@/components/CTASection";
import MobileCTABar from "@/components/MobileCTABar";

export const metadata: Metadata = {
    title: "Best Love Marriage Astrologer Near Me | Marriage Prediction Astrology",
    description: "Consult the best love marriage astrologer near you for accurate marriage prediction astrology. Get expert guidance for love and arranged marriages.",
    alternates: {
        canonical: "https://www.astrologer_in_navimumbai.in/love-marriage-astrologer",
    },
    openGraph: {
        title: "Best Love Marriage Astrologer | Marriage Prediction",
        description: "Expert love marriage astrologer for accurate marriage prediction astrology. Solve your relationship issues with proven astrological remedies.",
        url: "https://www.astrologer_in_navimumbai.in/love-marriage-astrologer",
        siteName: "Astrologer in Navi Mumbai",
        locale: "en_IN",
        type: "website",
    },
};

export default function LoveMarriageAstrologerPage() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Love Marriage Astrologer in Navi Mumbai",
        "image": "https://www.astrologer_in_navimumbai.in/Logos/Fav.png",
        "@id": "https://www.astrologer_in_navimumbai.in/love-marriage-astrologer",
        "url": "https://www.astrologer_in_navimumbai.in/love-marriage-astrologer",
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
            "reviewCount": "980"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How can a love marriage astrologer help me?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A love marriage astrologer analyzes your birth chart to predict compatibility, overcome family objections, and provide remedies for a successful love marriage."
                }
            },
            {
                "@type": "Question",
                "name": "Can astrology provide accurate marriage predictions?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, marriage prediction astrology uses planetary positions and dasha periods to accurately forecast the timing and nature of your marriage."
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
                "name": "Love Marriage Astrologer",
                "item": "https://www.astrologer_in_navimumbai.in/love-marriage-astrologer"
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
                title={<>Best <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500 inline-block">Love Marriage Astrologer</span> Near Me</>}
                subtitle="Get accurate marriage prediction astrology and expert solutions for love and inter-caste marriages."
                tagText="Love Marriage Specialist"
            />
            <AboutSection />
            <Services />
            <WhyChooseUs />
            <AreasServedDetailed />
            <Testimonials />
            <ConsultationProcess />
            <FAQExtended />
            <LoveMarriageSEO />
            <CTASection />
            <MobileCTABar />
        </div>
    );
}
