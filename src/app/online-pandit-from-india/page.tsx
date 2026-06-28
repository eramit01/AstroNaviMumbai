import { Metadata } from "next";
import AstrologerHero from "@/components/AstrologerHero";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import AreasServedDetailed from "@/components/AreasServedDetailed";
import Testimonials from "@/components/Testimonials";
import ConsultationProcess from "@/components/ConsultationProcess";
import FAQExtended from "@/components/FAQExtended";
import VirtualNRIPujaSEO from "@/components/VirtualNRIPujaSEO";
import CTASection from "@/components/CTASection";
import MobileCTABar from "@/components/MobileCTABar";

export const metadata: Metadata = {
    title: "Book Pandit Online From India | Virtual Hindu Puja for NRIs",
    description: "Book an authentic Vedic pandit from India online for USA, Canada, and global clients. Live video call pujas for Griha Pravesh, Satyanarayan, and Rudrabhishek.",
    alternates: {
        canonical: "https://www.astrologer_in_navimumbai.in/online-pandit-from-india",
    },
    openGraph: {
        title: "Virtual Hindu Rituals for NRI Families | Book Pandit Online",
        description: "Experience flawless live video call pujas with certified Indian priests. Perfect for house warming in Canada or USA.",
        url: "https://www.astrologer_in_navimumbai.in/online-pandit-from-india",
        siteName: "Astrologer in Navi Mumbai",
        locale: "en_IN",
        type: "website",
    },
};

export default function OnlinePanditFromIndiaPage() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Virtual NRI Puja Services from India",
        "image": "https://www.astrologer_in_navimumbai.in/Logos/Fav.png",
        "@id": "https://www.astrologer_in_navimumbai.in/online-pandit-from-india",
        "url": "https://www.astrologer_in_navimumbai.in/online-pandit-from-india",
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
            "ratingValue": "5.0",
            "reviewCount": "2980"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How do I book a pandit online from India for the USA?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can easily book through our platform. We match you with an expert Vedic pandit in India who will conduct the ritual via a live video call, perfectly synced to your local USA timezone."
                }
            },
            {
                "@type": "Question",
                "name": "Is a virtual Satyanarayan Puja with an Indian priest effective?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, absolutely. The power of the ritual lies in the Sankalp (your intention and vow) and the flawless chanting of the mantras by our scholars, making a virtual puja highly effective."
                }
            },
            {
                "@type": "Question",
                "name": "Do you offer same-day online puja booking for NRIs?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. While we recommend advance booking, we maintain a dedicated roster of priests to accommodate urgent, same-day online puja bookings for our international clients."
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
                "name": "Online Pandit From India",
                "item": "https://www.astrologer_in_navimumbai.in/online-pandit-from-india"
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
                title={<>Book Pandit <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500 inline-block">From India</span> Online</>}
                subtitle="Flawless virtual Hindu rituals for NRI families. Book an Indian priest for live video call pujas, Griha Pravesh, and Rudrabhishek globally."
                tagText="Global Virtual Hindu Priest"
            />
            <AboutSection />
            <Services />
            <WhyChooseUs />
            <AreasServedDetailed />
            <Testimonials />
            <ConsultationProcess />
            <FAQExtended />
            <VirtualNRIPujaSEO />
            <CTASection area="Online" />
            <MobileCTABar />
        </div>
    );
}
