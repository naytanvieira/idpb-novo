'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    MapPin,
    Clock,
    Phone,
    Mail,
    Send,
    MessageCircle,
    Instagram,
    Youtube,
    Facebook,
    CheckCircle,
    Loader2
} from 'lucide-react';
import { toast } from 'sonner';

const contactInfo = [
    {
        icon: MapPin,
        title: 'Endereço',
        content: 'Rua Aquiles de Lisboa, 243 - Brant',
        subtitle: 'Lagoa Santa - MG'
    },
    {
        icon: Clock,
        title: 'Horários',
        content: 'Dom: 09h e 18:30h | Seg: 19h30 | Qua: 19:30 | Sáb: 19:30',
        subtitle: ''
    },
    {
        icon: Phone,
        title: 'Telefone',
        content: '(31) 99999-9999',
        subtitle: 'WhatsApp disponível'
    },
    {
        icon: Mail,
        title: 'E-mail',
        content: 'contato@idpbbrant.com.br',
        subtitle: 'Resposta em até 24h'
    }
];

const socialLinks = [
    { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/5511999999999', color: 'bg-green-500 hover:bg-green-600' },
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/idpbbrant/', color: 'bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600' },
    // { icon: Youtube, label: 'YouTube', href: 'https://youtube.com', color: 'bg-red-500 hover:bg-red-600' },
    // { icon: Facebook, label: 'Facebook', href: 'https://facebook.com', color: 'bg-blue-600 hover:bg-blue-700' }
];

export default function ContactSection() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
        toast.success('Mensagem enviada com sucesso!');

        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', message: '' });
        }, 3000);
    };

    return (
        <section id="contato" className="py-24 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#1e3a5f]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#c9a962]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 bg-[#1e3a5f]/10 text-[#1e3a5f] rounded-full text-sm font-medium mb-4">
                        Contato
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-4">
                        Fale conosco
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Estamos aqui para ajudar. Entre em contato e teremos prazer em atendê-lo.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="grid sm:grid-cols-2 gap-6 mb-10">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={info.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-[#1e3a5f] flex items-center justify-center mb-4">
                                        <info.icon className="w-5 h-5 text-[#c9a962]" />
                                    </div>
                                    <h3 className="font-semibold text-[#1e3a5f] mb-1">{info.title}</h3>
                                    <p className="text-gray-700">{info.content}</p>
                                    <p className="text-gray-500 text-sm">{info.subtitle}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div>
                            <h3 className="text-lg font-semibold text-[#1e3a5f] mb-4">Redes Sociais</h3>
                            <div className="flex flex-wrap gap-3">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`${social.color} text-white px-5 py-3 rounded-xl flex items-center gap-2 font-medium transition-colors shadow-lg`}
                                    >
                                        <social.icon className="w-5 h-5" />
                                        {social.label}
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="mt-10 rounded-2xl overflow-hidden h-64 bg-gray-100 relative"
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1977266251396!2d-46.65390068502246!3d-23.561684284681926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1647887489427!5m2!1spt-BR!2sbr"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Localização da Igreja"
                            />
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-[#1e3a5f] rounded-3xl p-8 md:p-10 relative overflow-hidden">
                            {/* Decorative */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-[#c9a962]/20 rounded-full blur-3xl" />

                            <div className="relative">
                                <h3 className="text-2xl font-bold text-white mb-2">Envie sua mensagem</h3>
                                <p className="text-white/70 mb-8">
                                    Preencha o formulário abaixo e entraremos em contato em breve.
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div>
                                        <label className="text-white/90 text-sm font-medium mb-2 block">Nome</label>
                                        <Input
                                            type="text"
                                            placeholder="Seu nome completo"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            required
                                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#c9a962] focus:ring-[#c9a962]/20 h-12 rounded-xl"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-white/90 text-sm font-medium mb-2 block">E-mail</label>
                                        <Input
                                            type="email"
                                            placeholder="seu@email.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            required
                                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#c9a962] focus:ring-[#c9a962]/20 h-12 rounded-xl"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-white/90 text-sm font-medium mb-2 block">Mensagem</label>
                                        <Textarea
                                            placeholder="Como podemos ajudá-lo?"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            required
                                            rows={5}
                                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#c9a962] focus:ring-[#c9a962]/20 rounded-xl resize-none"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting || isSubmitted}
                                        className={`w-full h-14 text-lg font-semibold rounded-xl transition-all ${isSubmitted
                                            ? 'bg-green-500 hover:bg-green-500'
                                            : 'bg-[#c9a962] hover:bg-[#d4b46d] text-[#1e3a5f]'
                                            }`}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                                Enviando...
                                            </>
                                        ) : isSubmitted ? (
                                            <>
                                                <CheckCircle className="w-5 h-5 mr-2" />
                                                Mensagem enviada!
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5 mr-2" />
                                                Enviar mensagem
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}