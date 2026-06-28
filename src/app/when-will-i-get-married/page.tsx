import { Metadata } from "next";
import AstrologerHero from "@/components/AstrologerHero";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import AreasServedDetailed from "@/components/AreasServedDetailed";
import Testimonials from "@/components/Testimonials";
import ConsultationProcess from "@/components/ConsultationProcess";
import FAQExtended from "@/components/FAQExtended";
import WhenWillIGetMarriedSEO from "@/components/WhenWillIGetMarriedSEO";
import CTASection from "@/components/CTASection";
import MobileCTABar from "@/components/MobileCTABar";

export const metadata: Metadata = {
    title: "When Will I Get Married? | Accurate Marriage Timing Predictions",
    description: "Wondering when will I get married? Discover your exact marriage timeline with highly accurate astrology predictions and powerful Vedic remedies for delays.",
    alternates: {
        canonical: "https://www.astrologer_in_navimumbai.in/when-will-i-get-married",
    },
    openGraph: {
        title: "When Will I Get Married? | Astrology Predictions",
        description: "Are you facing delays in marriage? Find out exactly when you will get married and discover powerful remedies to overcome astrological blockages.",
        url: "https://www.astrologer_in_navimumbai.in/when-will-i-get-married",
        siteName: "Astrologer in Navi Mumbai",
        locale: "en_IN",
        type: "website",
    },
};

export default function WhenWillIGetMarriedPage() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Marriage Astrologer in Navi Mumbai",
        "image": "https://www.astrologer_in_navimumbai.in/Logos/Fav.png",
        "@id": "https://www.astrologer_in_navimumbai.in/when-will-i-get-married",
        "url": "https://www.astrologer_in_navimumbai.in/when-will-i-get-married",
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
            "reviewCount": "1050"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Can astrology tell me exactly when I will get married?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, by analyzing your 7th house, Venus, and specific planetary Dashas, an expert astrologer can calculate the exact timeframe for your marriage."
                }
            },
            {
                "@type": "Question",
                "name": "Why is my marriage getting delayed?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Delays are commonly caused by Manglik Dosha, a weak 7th lord, or malefic influences like Saturn. An astrological reading identifies these issues and offers specific remedies to resolve them."
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
                "name": "When Will I Get Married",
                "item": "https://www.astrologer_in_navimumbai.in/when-will-i-get-married"
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
                title={<>Find Out: <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500 inline-block">When Will I Get Married?</span></>}
                subtitle="Stop wondering and get an accurate timeline for your marriage. Overcome delays with expert Vedic astrology remedies."
                tagText="Marriage Timing Expert"
            />
            <AboutSection />
            <Services />
            <WhyChooseUs />
            <AreasServedDetailed />
            <Testimonials />
            <ConsultationProcess />
            <FAQExtended />
            <WhenWillIGetMarriedSEO />
            <CTASection />
            <MobileCTABar />
        </div>
    );
}
