import { Metadata } from "next";
import AstrologerHero from "@/components/AstrologerHero";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import AreasServedDetailed from "@/components/AreasServedDetailed";
import Testimonials from "@/components/Testimonials";
import ConsultationProcess from "@/components/ConsultationProcess";
import FAQExtended from "@/components/FAQExtended";
import SatyanarayanSEO from "@/components/SatyanarayanSEO";
import CTASection from "@/components/CTASection";
import MobileCTABar from "@/components/MobileCTABar";

export const metadata: Metadata = {
    title: "Satyanarayan Puja Booking | Expert Satyanarayan Pandit",
    description: "Book an expert Satyanarayan pandit for an authentic Satyanarayan Puja. Get complete guidance on the pooja vidhi, samagri, and the sacred vrat katha.",
    alternates: {
        canonical: "https://www.astrologer_in_navimumbai.in/satyanarayan-puja",
    },
    openGraph: {
        title: "Satyanarayan Puja | Authentic Vedic Pandit Booking",
        description: "Bring peace and prosperity to your home. Book an experienced pandit for Satyanarayan puja, vrat katha recitation, and complete pooja vidhi guidance.",
        url: "https://www.astrologer_in_navimumbai.in/satyanarayan-puja",
        siteName: "Astrologer in Navi Mumbai",
        locale: "en_IN",
        type: "website",
    },
};

export default function SatyanarayanPujaPage() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Satyanarayan Puja Pandit in Navi Mumbai",
        "image": "https://www.astrologer_in_navimumbai.in/Logos/Fav.png",
        "@id": "https://www.astrologer_in_navimumbai.in/satyanarayan-puja",
        "url": "https://www.astrologer_in_navimumbai.in/satyanarayan-puja",
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
            "reviewCount": "1280"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Why is the Satyanarayan Puja performed?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It is performed to seek the blessings of Lord Vishnu for peace, prosperity, and the removal of obstacles. It is highly auspicious before major life events like marriages or buying a new home."
                }
            },
            {
                "@type": "Question",
                "name": "Do you provide the complete list of Satyanarayan puja samagri?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, once you confirm your Satyanarayan puja booking, our pandit will provide you with a comprehensive and exact list of the required samagri."
                }
            },
            {
                "@type": "Question",
                "name": "Will the pandit recite the complete Satyanarayan Vrat Katha?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. Our expert Vedic pandits recite the complete Satyanarayan Vrat Katha with devotion and explain its significance to the family."
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
                "name": "Satyanarayan Puja",
                "item": "https://www.astrologer_in_navimumbai.in/satyanarayan-puja"
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
                title={<>Book Pandit for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500 inline-block">Satyanarayan Puja</span></>}
                subtitle="Experience an authentic Satyanarayan Puja with the sacred vrat katha recited by our expert Vedic pandits."
                tagText="Vedic Puja Specialist"
            />
            <AboutSection />
            <Services />
            <WhyChooseUs />
            <AreasServedDetailed />
            <Testimonials />
            <ConsultationProcess />
            <FAQExtended />
            <SatyanarayanSEO />
            <CTASection />
            <MobileCTABar />
        </div>
    );
}
