'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Users, BookOpen, Heart, Music } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import EventModal from '../EventsModel';

const schedules = [
    {
        title: 'Culto de Celebração',
        description: 'Momento de adoração e louvor em família',
        day: 'Domingo',
        time: '10h00 e 19h00',
        location: 'Templo Principal',
        icon: Music,
        color: 'from-blue-500 to-blue-600',
        featured: true
    },
    {
        title: 'Estudo Bíblico',
        description: 'Aprofunde-se na Palavra de Deus',
        day: 'Quarta-feira',
        time: '19h30',
        location: 'Templo Principal',
        icon: BookOpen,
        color: 'from-emerald-500 to-emerald-600'
    },
    {
        title: 'Células',
        description: 'Encontros em pequenos grupos nos lares',
        day: 'Sexta-feira',
        time: '20h00',
        location: 'Diversos locais',
        icon: Users,
        color: 'from-purple-500 to-purple-600'
    },
    {
        title: 'Oração da Manhã',
        description: 'Comece o dia em comunhão com Deus',
        day: 'Segunda a Sexta',
        time: '06h00',
        location: 'Online e Presencial',
        icon: Heart,
        color: 'from-rose-500 to-rose-600'
    }
];

const upcomingEvents = [
    {
        title: 'Congresso Nacional de Jovens 2026',
        date: '04 - 06 de Junho',
        description: 'INDO ALÉM [I.A]',
        button: true,
    },
    {
        title: 'Batismo nas Águas',
        date: '24 Março',
        description: 'Celebre sua nova vida em Cristo',
        button: false,
    },
    {
        title: 'Retiro de Casais',
        date: '05-07 Abril',
        description: 'Fortaleça seu relacionamento',
        button: false,
    }
];



export default function ScheduleSection() {
    const [isOpen, setIsOpen] = useState(false)
    const event = {
        title: "Conferência Nacional de Jovens",
        description: `As inscrições para o 1º lote do Congresso Nacional de Jovens 2026 já estão abertas!
        Com o tema “Indo Além”, esse será um tempo de expansão, crescimento e posicionamento. É hora de romper limites, fortalecer a fé e viver tudo aquilo que Deus tem preparado para essa geração!
        Não fique de fora desse mover. Garanta sua vaga no primeiro lote e venha viver dias que marcarão a sua história!
        `,
        date: "4 à 6 de Junho de 2026",
        image: "https://i.postimg.cc/BvtpYxG5/Save-Clip-App-639727196-18168087097399564-3470087830559805758-n.jpg",
        registrationLink: "https://idpbnacional.com/CNJ2026/",
    }

    return (
        <section id="programacoes" className="py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 bg-[#1e3a5f]/10 text-[#1e3a5f] rounded-full text-sm font-medium mb-4">
                        Programações
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-4">
                        Encontre seu lugar
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Participe de nossos cultos e eventos. Há sempre um momento especial preparado para você.
                    </p>
                </motion.div>

                {/* Regular Schedule */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {schedules.map((schedule, index) => (
                        <motion.div
                            key={schedule.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className={`h-full overflow-hidden hover:shadow-xl transition-all duration-500 group ${schedule.featured ? 'ring-2 ring-[#c9a962]' : ''
                                }`}>
                                <CardContent className="p-0">
                                    {/* Icon Header */}
                                    <div className={`bg-gradient-to-br ${schedule.color} p-6 relative overflow-hidden`}>
                                        <div className="absolute inset-0 bg-black/10" />
                                        <div className="relative">
                                            <schedule.icon className="w-10 h-10 text-white mb-3" />
                                            <h3 className="text-xl font-bold text-white">{schedule.title}</h3>
                                            <p className="text-white/80 text-sm mt-1">{schedule.description}</p>
                                        </div>
                                        {schedule.featured && (
                                            <div className="absolute top-4 right-4 px-2 py-1 bg-[#c9a962] text-[#1e3a5f] text-xs font-bold rounded">
                                                DESTAQUE
                                            </div>
                                        )}
                                    </div>

                                    {/* Details */}
                                    <div className="p-6 space-y-3">
                                        <div className="flex items-center gap-3 text-gray-600">
                                            <Calendar className="w-4 h-4 text-[#c9a962]" />
                                            <span className="font-medium">{schedule.day}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-gray-600">
                                            <Clock className="w-4 h-4 text-[#c9a962]" />
                                            <span>{schedule.time}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-gray-600">
                                            <MapPin className="w-4 h-4 text-[#c9a962]" />
                                            <span>{schedule.location}</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Upcoming Events */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#1e3a5f] rounded-3xl p-8 md:p-12 relative overflow-hidden"
                >
                    {/* Decorative */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#c9a962]/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

                    <div className="relative">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Próximos Eventos</h3>
                                <p className="text-white/70">Não perca nenhuma programação especial</p>
                            </div>
                            <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a962] text-[#1e3a5f] font-semibold rounded-full hover:bg-[#d4b46d] transition-colors">
                                <Calendar className="w-4 h-4" />
                                Ver calendário completo
                            </button>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {upcomingEvents.map((event, index) => (
                                <motion.div
                                    key={event.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-colors"
                                >
                                    <div className="text-[#c9a962] font-bold text-sm mb-2">{event.date}</div>
                                    <h4 className="text-white font-semibold text-lg mb-2">{event.title}</h4>
                                    <p className="text-white/70 text-sm">{event.description}</p>
                                    {event.button && (
                                        <Button onClick={() => setIsOpen(true)} className="inline-flex items-center gap-2 px-0 py-3 bg-transparent text-[#c9a962] font-semibold rounded-full transition-colors hover:underline hover:bg-transparent">
                                            Saiba mais
                                        </Button>
                                    )}
                                </motion.div>
                            ))}
                            <EventModal
                                isOpen={isOpen}
                                onClose={() => setIsOpen(false)}
                                event={event}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}