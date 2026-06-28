import { Metadata } from "next";
import AstrologerHero from "@/components/AstrologerHero";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import AreasServedDetailed from "@/components/AreasServedDetailed";
import Testimonials from "@/components/Testimonials";
import ConsultationProcess from "@/components/ConsultationProcess";
import FAQExtended from "@/components/FAQExtended";
import MarriagePujaSEO from "@/components/MarriagePujaSEO";
import CTASection from "@/components/CTASection";
import MobileCTABar from "@/components/MobileCTABar";

export const metadata: Metadata = {
    title: "Wedding Pandit Booking | Expert Hindu Marriage Priest",
    description: "Book an expert Vedic wedding pandit for Vivah Puja. We provide highly trained Hindu wedding priests and calculate the perfect Vivah Muhurat for your special day.",
    alternates: {
        canonical: "https://www.astrologer_in_navimumbai.in/marriage-puja",
    },
    openGraph: {
        title: "Marriage Puja | Authentic Wedding Pandit Booking",
        description: "Sanctify your union with traditional Vedic rituals. Book an experienced Hindu wedding priest and get your perfect Vivah Muhurat calculated.",
        url: "https://www.astrologer_in_navimumbai.in/marriage-puja",
        siteName: "Astrologer in Navi Mumbai",
        locale: "en_IN",
        type: "website",
    },
};

export default function MarriagePujaPage() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Wedding Pandit in Navi Mumbai",
        "image": "https://www.astrologer_in_navimumbai.in/Logos/Fav.png",
        "@id": "https://www.astrologer_in_navimumbai.in/marriage-puja",
        "url": "https://www.astrologer_in_navimumbai.in/marriage-puja",
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
            "reviewCount": "1650"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Why is it important to book an expert wedding pandit?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A Hindu wedding involves complex Vedic rituals like the Saptapadi. An expert pandit ensures flawless Sanskrit pronunciation and helps the couple understand the profound spiritual vows they are taking."
                }
            },
            {
                "@type": "Question",
                "name": "How is the Vivah Muhurat calculated?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our expert astrologers calculate the Vivah Muhurat by deeply analyzing the birth charts (Kundlis) of both the bride and groom to find the most astrologically auspicious time that neutralizes malefic planetary influences."
                }
            },
            {
                "@type": "Question",
                "name": "Do your Hindu wedding priests perform all regional rituals?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we provide specialized Vedic pandits who are well-versed in the specific cultural and regional traditions required for your Vivah Puja."
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
                "name": "Marriage Puja",
                "item": "https://www.astrologer_in_navimumbai.in/marriage-puja"
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
                title={<>Book Pandit for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500 inline-block">Vivah Puja</span></>}
                subtitle="Sanctify your union. Book a highly experienced Hindu wedding priest and get the perfect Vivah Muhurat calculated."
                tagText="Sacred Wedding Rituals"
            />
            <AboutSection />
            <Services />
            <WhyChooseUs />
            <AreasServedDetailed />
            <Testimonials />
            <ConsultationProcess />
            <FAQExtended />
            <MarriagePujaSEO />
            <CTASection />
            <MobileCTABar />
        </div>
    );
}
