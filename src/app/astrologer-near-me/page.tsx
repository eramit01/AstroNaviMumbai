import { Metadata } from "next";
import AstrologerHero from "@/components/AstrologerHero";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import AreasServedDetailed from "@/components/AreasServedDetailed";
import Testimonials from "@/components/Testimonials";
import ConsultationProcess from "@/components/ConsultationProcess";
import FAQExtended from "@/components/FAQExtended";
import SEOContentBlock from "@/components/SEOContentBlock";
import CTASection from "@/components/CTASection";
import MobileCTABar from "@/components/MobileCTABar";

export const metadata: Metadata = {
    title: "Best Astrologer Near Me in Mumbai & Navi Mumbai | Online Consultation",
    description: "Looking for the best astrologer near you? Get accurate astrology guidance for marriage, career, business, and kundli matching in Mumbai & Navi Mumbai. Book now!",
    alternates: {
        canonical: "https://www.astrologer_in_navimumbai.in/astrologer-near-me",
    },
    openGraph: {
        title: "Best Astrologer Near Me in Mumbai & Navi Mumbai",
        description: "Get accurate astrology guidance for marriage, career, business, relationships, health, and life decisions. 30+ Years of Experience.",
        url: "https://www.astrologer_in_navimumbai.in/astrologer-near-me",
        siteName: "Astrologer in Navi Mumbai",
        locale: "en_IN",
        type: "website",
    },
};

export default function AstrologerNearMePage() {
    // Generate JSON-LD Schemas
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Best Astrologer in Navi Mumbai",
        "image": "https://www.astrologer_in_navimumbai.in/Logos/Fav.png",
        "@id": "https://www.astrologer_in_navimumbai.in/astrologer-near-me",
        "url": "https://www.astrologer_in_navimumbai.in/astrologer-near-me",
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
            "reviewCount": "1250"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How do I find the best astrologer near me in Mumbai & Navi Mumbai?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "To find the best astrologer near you, look for experienced professionals with verified reviews, decades of expertise, and personalized Vedic astrology solutions. Our 30+ years of trusted service make us a top choice."
                }
            },
            {
                "@type": "Question",
                "name": "Do you offer online astrology consultation services?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! We offer highly accurate online astrology consultations via phone, WhatsApp, and video calls. You can get expert guidance from the comfort of your home, anywhere in the world."
                }
            },
            {
                "@type": "Question",
                "name": "How accurate is kundli matching for marriage?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Kundli matching, based on traditional Vedic principles, is highly accurate in assessing compatibility, financial stability, and long-term harmony between prospective partners."
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
                "name": "Astrologer Near Me",
                "item": "https://www.astrologer_in_navimumbai.in/astrologer-near-me"
            }
        ]
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Inject JSON-LD Schema */}
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

            <AstrologerHero />
            <AboutSection />
            <Services />
            <WhyChooseUs />
            <AreasServedDetailed />
            <Testimonials />
            <ConsultationProcess />
            <FAQExtended />
            <SEOContentBlock />
            <CTASection />
            <MobileCTABar />
        </div>
    );
}
