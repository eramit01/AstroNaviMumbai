"use client";

import Link from "next/link";
import { useState } from "react";
import { Moon, MapPin, Phone, Mail, ExternalLink, X } from "lucide-react";
import { NAVIGATION_LINKS, CONTACT_INFO, SERVICES_LIST, NAVI_MUMBAI_AREAS } from "@/lib/constants";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Footer() {
    const [isDevModalOpen, setIsDevModalOpen] = useState(false);

    return (
        <footer className="w-full bg-gray-900 text-white border-t border-orange-600/30 relative">
            <div className="container mx-auto px-4 md:px-6 py-10 md:py-16">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 md:gap-10">
                    {/* Brand - Full width on mobile */}
                    <div className="col-span-2 md:col-span-3 lg:col-span-1 space-y-4 md:space-y-6">
                        <Link href="/" className="flex items-center space-x-2 group">
                            <Moon className="h-6 w-6 md:h-8 md:w-8 text-orange-500 group-hover:text-orange-400 transition-colors" fill="currentColor" />
                            <span className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-orange-50 transition-colors">
                                Navi Mumbai <span className="text-orange-500">Astrologer</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Providing accurate astrological predictions and Vedic solutions in Navi Mumbai for over 15 years.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-span-1">
                        <h3 className="text-base md:text-lg font-bold mb-4 md:mb-6 text-white border-b-2 border-orange-500 inline-block pb-1">Quick Links</h3>
                        <ul className="space-y-2 md:space-y-3 text-sm text-gray-300">
                            {NAVIGATION_LINKS.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="hover:text-orange-400 transition-colors flex items-center gap-2 group">
                                        <span className="h-1.5 w-1.5 rounded-full bg-orange-500 group-hover:w-3 transition-all shrink-0"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="col-span-1">
                        <h3 className="text-base md:text-lg font-bold mb-4 md:mb-6 text-white border-b-2 border-orange-500 inline-block pb-1">Our Services</h3>
                        <ul className="space-y-2 md:space-y-3 text-sm text-gray-300">
                            {SERVICES_LIST.slice(0, 5).map((service) => (
                                <li key={service.title}>
                                    <Link href="/services" className="hover:text-orange-400 transition-colors flex items-center gap-2 group">
                                        <span className="h-1.5 w-1.5 rounded-full bg-orange-500 group-hover:w-3 transition-all shrink-0"></span>
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="col-span-2 md:col-span-3 lg:col-span-1 mt-2 md:mt-0">
                        <h3 className="text-base md:text-lg font-bold mb-4 md:mb-6 text-white border-b-2 border-orange-500 inline-block pb-1">Contact Us</h3>
                        <ul className="space-y-3 md:space-y-4 text-sm text-gray-300 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
                            <li className="flex items-start gap-3 group">
                                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-orange-500/20 transition-colors shrink-0">
                                    <MapPin className="h-4 w-4 md:h-5 md:w-5 text-orange-500" />
                                </div>
                                <span className="mt-1 leading-relaxed text-xs md:text-sm">{CONTACT_INFO.address}</span>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-orange-500/20 transition-colors shrink-0">
                                    <Phone className="h-4 w-4 md:h-5 md:w-5 text-orange-500" />
                                </div>
                                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-orange-400 transition-colors font-medium text-base md:text-lg">{CONTACT_INFO.phone}</a>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-orange-500/20 transition-colors shrink-0">
                                    <Mail className="h-4 w-4 md:h-5 md:w-5 text-orange-500" />
                                </div>
                                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-orange-400 transition-colors break-all text-xs md:text-sm">{CONTACT_INFO.email}</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Locations List (SEO) */}
                <div className="mt-16 pt-10 border-t border-gray-800 hidden md:block">
                    <h4 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">Serving Areas in Navi Mumbai</h4>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-500">
                        {NAVI_MUMBAI_AREAS.map((area, index) => (
                            <span key={area} className="flex items-center gap-2">
                                <Link href={`/astrologer-in-${area.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-orange-400 transition-colors">
                                    Astrologer in {area}
                                </Link>
                                {index < NAVI_MUMBAI_AREAS.length - 1 && <span className="text-gray-700">|</span>}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Developer Footer Section */}
                <div className="mt-16 pt-10 border-t border-gray-800 flex flex-col items-center text-center space-y-6">
                    {/* Copyright */}
                    <p className="text-sm text-gray-500 font-medium tracking-wide">
                        © 2026 Guru Kripa Astrologer And Gemstone. All Rights Reserved.
                    </p>

                    {/* Developer Credit */}
                    <div className="text-sm md:text-base text-gray-300 flex flex-wrap justify-center items-center gap-1.5">
                        Website Designed & Developed by 👉 
                        <button 
                            onClick={() => setIsDevModalOpen(true)}
                            className="group relative inline-flex items-center text-orange-500 hover:text-orange-400 font-bold transition-all animate-pulse hover:animate-none hover:underline decoration-orange-400 hover:brightness-110"
                        >
                            Amit Pandey
                            <ExternalLink className="h-3.5 w-3.5 ml-1" />
                            
                            {/* Tooltip */}
                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-700 text-white text-xs px-3 py-1.5 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                                Click to Contact the Developer
                                {/* Triangle pointer */}
                                <svg className="absolute text-gray-700 h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve">
                                    <polygon className="fill-current" points="0,0 127.5,127.5 255,0"/>
                                </svg>
                            </span>
                        </button>
                    </div>

                    {/* Tagline */}
                    <button 
                        onClick={() => setIsDevModalOpen(true)}
                        className="text-[10px] md:text-xs text-orange-500 hover:text-orange-400 transition-colors uppercase tracking-wider md:tracking-widest font-semibold w-full max-w-xs md:max-w-sm cursor-pointer leading-relaxed whitespace-normal break-words px-2"
                    >
                        Helping Businesses Generate More Leads Online
                    </button>

                </div>
            </div>

            {/* Premium Contact Modal */}
            {isDevModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <div 
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                        onClick={() => setIsDevModalOpen(false)}
                    ></div>
                    
                    {/* Modal Card */}
                    <div className="relative w-full max-w-md bg-gray-900 border border-gray-700/50 rounded-[14px] shadow-2xl overflow-hidden transform transition-all scale-100 animate-in fade-in zoom-in-95 duration-300">
                        {/* Header */}
                        <div className="p-6 border-b border-gray-800 text-center relative">
                            <button 
                                onClick={() => setIsDevModalOpen(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors bg-gray-800 hover:bg-gray-700 rounded-full p-1"
                            >
                                <X className="h-5 w-5" />
                            </button>
                            <h3 className="text-2xl font-bold text-white mb-2">Contact Amit Pandey</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Like this website? Let&apos;s build one for your business. Choose your preferred contact method.
                            </p>
                        </div>

                        {/* Body Buttons */}
                        <div className="p-6 space-y-4">
                            <a 
                                href="https://wa.me/919696717305?text=Hi%20Amit%2C%0A%0AI%20visited%20Guru%20Kripa%20Astrologer%20And%20Gemstone%27s%20website%20and%20really%20liked%20the%20design.%0A%0AI%20want%20a%20similar%20website%20for%20my%20business.%0A%0APlease%20share%20your%20pricing%20and%20process."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/40 transition-all hover:scale-[1.02]"
                            >
                                <WhatsAppIcon className="h-6 w-6" />
                                WhatsApp
                            </a>

                            <a 
                                href="mailto:ptamit7826@gmail.com?subject=Website%20Development%20Inquiry&body=Hi%20Amit%2C%0A%0AI%20visited%20Guru%20Kripa%20Astrologer%20And%20Gemstone%27s%20website%20and%20would%20like%20to%20discuss%20building%20a%20similar%20website%20for%20my%20business.%0A%0APlease%20share%20your%20pricing%20and%20process."
                                className="w-full flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg transition-all hover:scale-[1.02]"
                            >
                                <Mail className="h-6 w-6 text-orange-400" />
                                Email
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </footer>
    );
}
