import { Metadata } from "next";
import AstrologerHero from "@/components/AstrologerHero";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import AreasServedDetailed from "@/components/AreasServedDetailed";
import Testimonials from "@/components/Testimonials";
import ConsultationProcess from "@/components/ConsultationProcess";
import FAQExtended from "@/components/FAQExtended";
import OnlinePanditBookingSEO from "@/components/OnlinePanditBookingSEO";
import CTASection from "@/components/CTASection";
import MobileCTABar from "@/components/MobileCTABar";

export const metadata: Metadata = {
    title: "Online Pandit Booking | Expert Vedic Priest & Puja Services",
    description: "Book certified pandits online for Griha Pravesh, weddings, and Havan. We offer global online puja booking in the USA, UK, Canada, and Australia.",
    alternates: {
        canonical: "https://www.astrologer_in_navimumbai.in/online-pandit-booking",
    },
    openGraph: {
        title: "Global Online Pandit Booking & Puja Services",
        description: "Connect with experienced Vedic scholars. Affordable, same-day pandit booking for home ceremonies, weddings, and online astrology consultation.",
        url: "https://www.astrologer_in_navimumbai.in/online-pandit-booking",
        siteName: "Astrologer in Navi Mumbai",
        locale: "en_IN",
        type: "website",
    },
};

export default function OnlinePanditBookingPage() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Global Online Pandit Booking Services",
        "image": "https://www.astrologer_in_navimumbai.in/Logos/Fav.png",
        "@id": "https://www.astrologer_in_navimumbai.in/online-pandit-booking",
        "url": "https://www.astrologer_in_navimumbai.in/online-pandit-booking",
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
            "reviewCount": "2500"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How does online puja booking for USA, UK, Canada, and Australia work?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For our international clients, our certified Vedic pandits perform the exact rituals from our spiritual centers in India. You connect via a high-quality live video link, allowing you to participate in the sankalp and chanting from the comfort of your home."
                }
            },
            {
                "@type": "Question",
                "name": "Can I book a pandit online for Griha Pravesh or a wedding?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! Our platform makes it easy to find and book highly experienced Hindu wedding priests and pandits for major house-warming ceremonies. We ensure they are perfectly matched to your regional traditions."
                }
            },
            {
                "@type": "Question",
                "name": "Do you offer same day pandit booking?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. While we recommend advance booking for major festivals, we provide same day pandit booking services for urgent spiritual needs and spontaneous home ceremonies."
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
                "name": "Online Pandit Booking",
                "item": "https://www.astrologer_in_navimumbai.in/online-pandit-booking"
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
                title={<>Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500 inline-block">Pandit Booking</span> Services</>}
                subtitle="Connect with certified Vedic scholars worldwide. Affordable, same-day booking for weddings, Griha Pravesh, and online pujas."
                tagText="Global Spiritual Solutions"
            />
            <AboutSection />
            <Services />
            <WhyChooseUs />
            <AreasServedDetailed />
            <Testimonials />
            <ConsultationProcess />
            <FAQExtended />
            <OnlinePanditBookingSEO />
            <CTASection area="Online" />
            <MobileCTABar />
        </div>
    );
}
