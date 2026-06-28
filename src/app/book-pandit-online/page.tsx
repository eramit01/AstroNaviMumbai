import { Metadata } from "next";
import AstrologerHero from "@/components/AstrologerHero";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import AreasServedDetailed from "@/components/AreasServedDetailed";
import Testimonials from "@/components/Testimonials";
import ConsultationProcess from "@/components/ConsultationProcess";
import FAQExtended from "@/components/FAQExtended";
import PanditBookingSEO from "@/components/PanditBookingSEO";
import CTASection from "@/components/CTASection";
import MobileCTABar from "@/components/MobileCTABar";

export const metadata: Metadata = {
    title: "Book Pandit Online | Experienced Hindu Priest Near Me",
    description: "Looking for an experienced pandit for puja? Use our online puja booking service to book a Vedic Brahmin pandit for marriage, griha pravesh, havan, and satyanarayan puja.",
    alternates: {
        canonical: "https://www.astrologer_in_navimumbai.in/book-pandit-online",
    },
    openGraph: {
        title: "Pandit Booking Online | Best Pandit Near Me",
        description: "Need a home puja pandit? We offer same day pandit booking, online Hindu priests, and expert Vedic pandits for all rituals and ceremonies.",
        url: "https://www.astrologer_in_navimumbai.in/book-pandit-online",
        siteName: "Astrologer in Navi Mumbai",
        locale: "en_IN",
        type: "website",
    },
};

export default function BookPanditOnlinePage() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Online Pandit Booking Service Navi Mumbai",
        "image": "https://www.astrologer_in_navimumbai.in/Logos/Fav.png",
        "@id": "https://www.astrologer_in_navimumbai.in/book-pandit-online",
        "url": "https://www.astrologer_in_navimumbai.in/book-pandit-online",
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
            "reviewCount": "1420"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How can I book an experienced pandit for puja online?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can easily book a verified Vedic Brahmin pandit online through our portal or by calling our pandit ji contact number. We offer both home puja and online hindu priest services."
                }
            },
            {
                "@type": "Question",
                "name": "Do you provide pandits for marriage and griha pravesh?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we provide highly knowledgeable pandits specifically trained for elaborate ceremonies like marriages, griha pravesh, satyanarayan puja, and havans."
                }
            },
            {
                "@type": "Question",
                "name": "Is same day pandit booking available?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we offer same day pandit booking for urgent requirements, ensuring you have the best pandit near you when you need one most."
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
                "name": "Book Pandit Online",
                "item": "https://www.astrologer_in_navimumbai.in/book-pandit-online"
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
                title={<>Book <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500 inline-block">Pandit Online</span> For Puja</>}
                subtitle="Connect with the best experienced Vedic Brahmin pandits near you for home pujas, marriages, griha pravesh, and havans."
                tagText="Trusted Puja Booking Service"
            />
            <AboutSection />
            <Services />
            <WhyChooseUs />
            <AreasServedDetailed />
            <Testimonials />
            <ConsultationProcess />
            <FAQExtended />
            <PanditBookingSEO />
            <CTASection />
            <MobileCTABar />
        </div>
    );
}
