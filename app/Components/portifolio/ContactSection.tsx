import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Mail, MessageCircle, MapPin, Phone, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function ContactSection({ darkMode }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => setIsSubmitted(false), 5000);
    };

    const contactInfo = [
        {
            icon: Mail,
            label: 'E-mail',
            value: 'contato@tubaraotechbrasil.com.br',
            href: 'mailto:contato@tubaraotechbrasil.com.br',
        },
        {
            icon: Phone,
            label: 'Telefone',
            value: '+55 (31) 99301-4758',
            href: 'tel:+5531993014758',
        },
        {
            icon: MapPin,
            label: 'Localização',
            value: 'Lagoa Santa - Minas Gerais, Brasil',
            href: null,
        },
    ];

    const socialLinks = [
        { icon: Github, href: 'https://github.com', label: 'GitHub', color: 'hover:bg-slate-700' },
        { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:bg-blue-600' },
        { icon: MessageCircle, href: 'https://wa.me/5511999999999', label: 'WhatsApp', color: 'hover:bg-green-600' },
        { icon: Mail, href: 'mailto:contato@devportfolio.com', label: 'Email', color: 'hover:bg-red-500' },
    ];

    return (
        <section id="contato" className={`py-24 lg:py-32 ${darkMode ? 'bg-slate-950' : 'bg-slate-50'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${darkMode
                        ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                        : 'bg-rose-50 text-rose-600 border border-rose-100'
                        }`}>
                        Contato
                    </span>
                    <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'
                        }`}>
                        Vamos{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500">
                            conversar?
                        </span>
                    </h2>
                    <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        Vamos transformar sua ideia em um sistema de verdade?
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={`p-8 rounded-2xl ${darkMode
                            ? 'bg-slate-900 border border-slate-800'
                            : 'bg-white border border-slate-200 shadow-sm'
                            }`}>
                            <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                Envie uma mensagem
                            </h3>

                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className={`flex flex-col items-center justify-center py-12 text-center ${darkMode ? 'text-white' : 'text-slate-900'
                                        }`}
                                >
                                    <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                                        <CheckCircle className="w-8 h-8 text-green-500" />
                                    </div>
                                    <h4 className="text-xl font-bold mb-2">Mensagem enviada!</h4>
                                    <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                                        Obrigado pelo contato. Responderei em breve!
                                    </p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <Label htmlFor="name" className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                                            Nome
                                        </Label>
                                        <Input
                                            id="name"
                                            value={formData.name}
                                            onChange={(e: any) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="Seu nome completo"
                                            required
                                            className={`mt-2 h-12 rounded-xl ${darkMode
                                                ? 'bg-slate-800 border-slate-700 text-white placeholder:text-slate-500'
                                                : 'bg-slate-50 border-slate-200'
                                                }`}
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="email" className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                                            E-mail
                                        </Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={(e: any) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="seu@email.com"
                                            required
                                            className={`mt-2 h-12 rounded-xl ${darkMode
                                                ? 'bg-slate-800 border-slate-700 text-white placeholder:text-slate-500'
                                                : 'bg-slate-50 border-slate-200'
                                                }`}
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="message" className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                                            Mensagem
                                        </Label>
                                        <Textarea
                                            id="message"
                                            value={formData.message}
                                            onChange={(e: any) => setFormData({ ...formData, message: e.target.value })}
                                            placeholder="Conte sobre seu projeto..."
                                            required
                                            rows={5}
                                            className={`mt-2 rounded-xl resize-none ${darkMode
                                                ? 'bg-slate-800 border-slate-700 text-white placeholder:text-slate-500'
                                                : 'bg-slate-50 border-slate-200'
                                                }`}
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full h-12 text-base font-semibold rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white shadow-lg shadow-blue-500/25"
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center gap-2">
                                                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                </svg>
                                                Enviando...
                                            </span>
                                        ) : (
                                            <span className="flex items-center gap-2">
                                                <Send className="w-5 h-5" />
                                                Enviar Mensagem
                                            </span>
                                        )}
                                    </Button>
                                </form>
                            )}
                        </div>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        {/* Info Cards */}
                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={info.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className={`flex items-center gap-4 p-5 rounded-2xl ${darkMode
                                        ? 'bg-slate-900 border border-slate-800'
                                        : 'bg-white border border-slate-200'
                                        }`}
                                >
                                    <div className={`p-3 rounded-xl ${darkMode ? 'bg-slate-800' : 'bg-slate-100'
                                        }`}>
                                        <info.icon className={`w-6 h-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                                    </div>
                                    <div>
                                        <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                                            {info.label}
                                        </p>
                                        {info.href ? (
                                            <a
                                                href={info.href}
                                                className={`font-medium ${darkMode ? 'text-white hover:text-blue-400' : 'text-slate-900 hover:text-blue-600'
                                                    } transition-colors`}
                                            >
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className={`font-medium ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                                {info.value}
                                            </p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className={`p-8 rounded-2xl ${darkMode
                            ? 'bg-slate-900 border border-slate-800'
                            : 'bg-white border border-slate-200'
                            }`}>
                            <h4 className={`text-lg font-bold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                Me encontre nas redes
                            </h4>
                            <div className="flex gap-3">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ y: -3, scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`p-4 rounded-xl transition-all ${darkMode
                                            ? 'bg-slate-800 text-slate-400 hover:text-white'
                                            : 'bg-slate-100 text-slate-600 hover:text-white'
                                            } ${social.color}`}
                                    >
                                        <social.icon className="w-6 h-6" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* CTA Card */}
                        <div className="relative overflow-hidden p-8 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
                            <div className="relative z-10">
                                <h4 className="text-2xl font-bold text-white mb-3">
                                    Pronto para começar?
                                </h4>
                                <p className="text-blue-100 mb-6">
                                    Vamos discutir como posso ajudar a transformar sua ideia em realidade.
                                </p>
                                <Button
                                    className="bg-white text-blue-600 hover:bg-blue-50 font-semibold rounded-xl px-6"
                                    onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                                >
                                    <MessageCircle className="w-5 h-5 mr-2" />
                                    Chamar no WhatsApp
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}