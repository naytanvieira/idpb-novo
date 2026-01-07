'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ChevronDown, Play, Heart } from 'lucide-react';

export default function HeroSection() {
    const scrollToSection = (id: any) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1920&q=80"
                    alt="Igreja"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a5f]/80 via-[#1e3a5f]/60 to-[#1e3a5f]/90" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute -top-40 -right-40 w-96 h-96 bg-[#c9a962] rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.1, 0.15, 0.1]
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute -bottom-40 -left-40 w-96 h-96 bg-white rounded-full blur-3xl"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
                    >
                        <Heart className="w-4 h-4 text-[#c9a962]" />
                        <span className="text-white/90 text-sm font-medium">Seja bem-vindo à nossa família</span>
                    </motion.div>

                    {/* Main Title */}
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        Ide por{' '}
                        <span className="relative">
                            <span className="text-[#c9a962]">todo</span>
                            <motion.span
                                initial={{ width: 0 }}
                                animate={{ width: '100%' }}
                                transition={{ delay: 1, duration: 0.8 }}
                                className="absolute -bottom-2 left-0 h-1 bg-[#c9a962]/50 rounded-full"
                            />
                        </span>
                        {' '}
                        <br className="hidden sm:block" />
                        o mundo{' '}
                        <span className="text-[#c9a962]">e pregai o evangelho</span>
                    </h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                        Uma igreja em movimento, levando o evangelho a todos os lugares.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Button
                            onClick={() => scrollToSection('programacoes')}
                            size="lg"
                            className="bg-[#c9a962] hover:bg-[#b89952] text-[#1e3a5f] font-semibold px-8 py-6 text-lg rounded-full shadow-lg shadow-[#c9a962]/30 transition-all hover:scale-105"
                        >
                            Conheça a Igreja
                        </Button>
                        <Button
                            onClick={() => scrollToSection('contato')}
                            variant="outline"
                            size="lg"
                            className="border-2 border-white/30 text-black hover:text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg rounded-full backdrop-blur-sm transition-all hover:scale-105"
                        >
                            Fale Conosco
                        </Button>
                    </motion.div>

                    {/* Video Preview */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-16"
                    >
                        <button
                            onClick={() => scrollToSection('videos')}
                            className="group inline-flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                        >
                            <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-all group-hover:scale-110">
                                <Play className="w-5 h-5 text-white ml-1" />
                            </div>
                            <span className="font-medium">Assista nossa mensagem</span>
                        </button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.button
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    onClick={() => scrollToSection('programacoes')}
                    className="text-white/50 hover:text-white transition-colors"
                >
                    <ChevronDown className="w-8 h-8" />
                </motion.button>
            </motion.div>
        </section>
    );
}