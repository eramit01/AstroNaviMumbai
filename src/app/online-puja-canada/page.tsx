import { Metadata } from "next";
import AstrologerHero from "@/components/AstrologerHero";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import AreasServedDetailed from "@/components/AreasServedDetailed";
import Testimonials from "@/components/Testimonials";
import ConsultationProcess from "@/components/ConsultationProcess";
import FAQExtended from "@/components/FAQExtended";
import CanadaPujaSEO from "@/components/CanadaPujaSEO";
import CTASection from "@/components/CTASection";
import MobileCTABar from "@/components/MobileCTABar";

export const metadata: Metadata = {
    title: "Online Pandit for Canada | Griha Pravesh & Virtual Puja Services",
    description: "Book an authentic Indian priest online for Canada. We specialize in live video call pujas, including Griha Pravesh Puja online for NRIs across Canada.",
    alternates: {
        canonical: "https://www.astrologer_in_navimumbai.in/online-puja-canada",
    },
    openGraph: {
        title: "Online Puja Canada | Authentic Hindu Priest Services",
        description: "Connect with certified Vedic scholars directly from India. Book live online pujas and Griha Pravesh ceremonies for your home in Canada.",
        url: "https://www.astrologer_in_navimumbai.in/online-puja-canada",
        siteName: "Astrologer in Navi Mumbai",
        locale: "en_IN",
        type: "website",
    },
};

export default function CanadaPujaPage() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Online Pandit Services for Canada",
        "image": "https://www.astrologer_in_navimumbai.in/Logos/Fav.png",
        "@id": "https://www.astrologer_in_navimumbai.in/online-puja-canada",
        "url": "https://www.astrologer_in_navimumbai.in/online-puja-canada",
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
            "reviewCount": "1780"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Do you provide an Indian priest online for clients in Canada?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our platform directly connects the Indian diaspora in Canada with highly authentic, certified Vedic pandits based in India for all types of ritual services."
                }
            },
            {
                "@type": "Question",
                "name": "How is a Griha Pravesh Puja online Canada conducted?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We conduct the Griha Pravesh via a seamless high-definition video call. The pandit instructs you on the setup, helps you take the Sankalp for your new Canadian home, and performs the detailed Vastu and Navgraha Shanti rituals on your behalf."
                }
            },
            {
                "@type": "Question",
                "name": "Is the time difference an issue for booking a puja?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Not at all. We are highly accustomed to accommodating the time zone differences between India and Canada, ensuring that your rituals are performed at the correct astrological muhurat based on your local time."
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
                "name": "Online Puja Canada",
                "item": "https://www.astrologer_in_navimumbai.in/online-puja-canada"
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
                title={<>Online Pandit <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500 inline-block">Services for Canada</span></>}
                subtitle="Experience authentic Vedic rituals at home. Book a highly trained Indian priest online for Griha Pravesh and virtual pujas across Canada."
                tagText="Canada Virtual Hindu Priest"
            />
            <AboutSection />
            <Services />
            <WhyChooseUs />
            <AreasServedDetailed />
            <Testimonials />
            <ConsultationProcess />
            <FAQExtended />
            <CanadaPujaSEO />
            <CTASection area="Canada" />
            <MobileCTABar />
        </div>
    );
}
