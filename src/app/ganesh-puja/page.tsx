import { Metadata } from "next";
import AstrologerHero from "@/components/AstrologerHero";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import AreasServedDetailed from "@/components/AreasServedDetailed";
import Testimonials from "@/components/Testimonials";
import ConsultationProcess from "@/components/ConsultationProcess";
import FAQExtended from "@/components/FAQExtended";
import GaneshPujaSEO from "@/components/GaneshPujaSEO";
import CTASection from "@/components/CTASection";
import MobileCTABar from "@/components/MobileCTABar";

export const metadata: Metadata = {
    title: "Ganesh Puja Booking | Expert Ganapati Pandit",
    description: "Book an expert Vedic pandit for Ganesh Puja, Ganapati Sthapana, and Ganesh Havan. Remove obstacles and bring prosperity to your new ventures.",
    alternates: {
        canonical: "https://www.astrologer_in_navimumbai.in/ganesh-puja",
    },
    openGraph: {
        title: "Ganesh Puja | Authentic Vedic Pandit Booking",
        description: "Start your new journey with Lord Ganesha's blessings. Book an experienced pandit for Ganesh Sthapana puja and complete pooja vidhi.",
        url: "https://www.astrologer_in_navimumbai.in/ganesh-puja",
        siteName: "Astrologer in Navi Mumbai",
        locale: "en_IN",
        type: "website",
    },
};

export default function GaneshPujaPage() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Ganesh Puja Pandit in Navi Mumbai",
        "image": "https://www.astrologer_in_navimumbai.in/Logos/Fav.png",
        "@id": "https://www.astrologer_in_navimumbai.in/ganesh-puja",
        "url": "https://www.astrologer_in_navimumbai.in/ganesh-puja",
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
            "reviewCount": "1150"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Why is Ganesh Puja performed first?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Lord Ganesha is revered as Vighnaharta, the remover of obstacles. Performing his puja before any other ritual or new venture ensures success and a hurdle-free path."
                }
            },
            {
                "@type": "Question",
                "name": "Do you provide a pandit for Ganesh Sthapana during festivals?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we provide expert Vedic pandits for precise Ganesh Sthapana puja, especially during Ganesh Chaturthi, ensuring the idol is installed with the correct mantras."
                }
            },
            {
                "@type": "Question",
                "name": "How can I make a Ganesh puja booking?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can easily make a Ganesh puja booking through our online platform or by calling us directly. We arrange the pandit, muhurat, and provide the samagri list."
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
                "name": "Ganesh Puja",
                "item": "https://www.astrologer_in_navimumbai.in/ganesh-puja"
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
                title={<>Book Pandit for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500 inline-block">Ganesh Puja</span></>}
                subtitle="Remove obstacles from your path. Book an expert Vedic pandit for authentic Ganesh Sthapana and Ganapati Havan."
                tagText="Vedic Puja Specialist"
            />
            <AboutSection />
            <Services />
            <WhyChooseUs />
            <AreasServedDetailed />
            <Testimonials />
            <ConsultationProcess />
            <FAQExtended />
            <GaneshPujaSEO />
            <CTASection />
            <MobileCTABar />
        </div>
    );
}
