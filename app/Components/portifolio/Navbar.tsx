'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from "next/image";
import tubaraoIco from "../../../public/tubarao.svg";

export default function Navbar({ darkMode, setDarkMode }: any) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'Home', href: '#home' },
        { label: 'Sobre', href: '#sobre' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projetos', href: '#projetos' },
        { label: 'Serviços', href: '#servicos' },
        { label: 'Experiência', href: '#experiencia' },
        { label: 'Contato', href: '#contato' },
    ];

    const scrollToSection = (href: any) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMobileMenuOpen(false);
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? darkMode
                        ? 'bg-slate-900/95 backdrop-blur-xl border-b border-slate-800'
                        : 'bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm'
                    : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        <motion.a
                            href="#home"
                            onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
                            className="flex items-center gap-2 group"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className={`rounded-xl mr-[-30px]`}>
                                <Image className='w-[130px] mt-5' src={tubaraoIco} alt={""} />
                                {/* <Code2 className="w-5 h-5 text-white" /> */}
                            </div>
                            <span className={`font-bold text-xl ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                Tubarão<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">Tech Brasil</span>
                            </span>
                        </motion.a>

                        <div className="hidden lg:flex items-center gap-1">
                            {navItems.map((item) => (
                                <motion.a
                                    key={item.href}
                                    href={item.href}
                                    onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${darkMode
                                        ? 'text-slate-300 hover:text-white hover:bg-slate-800'
                                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                                        }`}
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {item.label}
                                </motion.a>
                            ))}
                        </div>

                        <div className="flex items-center gap-2">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setDarkMode(!darkMode)}
                                className={`rounded-xl ${darkMode ? 'text-yellow-400 hover:bg-slate-800' : 'text-slate-600 hover:bg-slate-100'}`}
                            >
                                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                            </Button>

                            <Button
                                variant="ghost"
                                size="icon"
                                className={`lg:hidden rounded-xl ${darkMode ? 'text-white hover:bg-slate-800' : 'text-slate-900 hover:bg-slate-100'}`}
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            >
                                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </Button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className={`fixed inset-x-0 top-16 z-40 lg:hidden ${darkMode ? 'bg-slate-900/98 backdrop-blur-xl' : 'bg-white/98 backdrop-blur-xl'
                            } border-b ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}
                    >
                        <div className="px-4 py-6 space-y-1">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item.href}
                                    href={item.href}
                                    onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${darkMode
                                        ? 'text-slate-300 hover:text-white hover:bg-slate-800'
                                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                                        }`}
                                >
                                    {item.label}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}