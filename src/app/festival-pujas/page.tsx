import { Metadata } from "next";
import AstrologerHero from "@/components/AstrologerHero";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import AreasServedDetailed from "@/components/AreasServedDetailed";
import Testimonials from "@/components/Testimonials";
import ConsultationProcess from "@/components/ConsultationProcess";
import FAQExtended from "@/components/FAQExtended";
import FestivalPujasSEO from "@/components/FestivalPujasSEO";
import CTASection from "@/components/CTASection";
import MobileCTABar from "@/components/MobileCTABar";

export const metadata: Metadata = {
    title: "Festival Puja Booking | Expert Pandits for Diwali, Navratri & More",
    description: "Book an expert Vedic pandit for major Indian festivals including Diwali, Navratri, Ganesh Chaturthi, Mahashivratri, and Makar Sankranti pujas.",
    alternates: {
        canonical: "https://www.astrologer_in_navimumbai.in/festival-pujas",
    },
    openGraph: {
        title: "Festival Pujas | Advance Pandit Booking Services",
        description: "Celebrate auspicious days with authentic Vedic rituals. Book highly trained pandits for Diwali, Navratri, Akshaya Tritiya, and Holi pujas.",
        url: "https://www.astrologer_in_navimumbai.in/festival-pujas",
        siteName: "Astrologer in Navi Mumbai",
        locale: "en_IN",
        type: "website",
    },
};

export default function FestivalPujasPage() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Festival Puja Pandit in Navi Mumbai",
        "image": "https://www.astrologer_in_navimumbai.in/Logos/Fav.png",
        "@id": "https://www.astrologer_in_navimumbai.in/festival-pujas",
        "url": "https://www.astrologer_in_navimumbai.in/festival-pujas",
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
            "reviewCount": "2100"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Why is it important to book a pandit for Diwali or Navratri Puja in advance?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Festivals like Diwali and Navratri occur during specific, highly auspicious astrological windows. Because these times are incredibly popular for seeking wealth and protection, our expert pandits get booked very quickly. Advance booking guarantees you secure the correct muhurat."
                }
            },
            {
                "@type": "Question",
                "name": "Do you perform specialized festival rituals like Mahashivratri or Janmashtami?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we provide specialized Vedic pandits who are trained to perform complex overnight and midnight rituals required for Mahashivratri and Janmashtami pujas."
                }
            },
            {
                "@type": "Question",
                "name": "What is the significance of an Akshaya Tritiya Puja?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Akshaya Tritiya is one of the most auspicious days in the Hindu calendar for making investments or starting new ventures. A puja on this day ensures 'Akshaya' (non-diminishing) wealth and prosperity."
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
                "name": "Festival Pujas",
                "item": "https://www.astrologer_in_navimumbai.in/festival-pujas"
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
                title={<>Book Pandit for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500 inline-block">Festival Pujas</span></>}
                subtitle="Celebrate auspicious holy days. Book an expert Vedic pandit for Diwali, Navratri, Ganesh Chaturthi, and Makar Sankranti."
                tagText="Auspicious Festival Rituals"
            />
            <AboutSection />
            <Services />
            <WhyChooseUs />
            <AreasServedDetailed />
            <Testimonials />
            <ConsultationProcess />
            <FAQExtended />
            <FestivalPujasSEO />
            <CTASection />
            <MobileCTABar />
        </div>
    );
}
