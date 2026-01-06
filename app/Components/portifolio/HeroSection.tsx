import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection({ darkMode }: any) {
    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className={`absolute inset-0 ${darkMode ? 'bg-slate-950' : 'bg-slate-50'}`} />

                {/* Gradient Orbs */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/30 to-cyan-500/30 blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-violet-500/30 to-purple-500/30 blur-3xl"
                />

                {/* Grid Pattern */}
                <div
                    className={`absolute inset-0 ${darkMode ? 'opacity-20' : 'opacity-30'}`}
                    style={{
                        backgroundImage: `linear-gradient(${darkMode ? 'rgba(148,163,184,0.1)' : 'rgba(148,163,184,0.2)'} 1px, transparent 1px),
                            linear-gradient(90deg, ${darkMode ? 'rgba(148,163,184,0.1)' : 'rgba(148,163,184,0.2)'} 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-violet-500/10 border border-blue-500/20 mb-8"
                    >
                        <Sparkles className="w-4 h-4 text-blue-500" />
                        <span className={`text-sm font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                            Desenvolvedor de Sistemas Full Stack
                        </span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 ${darkMode ? 'text-white' : 'text-slate-900'
                            }`}
                    >
                        Transformando ideias em
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500">
                            sistemas eficientes
                        </span>
                        <br />
                        e escaláveis
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className={`text-lg sm:text-xl max-w-2xl mx-auto mb-10 ${darkMode ? 'text-slate-400' : 'text-slate-600'
                            }`}
                    >
                        Especializado em desenvolvimento web, APIs robustas e soluções digitais
                        que impulsionam negócios com código limpo e arquitetura escalável.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                    >
                        <Button
                            onClick={() => scrollToSection('#projetos')}
                            className="px-8 py-6 text-lg font-semibold rounded-2xl bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all"
                        >
                            Ver Projetos
                        </Button>
                        <Button
                            onClick={() => scrollToSection('#contato')}
                            variant="outline"
                            className={`px-8 py-6 text-lg font-semibold rounded-2xl border-2 ${darkMode
                                ? 'border-slate-700 text-white hover:bg-slate-800'
                                : 'border-slate-300 text-slate-900 hover:bg-slate-100'
                                }`}
                        >
                            Entrar em Contato
                        </Button>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex items-center justify-center gap-4"
                    >
                        {[
                            { icon: Github, href: 'https://github.com', label: 'GitHub' },
                            { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                            { icon: Mail, href: '#contato', label: 'Email' },
                        ].map((social) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target={social.href.startsWith('http') ? '_blank' : undefined}
                                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                onClick={social.href.startsWith('#') ? (e) => { e.preventDefault(); scrollToSection(social.href); } : undefined}
                                whileHover={{ y: -3, scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`p-3 rounded-xl transition-all ${darkMode
                                    ? 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
                                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                                    }`}
                            >
                                <social.icon className="w-5 h-5" />
                            </motion.a>
                        ))}
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <button
                        onClick={() => scrollToSection('#sobre')}
                        className={`p-2 rounded-full ${darkMode ? 'text-slate-500 hover:text-slate-300' : 'text-slate-400 hover:text-slate-600'}`}
                    >
                        <ArrowDown className="w-6 h-6" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}