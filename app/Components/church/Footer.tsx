'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Church, Heart, ChevronUp } from 'lucide-react';
import Image from "next/image";
import idpbIco from "../../../public/idpb.svg";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-[#1e3a5f] text-white relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#c9a962]/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Main Footer */}
                <div className="py-16 grid md:grid-cols-4 gap-10">
                    {/* Logo & Description */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2.5 rounded-xl bg-[#c9a962]">
                                <Image className='w-[80px] mt-0' src={idpbIco} alt={""} />
                            </div>
                            <span className="text-2xl font-bold">Igreja de Deus Pentecostal do Brasil</span>
                        </div>
                        <p className="text-white/70 leading-relaxed max-w-md mb-6">
                            Uma igreja em movimento, levando o evangelho a todos os lugares.
                        </p>
                        <div className="flex items-center gap-2 text-white/50 text-sm">
                            <span>Feito com</span>
                            <Heart className="w-4 h-4 text-red-400 fill-current" />
                            <span>para a glória de Deus</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4 text-[#c9a962]">Links Rápidos</h4>
                        <ul className="space-y-3">
                            {['Início', 'Programações', 'Fotos', 'Vídeos', 'Contato'].map((item) => (
                                <li key={item}>
                                    <button
                                        onClick={() => {
                                            const element = document.getElementById(item.toLowerCase().replace('í', 'i').replace('ções', 'cacoes').replace('ídeos', 'ideos'));
                                            if (element) element.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        className="text-white/70 hover:text-[#c9a962] transition-colors"
                                    >
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4 text-[#c9a962]">Contato</h4>
                        <ul className="space-y-3 text-white/70">
                            <li>Rua Aquiles de Lisboa, 243 - Brant</li>
                            <li>Lagoa Santa - MG</li>
                            <li>(11) 99999-9999</li>
                            <li>contato@idpbbrant.com.br</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-white/50 text-sm text-center sm:text-left">
                        © {new Date().getFullYear()} Igreja de Deus Pentecostal do Brasil. Todos os direitos reservados.
                    </p>

                    {/* Back to Top */}
                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 rounded-full bg-[#c9a962] flex items-center justify-center text-[#1e3a5f] hover:bg-[#d4b46d] transition-colors"
                    >
                        <ChevronUp className="w-5 h-5" />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
}