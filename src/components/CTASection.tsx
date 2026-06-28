"use client";

import { Phone, Calendar } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CONTACT_INFO } from "@/lib/constants";
import { getWhatsAppMessage } from "@/lib/utils";

interface CTASectionProps {
    area?: string;
}

export default function CTASection({ area = "Navi Mumbai" }: CTASectionProps) {
    const pathname = usePathname();
    const waLink = getWhatsAppMessage(pathname, CONTACT_INFO.whatsapp);

    return (
        <section className="py-16 md:py-20 bg-orange-50 text-gray-900 border-t border-orange-100">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <div className="max-w-4xl mx-auto mb-10">
                    <h2 className="text-xl font-bold text-orange-600 uppercase tracking-widest mb-3">
                        Astrology Consultation
                    </h2>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                        Are you looking for best <span className="text-orange-600">astrologer in {area}</span>?
                    </h3>
                    <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto">
                        Consult top <span className="text-orange-600">astrologer in {area}</span> to resolve your issues and get rid from all problems to make your life simple & happy!
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href={`tel:${CONTACT_INFO.phone}`}
                        className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-full bg-orange-600 text-white px-8 text-lg font-bold shadow-lg shadow-orange-600/20 transition-transform hover:scale-105 hover:bg-orange-700"
                    >
                        <Phone className="mr-2 h-5 w-5 fill-current" />
                        Call Now: {CONTACT_INFO.phone}
                    </Link>
                    <Link
                        href={waLink}
                        target="_blank"
                        className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-full border-2 border-gray-200 bg-white px-8 text-lg font-semibold text-gray-700 transition-colors hover:border-orange-500 hover:text-orange-600"
                    >
                        <Calendar className="mr-2 h-5 w-5" />
                        Book Appointment
                    </Link>
                </div>
            </div>
        </section>
    );
}
