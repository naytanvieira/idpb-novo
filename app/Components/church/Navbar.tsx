'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Church } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import idpbIco from "../../../public/idpb.svg";

const navItems = [
    { name: 'Início', href: '#home' },
    { name: 'Programações', href: '#programacoes' },
    { name: 'Fotos', href: '#fotos' },
    { name: 'Vídeos', href: '#videos' },
    { name: 'Contato', href: '#contato' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Scroll spy
            const sections = navItems.map(item => item.href.replace('#', ''));
            for (const section of sections.reverse()) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (href: any) => {
        const element = document.getElementById(href.replace('#', ''));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-lg'
                    : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <motion.div
                            className="flex items-center gap-3"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className={`p-2 rounded-xl ${isScrolled ? 'bg-[#1e3a5f]' : 'bg-white/20 backdrop-blur-sm'}`}>
                                <Image className='w-[80px] mt-10' src={idpbIco} alt={""} />
                            </div>
                            <span className={`text-xl font-semibold tracking-tight ${isScrolled ? 'text-[#1e3a5f]' : 'text-white'
                                }`}>
                                Igreja de Deus Pentecostal do Brasil
                            </span>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-1">
                            {navItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.href)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeSection === item.href.replace('#', '')
                                        ? isScrolled
                                            ? 'bg-[#1e3a5f] text-white'
                                            : 'bg-white text-[#1e3a5f]'
                                        : isScrolled
                                            ? 'text-gray-600 hover:text-[#1e3a5f] hover:bg-gray-100'
                                            : 'text-white/90 hover:text-white hover:bg-white/10'
                                        }`}
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`md:hidden p-2 rounded-xl transition-colors ${isScrolled
                                ? 'text-[#1e3a5f] hover:bg-gray-100'
                                : 'text-white hover:bg-white/10'
                                }`}
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 md:hidden"
                    >
                        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                            className="absolute right-0 top-0 bottom-0 w-72 bg-white shadow-2xl"
                        >
                            <div className="p-6 pt-24">
                                <div className="space-y-2">
                                    {navItems.map((item, index) => (
                                        <motion.button
                                            key={item.name}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            onClick={() => scrollToSection(item.href)}
                                            className={`w-full text-left px-4 py-3 rounded-xl text-lg font-medium transition-colors ${activeSection === item.href.replace('#', '')
                                                ? 'bg-[#1e3a5f] text-white'
                                                : 'text-gray-700 hover:bg-gray-100'
                                                }`}
                                        >
                                            {item.name}
                                        </motion.button>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}