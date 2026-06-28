import { Metadata } from "next";
import AstrologerHero from "@/components/AstrologerHero";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import AreasServedDetailed from "@/components/AreasServedDetailed";
import Testimonials from "@/components/Testimonials";
import ConsultationProcess from "@/components/ConsultationProcess";
import FAQExtended from "@/components/FAQExtended";
import CareerAstrologerSEO from "@/components/CareerAstrologerSEO";
import CTASection from "@/components/CTASection";
import MobileCTABar from "@/components/MobileCTABar";

export const metadata: Metadata = {
    title: "Best Career Astrologer | Career Guidance Astrology",
    description: "Consult the best career astrologer for expert career guidance astrology. Overcome professional hurdles and get accurate career horoscope insights.",
    alternates: {
        canonical: "https://www.astrologer_in_navimumbai.in/career-astrologer",
    },
    openGraph: {
        title: "Best Career Astrologer | Career Guidance",
        description: "Get accurate career guidance astrology and predictions. Find the right path and overcome stagnation with our expert career astrologer.",
        url: "https://www.astrologer_in_navimumbai.in/career-astrologer",
        siteName: "Astrologer in Navi Mumbai",
        locale: "en_IN",
        type: "website",
    },
};

export default function CareerAstrologerPage() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Career Astrologer in Navi Mumbai",
        "image": "https://www.astrologer_in_navimumbai.in/Logos/Fav.png",
        "@id": "https://www.astrologer_in_navimumbai.in/career-astrologer",
        "url": "https://www.astrologer_in_navimumbai.in/career-astrologer",
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
                "name": "How can a career astrologer help me?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A career astrologer analyzes your 10th house and planetary alignments to guide you toward the right profession, predict promotions, and suggest remedies for workplace issues."
                }
            },
            {
                "@type": "Question",
                "name": "Can astrology help me choose the right career path?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, career guidance astrology evaluates your inherent strengths based on your birth chart to recommend industries where you are most likely to succeed."
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
                "name": "Career Astrologer",
                "item": "https://www.astrologer_in_navimumbai.in/career-astrologer"
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
                title={<>Top <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500 inline-block">Career Astrologer</span> Near You</>}
                subtitle="Expert career guidance astrology to help you find the right path, overcome professional hurdles, and achieve lasting success."
                tagText="Career & Growth Expert"
            />
            <AboutSection />
            <Services />
            <WhyChooseUs />
            <AreasServedDetailed />
            <Testimonials />
            <ConsultationProcess />
            <FAQExtended />
            <CareerAstrologerSEO />
            <CTASection />
            <MobileCTABar />
        </div>
    );
}
