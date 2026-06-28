import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function getWhatsAppMessage(pathname: string | null, whatsappNumber: string) {
    let keyword = "Home";
    if (pathname && pathname !== "/") {
        keyword = decodeURIComponent(pathname)
            .replace(/^\/+/, '')
            .replace(/[-/]/g, ' ')
            .trim()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }
    const message = `Hello Panditji, I visited your page: ${keyword}\nI want to book an appointment.\n\nनमस्ते पंडितजी, मैंने आपका पेज देखा: ${keyword}\nमुझे अपॉइंटमेंट बुक करना है।`;
    return `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
}
