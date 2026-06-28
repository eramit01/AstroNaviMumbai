import { Metadata } from "next";
import AstrologerHero from "@/components/AstrologerHero";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import AreasServedDetailed from "@/components/AreasServedDetailed";
import Testimonials from "@/components/Testimonials";
import ConsultationProcess from "@/components/ConsultationProcess";
import FAQExtended from "@/components/FAQExtended";
import LakshmiPujaSEO from "@/components/LakshmiPujaSEO";
import CTASection from "@/components/CTASection";
import MobileCTABar from "@/components/MobileCTABar";

export const metadata: Metadata = {
    title: "Lakshmi Puja Booking | Book Expert Pandit for Dhan Lakshmi Puja",
    description: "Invite wealth and prosperity into your home. Book an expert Vedic pandit for Lakshmi Puja, Mahalakshmi Puja, Lakshmi Kubera Puja, and Diwali Lakshmi Puja.",
    alternates: {
        canonical: "https://www.astrologer_in_navimumbai.in/lakshmi-puja",
    },
    openGraph: {
        title: "Lakshmi Puja | Wealth & Prosperity Rituals",
        description: "Clear financial blockages and attract wealth. Book an authentic pandit for your Diwali Lakshmi Puja and Dhan Lakshmi Kubera Puja.",
        url: "https://www.astrologer_in_navimumbai.in/lakshmi-puja",
        siteName: "Astrologer in Navi Mumbai",
        locale: "en_IN",
        type: "website",
    },
};

export default function LakshmiPujaPage() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Lakshmi Puja Pandit in Navi Mumbai",
        "image": "https://www.astrologer_in_navimumbai.in/Logos/Fav.png",
        "@id": "https://www.astrologer_in_navimumbai.in/lakshmi-puja",
        "url": "https://www.astrologer_in_navimumbai.in/lakshmi-puja",
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
            "reviewCount": "1510"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What are the benefits of a Lakshmi Puja?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Performing a Lakshmi Puja invites Goddess Lakshmi into your home or business, clearing financial debts and ensuring a steady flow of wealth and prosperity."
                }
            },
            {
                "@type": "Question",
                "name": "What is the difference between a Lakshmi Puja and a Lakshmi Kubera Puja?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "While a standard Lakshmi Puja seeks the blessings of the Goddess of Wealth, a Lakshmi Kubera Puja simultaneously invokes Lord Kubera (the treasurer of the gods) for supreme financial accumulation and business success."
                }
            },
            {
                "@type": "Question",
                "name": "Can I book a pandit for Diwali Lakshmi Puja in advance?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Diwali is the most auspicious time for this puja, and our pandits are in high demand. We highly recommend using our lakshmi puja booking service well in advance."
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
                "name": "Lakshmi Puja",
                "item": "https://www.astrologer_in_navimumbai.in/lakshmi-puja"
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
                title={<>Book Pandit for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500 inline-block">Lakshmi Puja</span></>}
                subtitle="Invite unstoppable wealth and prosperity. Book an authentic Vedic pandit for Mahalakshmi and Lakshmi Kubera pujas."
                tagText="Wealth & Prosperity Rituals"
            />
            <AboutSection />
            <Services />
            <WhyChooseUs />
            <AreasServedDetailed />
            <Testimonials />
            <ConsultationProcess />
            <FAQExtended />
            <LakshmiPujaSEO />
            <CTASection />
            <MobileCTABar />
        </div>
    );
}
