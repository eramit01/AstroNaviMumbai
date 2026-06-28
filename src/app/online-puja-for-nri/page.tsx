import { Metadata } from "next";
import AstrologerHero from "@/components/AstrologerHero";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import AreasServedDetailed from "@/components/AreasServedDetailed";
import Testimonials from "@/components/Testimonials";
import ConsultationProcess from "@/components/ConsultationProcess";
import FAQExtended from "@/components/FAQExtended";
import NRIPujaSEO from "@/components/NRIPujaSEO";
import CTASection from "@/components/CTASection";
import MobileCTABar from "@/components/MobileCTABar";

export const metadata: Metadata = {
    title: "Online Pandit for NRI | Live Video Call Puja Booking India",
    description: "Book an authentic Indian pandit for foreign countries. We provide highly interactive, live online Hindu rituals and virtual video call puja services for the global diaspora.",
    alternates: {
        canonical: "https://www.astrologer_in_navimumbai.in/online-puja-for-nri",
    },
    openGraph: {
        title: "Live Online Puja for NRIs | Book Indian Pandit Online",
        description: "Connect to your roots. Book highly trained Vedic scholars from India for a seamless virtual puja via live video call.",
        url: "https://www.astrologer_in_navimumbai.in/online-puja-for-nri",
        siteName: "Astrologer in Navi Mumbai",
        locale: "en_IN",
        type: "website",
    },
};

export default function NRIPujaPage() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Live Online Puja Services for NRIs",
        "image": "https://www.astrologer_in_navimumbai.in/Logos/Fav.png",
        "@id": "https://www.astrologer_in_navimumbai.in/online-puja-for-nri",
        "url": "https://www.astrologer_in_navimumbai.in/online-puja-for-nri",
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
            "reviewCount": "3200"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How does a video call puja service work?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our expert pandit in India sets up the complete puja altar. You connect via a high-definition video link (Zoom, Google Meet, etc.). The pandit guides you to take the Sankalp (vow) and chants the mantras while making offerings on your behalf."
                }
            },
            {
                "@type": "Question",
                "name": "Is a virtual puja as effective as a physical one?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. In Vedic tradition, the power of a ritual lies in the Sankalp (intention) and the correct recitation (Swara) of mantras. Because you are directly involved in the Sankalp, the spiritual benefits are fully transmitted to you."
                }
            },
            {
                "@type": "Question",
                "name": "Can I book an Indian pandit online for specific rituals?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. We specialize in providing highly trained Indian pandits for NRIs to perform a wide variety of rituals, from Griha Pravesh and Navgraha Shanti to complex Havans and festival pujas."
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
                "name": "Online Puja for NRI",
                "item": "https://www.astrologer_in_navimumbai.in/online-puja-for-nri"
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
                title={<>Live Online <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500 inline-block">Puja for NRIs</span></>}
                subtitle="Stay connected to your roots. Book an authentic Indian pandit for live video call pujas and virtual Hindu rituals globally."
                tagText="Global Virtual Rituals"
            />
            <AboutSection />
            <Services />
            <WhyChooseUs />
            <AreasServedDetailed />
            <Testimonials />
            <ConsultationProcess />
            <FAQExtended />
            <NRIPujaSEO />
            <CTASection area="Online" />
            <MobileCTABar />
        </div>
    );
}
