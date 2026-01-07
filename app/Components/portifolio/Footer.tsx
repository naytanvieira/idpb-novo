import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Heart, ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer({ darkMode }) {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className={`py-12 ${darkMode ? 'bg-slate-900 border-t border-slate-800' : 'bg-white border-t border-slate-200'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo & Copyright */}
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <div className="flex items-center gap-2">
                            <div className={`p-2 rounded-xl ${darkMode ? 'bg-gradient-to-br from-blue-500 to-violet-600' : 'bg-gradient-to-br from-blue-600 to-violet-700'}`}>
                                <Code2 className="w-4 h-4 text-white" />
                            </div>
                            <span className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                Dev<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">Portfolio</span>
                            </span>
                        </div>
                        <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                            © {currentYear} Todos os direitos reservados
                        </p>
                    </div>

                    {/* Made with love */}
                    <div className={`flex items-center gap-1 text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                        <span>Feito com</span>
                        <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                        <span>e muito</span>
                        <span className={`font-mono px-1.5 py-0.5 rounded ${darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'}`}>
                            {'<código/>'}
                        </span>
                    </div>

                    {/* Social Links & Scroll to Top */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            {[
                                { icon: Github, href: 'https://github.com' },
                                { icon: Linkedin, href: 'https://linkedin.com' },
                                { icon: Mail, href: 'mailto:contato@devportfolio.com' },
                            ].map((social) => (
                                <motion.a
                                    key={social.href}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -2 }}
                                    className={`p-2 rounded-lg transition-colors ${darkMode
                                            ? 'text-slate-400 hover:text-white hover:bg-slate-800'
                                            : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                                        }`}
                                >
                                    <social.icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>

                        <Button
                            onClick={scrollToTop}
                            variant="outline"
                            size="icon"
                            className={`rounded-xl ${darkMode
                                    ? 'border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800'
                                    : 'border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                                }`}
                        >
                            <ArrowUp className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    );
}