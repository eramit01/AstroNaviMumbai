import Link from "next/link";
import { Star, ShieldCheck, Clock, MessageCircle, PhoneCall, CalendarCheck, Users } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function AstrologerHero() {
    return (
        <section className="relative overflow-hidden bg-orange-50 text-gray-900 py-16 lg:py-24">
            {/* Premium Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-orange-200/40 via-white/0 to-transparent pointer-events-none"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-[radial-gradient(circle_at_50%_0%,_var(--tw-gradient-stops))] from-orange-100/50 via-transparent to-transparent opacity-70 pointer-events-none"></div>

            <div className="container relative mx-auto px-4 md:px-6 text-center z-10">
                {/* Tag */}
                <div className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-bold text-orange-800 border border-orange-200 mb-8 shadow-sm backdrop-blur-sm">
                    <ShieldCheck className="h-5 w-5 fill-orange-100 text-orange-600" />
                    <span className="tracking-wide uppercase">Trusted Vedic Astrologer</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-gray-900 drop-shadow-sm leading-tight">
                    Best Astrologer Near You in <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500 inline-block">Mumbai & Navi Mumbai</span>
                </h1>

                {/* Subheading */}
                <p className="max-w-3xl mx-auto text-lg md:text-2xl text-gray-700 mb-10 leading-relaxed font-medium">
                    Get accurate astrology guidance for marriage, career, business, relationships, health, and life decisions.
                </p>

                {/* Trust Badges */}
                <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm md:text-base font-semibold text-gray-800">
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-orange-100">
                        <Star className="h-5 w-5 text-orange-500 fill-orange-500" />
                        <span>30+ Years of Experience</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-orange-100">
                        <Users className="h-5 w-5 text-orange-500" />
                        <span>25,000+ Consultations</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-orange-100">
                        <div className="flex -space-x-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="h-4 w-4 text-orange-500 fill-orange-500" />
                            ))}
                        </div>
                        <span>4.9/5 Review Rating</span>
                    </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href={`tel:${CONTACT_INFO.phone}`}
                        className="group w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-full bg-gradient-to-r from-orange-600 to-orange-500 px-8 text-lg font-bold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-1"
                    >
                        <PhoneCall className="mr-2 h-5 w-5" />
                        Call Now
                    </Link>
                    <Link
                        href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=Hi,%20I%20want%20to%20book%20an%20astrology%20consultation.`}
                        target="_blank"
                        className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-full bg-[#25D366] px-8 text-lg font-bold text-white shadow-lg shadow-[#25D366]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#25D366]/30 hover:-translate-y-1"
                    >
                        <MessageCircle className="mr-2 h-5 w-5" />
                        WhatsApp
                    </Link>
                    <Link
                        href="/book-appointment"
                        className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-full border-2 border-orange-200 bg-white px-8 text-lg font-bold text-gray-800 shadow-md transition-all duration-300 hover:bg-orange-50 hover:border-orange-300 hover:-translate-y-1"
                    >
                        <CalendarCheck className="mr-2 h-5 w-5 text-orange-500" />
                        Book Consultation
                    </Link>
                </div>
            </div>
        </section>
    );
}
