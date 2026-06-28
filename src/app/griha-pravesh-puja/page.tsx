import { Metadata } from "next";
import AstrologerHero from "@/components/AstrologerHero";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import AreasServedDetailed from "@/components/AreasServedDetailed";
import Testimonials from "@/components/Testimonials";
import ConsultationProcess from "@/components/ConsultationProcess";
import FAQExtended from "@/components/FAQExtended";
import GrihaPraveshSEO from "@/components/GrihaPraveshSEO";
import CTASection from "@/components/CTASection";
import MobileCTABar from "@/components/MobileCTABar";

export const metadata: Metadata = {
    title: "Griha Pravesh Puja | Book Pandit for House Warming Pooja",
    description: "Book an expert Vedic pandit for your griha pravesh puja. We offer complete house warming puja services, vastu puja, and exact griha pravesh muhurat.",
    alternates: {
        canonical: "https://www.astrologer_in_navimumbai.in/griha-pravesh-puja",
    },
    openGraph: {
        title: "Griha Pravesh Puja | House Warming & Vastu Puja",
        description: "Moving to a new house? Book a knowledgeable griha pravesh pandit for an authentic house blessing puja, havan, and complete pooja vidhi.",
        url: "https://www.astrologer_in_navimumbai.in/griha-pravesh-puja",
        siteName: "Astrologer in Navi Mumbai",
        locale: "en_IN",
        type: "website",
    },
};

export default function GrihaPraveshPage() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Griha Pravesh Pandit Service Navi Mumbai",
        "image": "https://www.astrologer_in_navimumbai.in/Logos/Fav.png",
        "@id": "https://www.astrologer_in_navimumbai.in/griha-pravesh-puja",
        "url": "https://www.astrologer_in_navimumbai.in/griha-pravesh-puja",
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
            "reviewCount": "830"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Why is a Griha Pravesh Puja necessary?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A Griha Pravesh or house warming puja purifies the new space, removes any negative Vastu doshas, and invites divine blessings for the health, wealth, and peace of the family."
                }
            },
            {
                "@type": "Question",
                "name": "Do you provide the complete Griha Pravesh pooja vidhi?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our expert pandits follow the strict Vedic pooja vidhi, which includes Kalash Sthapana, Vastu Puja, Navagraha Shanti, and the Griha Pravesh Havan."
                }
            },
            {
                "@type": "Question",
                "name": "Can you help find an auspicious Griha Pravesh Muhurat?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. Before booking the puja, our astrologers consult the Panchang and your birth chart to find the most auspicious Griha Pravesh Muhurat for your new home."
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
                "name": "Griha Pravesh Puja",
                "item": "https://www.astrologer_in_navimumbai.in/griha-pravesh-puja"
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
                title={<>Book Pandit for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500 inline-block">Griha Pravesh Puja</span></>}
                subtitle="Ensure prosperity in your new home with an authentic house warming puja, vastu havan, and the perfect auspicious muhurat."
                tagText="Vedic Pooja Services"
            />
            <AboutSection />
            <Services />
            <WhyChooseUs />
            <AreasServedDetailed />
            <Testimonials />
            <ConsultationProcess />
            <FAQExtended />
            <GrihaPraveshSEO />
            <CTASection />
            <MobileCTABar />
        </div>
    );
}
