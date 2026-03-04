import Services from "@/components/Services";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Astrology Services in Navi Mumbai | Kundali, Vastu & Palmistry",
    description: "Explore comprehensive Vedic Astrology solutions offered by the best astrologer in Navi Mumbai, including Palmistry, Gemstone Consultation, and more.",
};

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-orange-50 via-white to-orange-100 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-300 via-orange-500 to-orange-300"></div>
                <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-orange-950 tracking-tight leading-tight">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">Services</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto font-medium">
                        Comprehensive Vedic Astrology solutions for all aspects of your life.
                    </p>
                </div>
            </section>

            <Services />

            {/* CTA Section */}
            <section className="py-16 bg-orange-50 border-t border-orange-100 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6 text-orange-900">Need Personalized Consultation?</h2>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-full font-bold hover:bg-orange-600 hover:-translate-y-1 shadow-md hover:shadow-lg transition-all duration-300"
                    >
                        Contact Now <MoveRight className="h-5 w-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
