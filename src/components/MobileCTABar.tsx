"use client";

import { Phone, Calendar } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CONTACT_INFO } from "@/lib/constants";
import { getWhatsAppMessage } from "@/lib/utils";
import WhatsAppIcon from "./WhatsAppIcon";

export default function MobileCTABar() {
    const pathname = usePathname();
    const waLink = getWhatsAppMessage(pathname, CONTACT_INFO.whatsapp);

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center border-t border-gray-200 bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.05)] md:hidden">
            <Link
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex flex-1 flex-col items-center justify-center py-3 text-orange-600 font-semibold active:bg-orange-50 transition-colors border-r border-gray-200"
            >
                <Phone className="h-5 w-5 mb-1" />
                <span className="text-[10px] uppercase tracking-wider">Call</span>
            </Link>
            <Link
                href={waLink}
                target="_blank"
                className="flex flex-1 flex-col items-center justify-center py-3 text-[#25D366] font-semibold active:bg-green-50 transition-colors border-r border-gray-200"
                aria-label="WhatsApp"
            >
                <WhatsAppIcon className="h-5 w-5 mb-1" />
                <span className="text-[10px] uppercase tracking-wider">WhatsApp</span>
            </Link>
            <Link
                href="/book-appointment"
                className="flex flex-1 flex-col items-center justify-center gap-1 bg-gradient-to-r from-orange-600 to-orange-500 text-white hover:from-orange-700 hover:to-orange-600 transition-all font-bold"
            >
                <Calendar className="h-5 w-5" />
                <span className="text-[10px] uppercase tracking-wide">Book Now</span>
            </Link>
        </div>
    );
}
