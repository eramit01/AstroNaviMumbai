import { Metadata } from "next";
import AstrologerHero from "@/components/AstrologerHero";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import AreasServedDetailed from "@/components/AreasServedDetailed";
import Testimonials from "@/components/Testimonials";
import ConsultationProcess from "@/components/ConsultationProcess";
import FAQExtended from "@/components/FAQExtended";
import HanumanPujaSEO from "@/components/HanumanPujaSEO";
import CTASection from "@/components/CTASection";
import MobileCTABar from "@/components/MobileCTABar";

export const metadata: Metadata = {
    title: "Hanuman Puja Booking | Sundarkand & Hanuman Chalisa Path",
    description: "Book an expert Vedic pandit for Hanuman Puja, Sundarkand Path, and Hanuman Chalisa Path. Overcome fear, obstacles, and negative planetary effects.",
    alternates: {
        canonical: "https://www.astrologer_in_navimumbai.in/hanuman-puja",
    },
    openGraph: {
        title: "Hanuman Puja | Sundarkand Path Booking",
        description: "Dispel fear and overcome life's toughest obstacles. Book an authentic pandit for a powerful Hanuman Puja and Sundarkand Path.",
        url: "https://www.astrologer_in_navimumbai.in/hanuman-puja",
        siteName: "Astrologer in Navi Mumbai",
        locale: "en_IN",
        type: "website",
    },
};

export default function HanumanPujaPage() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Hanuman Puja Pandit in Navi Mumbai",
        "image": "https://www.astrologer_in_navimumbai.in/Logos/Fav.png",
        "@id": "https://www.astrologer_in_navimumbai.in/hanuman-puja",
        "url": "https://www.astrologer_in_navimumbai.in/hanuman-puja",
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
            "reviewCount": "1220"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Why is the Sundarkand Path performed?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The Sundarkand Path is a highly potent recitation that invokes Lord Hanuman's blessings to instantly clear severe obstacles, cure diseases, and ward off negative energies and black magic."
                }
            },
            {
                "@type": "Question",
                "name": "Can a Hanuman Puja reduce the malefic effects of Saturn (Shani)?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, performing a Hanuman Puja or reciting the Hanuman Chalisa is one of the most effective Vedic remedies to pacify Saturn, especially during Shani Sade Sati or Dhaiya."
                }
            },
            {
                "@type": "Question",
                "name": "Do you provide pandits for collective Hanuman Chalisa path?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. We provide expert pandits to lead collective Hanuman Chalisa recitations (such as 108 times) for large gatherings to purify the environment and instill courage."
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
                "name": "Hanuman Puja",
                "item": "https://www.astrologer_in_navimumbai.in/hanuman-puja"
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
                title={<>Book Pandit for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500 inline-block">Hanuman Puja</span></>}
                subtitle="Overcome obstacles and fears. Book a highly trained Vedic pandit for an authentic Sundarkand Path and Hanuman Puja."
                tagText="Strength & Protection Rituals"
            />
            <AboutSection />
            <Services />
            <WhyChooseUs />
            <AreasServedDetailed />
            <Testimonials />
            <ConsultationProcess />
            <FAQExtended />
            <HanumanPujaSEO />
            <CTASection />
            <MobileCTABar />
        </div>
    );
}
