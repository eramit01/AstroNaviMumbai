import { Metadata } from "next";
import AstrologerHero from "@/components/AstrologerHero";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import AreasServedDetailed from "@/components/AreasServedDetailed";
import Testimonials from "@/components/Testimonials";
import ConsultationProcess from "@/components/ConsultationProcess";
import FAQExtended from "@/components/FAQExtended";
import SaraswatiPujaSEO from "@/components/SaraswatiPujaSEO";
import CTASection from "@/components/CTASection";
import MobileCTABar from "@/components/MobileCTABar";

export const metadata: Metadata = {
    title: "Saraswati Puja Booking | Book Pandit for Vidya Puja",
    description: "Book an expert Vedic pandit for Saraswati Puja, Vidya Puja, and Basant Panchami Puja. Enhance academic focus, intelligence, and artistic creativity.",
    alternates: {
        canonical: "https://www.astrologer_in_navimumbai.in/saraswati-puja",
    },
    openGraph: {
        title: "Saraswati Puja | Vidya Puja & Basant Panchami",
        description: "Unlock knowledge and wisdom. Book an authentic pandit for your child's education initiation or Basant Panchami Vidya Puja.",
        url: "https://www.astrologer_in_navimumbai.in/saraswati-puja",
        siteName: "Astrologer in Navi Mumbai",
        locale: "en_IN",
        type: "website",
    },
};

export default function SaraswatiPujaPage() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Saraswati Puja Pandit in Navi Mumbai",
        "image": "https://www.astrologer_in_navimumbai.in/Logos/Fav.png",
        "@id": "https://www.astrologer_in_navimumbai.in/saraswati-puja",
        "url": "https://www.astrologer_in_navimumbai.in/saraswati-puja",
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
            "reviewCount": "740"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What are the benefits of a Saraswati Puja?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Saraswati Puja enhances memory, concentration, and intelligence. It is highly recommended for students preparing for exams or professionals in creative and academic fields."
                }
            },
            {
                "@type": "Question",
                "name": "What is a Vidya Puja?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A Vidya Puja is a specialized ritual dedicated to Goddess Saraswati where books, instruments, and educational tools are worshipped to seek the Goddess's blessings for academic excellence."
                }
            },
            {
                "@type": "Question",
                "name": "Why is Basant Panchami Puja so important?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Basant Panchami is celebrated as the appearance day of Goddess Saraswati. It is considered the most auspicious day of the entire year to initiate a child into learning (Vidyarambham)."
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
                "name": "Saraswati Puja",
                "item": "https://www.astrologer_in_navimumbai.in/saraswati-puja"
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
                title={<>Book Pandit for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500 inline-block">Saraswati Puja</span></>}
                subtitle="Enhance focus, intelligence, and academic success. Book an expert Vedic pandit for Vidya Puja and Basant Panchami rituals."
                tagText="Education & Wisdom Rituals"
            />
            <AboutSection />
            <Services />
            <WhyChooseUs />
            <AreasServedDetailed />
            <Testimonials />
            <ConsultationProcess />
            <FAQExtended />
            <SaraswatiPujaSEO />
            <CTASection />
            <MobileCTABar />
        </div>
    );
}
