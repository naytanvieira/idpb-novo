'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const photos = [
    {
        url: 'https://i.postimg.cc/W3kX166b/Que_a_sua_fé_seja_inabalável_e_que_você_confie_no_plano_perfeito_de_Deus_para_a_sua_vida_em_2025.jpg?w=800&q=80',
        title: 'Culto de Celebração',
        category: 'Cultos'
    },
    {
        url: 'https://images6.alphacoders.com/607/607100.jpg?w=800&q=80',
        title: 'Movimento e Evangelismo',
        category: 'Cultos'
    },
    {
        url: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&q=80',
        title: 'Estudo Bíblico',
        category: 'Eventos'
    },
    {
        url: 'https://i.postimg.cc/k4bfgFFm/Que_a_sua_fé_seja_inabalável_e_que_você_confie_no_plano_perfeito_de_Deus_para_a_sua_vida_em_2025_(1).jpg?w=800&q=80',
        title: 'Comunhão',
        category: 'Comunidade'
    },
    {
        url: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80',
        title: 'Ação Social',
        category: 'Missões'
    },
    {
        url: 'https://i.postimg.cc/GhCdrXJG/So-conseguimos-ter-vida-com-Deus-se-morrermos-para-o-mundo-Hoje-foi-um-dia-especial-fizemos.jpg?w=800&q=80',
        title: 'Batismo',
        category: 'Eventos'
    },
    {
        url: 'https://i.postimg.cc/XJhH4NZN/Jovens-eu-vos-escrevi-porque-voces-sao-fortes-a-palavra-de-Deus-permanece-em-voces-e-ja-vencera.jpg?w=800&q=80',
        title: 'Conferência de Jovens',
        category: 'Eventos'
    },
    {
        url: 'https://i.postimg.cc/V6CDkBBk/Que_a_sua_fé_seja_inabalável_e_que_você_confie_no_plano_perfeito_de_Deus_para_a_sua_vida_em_2025_(2).jpg?w=800&q=80',
        title: 'Adoração',
        category: 'Cultos'
    }
];

export default function GallerySection() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [filter, setFilter] = useState('Todos');

    const categories = ['Todos', 'Cultos', 'Eventos', 'Comunidade', 'Missões'];

    const filteredPhotos = filter === 'Todos'
        ? photos
        : photos.filter(p => p.category === filter);

    const openModal = (index) => {
        setSelectedImage(index);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const navigate = (direction) => {
        const newIndex = selectedImage + direction;
        if (newIndex >= 0 && newIndex < filteredPhotos.length) {
            setSelectedImage(newIndex);
        }
    };

    return (
        <section id="fotos" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="inline-block px-4 py-1.5 bg-[#1e3a5f]/10 text-[#1e3a5f] rounded-full text-sm font-medium mb-4">
                        Galeria
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-4">
                        Momentos especiais
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Confira alguns dos momentos marcantes em nossa comunidade
                    </p>
                </motion.div>

                {/* Filter Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-2 mb-12"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${filter === category
                                ? 'bg-[#1e3a5f] text-white'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Gallery Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                >
                    <AnimatePresence>
                        {filteredPhotos.map((photo, index) => (
                            <motion.div
                                key={photo.url}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className={`relative group cursor-pointer overflow-hidden rounded-2xl ${index === 0 ? 'col-span-2 row-span-2' : ''
                                    }`}
                                onClick={() => openModal(index)}
                            >
                                <div className={`aspect-square ${index === 0 ? '' : ''}`}>
                                    <img
                                        src={photo.url}
                                        alt={photo.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                                            <ZoomIn className="w-5 h-5 text-white" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                        <span className="text-[#c9a962] text-xs font-medium">{photo.category}</span>
                                        <h3 className="text-white font-semibold">{photo.title}</h3>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedImage !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                        onClick={closeModal}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors z-10"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        {/* Navigation */}
                        {selectedImage > 0 && (
                            <button
                                onClick={(e) => { e.stopPropagation(); navigate(-1); }}
                                className="absolute left-4 p-2 text-white/70 hover:text-white transition-colors"
                            >
                                <ChevronLeft className="w-10 h-10" />
                            </button>
                        )}
                        {selectedImage < filteredPhotos.length - 1 && (
                            <button
                                onClick={(e) => { e.stopPropagation(); navigate(1); }}
                                className="absolute right-4 p-2 text-white/70 hover:text-white transition-colors"
                            >
                                <ChevronRight className="w-10 h-10" />
                            </button>
                        )}

                        {/* Image */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="max-w-5xl max-h-[85vh] relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={filteredPhotos[selectedImage].url}
                                alt={filteredPhotos[selectedImage].title}
                                className="max-w-full max-h-[85vh] object-contain rounded-lg"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
                                <span className="text-[#c9a962] text-sm font-medium">
                                    {filteredPhotos[selectedImage].category}
                                </span>
                                <h3 className="text-white text-xl font-semibold">
                                    {filteredPhotos[selectedImage].title}
                                </h3>
                            </div>
                        </motion.div>

                        {/* Thumbnails */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                            {filteredPhotos.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={(e) => { e.stopPropagation(); setSelectedImage(idx); }}
                                    className={`w-2 h-2 rounded-full transition-all ${idx === selectedImage ? 'bg-[#c9a962] w-6' : 'bg-white/50 hover:bg-white/70'
                                        }`}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}