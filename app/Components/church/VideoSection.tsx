'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Clock, Eye, Calendar } from 'lucide-react';

const videos = [
    {
        id: 'VLhkGpLIBD4',
        title: 'Os Segredos da Mente',
        thumbnail: 'https://i.ytimg.com/vi/VLhkGpLIBD4/maxresdefault.jpg?w=800&q=80',
        duration: '1:53:40',
        views: '824K',
        date: '26 de Junho de 2025',
        featured: true
    },
    {
        id: 'N73d016wvk0',
        title: 'O Poder do Ambiente',
        thumbnail: 'https://i.ytimg.com/vi/N73d016wvk0/maxresdefault.jpg?w=800&q=80',
        duration: '55:25',
        views: '889K',
        date: '11 de Setembro de 2025'
    },
    {
        id: 'TStGzGctgls',
        title: '1 Hora de Adoração e Louvor',
        thumbnail: 'https://i.ytimg.com/vi/TStGzGctgls/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLADqXvXk517L3r_oQsr_Nx0dmzyVA?w=800&q=80',
        duration: '1:06:00',
        views: '647k',
        date: '30 de Junho de 2025'
    },
    {
        id: '9IRHR4kdts4',
        title: 'Mude sua mente e tudo vai mudar',
        thumbnail: 'https://i.ytimg.com/vi/9IRHR4kdts4/hqdefault.jpg?w=800&q=80',
        duration: '35:49',
        views: '807K',
        date: '23 de Outubro de 2025'
    }
];

export default function VideoSection() {
    const [playingVideo, setPlayingVideo] = useState<any>(null);
    const featuredVideo = videos.find(v => v.featured);
    const otherVideos = videos.filter(v => !v.featured);

    return (
        <section id="videos" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="inline-block px-4 py-1.5 bg-[#1e3a5f]/10 text-[#1e3a5f] rounded-full text-sm font-medium mb-4">
                        Vídeos
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-4">
                        Assista nossas mensagens
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Reviva os momentos especiais e fortaleça sua fé com nossas mensagens
                    </p>
                </motion.div>

                {/* Featured Video */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group">
                        {playingVideo === featuredVideo?.id ? (
                            <iframe
                                src={`https://www.youtube.com/embed/${featuredVideo.id}?autoplay=1`}
                                title={featuredVideo?.title}
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        ) : (
                            <>
                                <img
                                    src={featuredVideo?.thumbnail}
                                    alt={featuredVideo?.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                                {/* Play Button */}
                                <button
                                    onClick={() => setPlayingVideo(featuredVideo.id)}
                                    className="absolute inset-0 flex items-center justify-center"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-24 h-24 rounded-full bg-[#c9a962] flex items-center justify-center shadow-lg shadow-[#c9a962]/30"
                                    >
                                        <Play className="w-10 h-10 text-[#1e3a5f] ml-2" fill="currentColor" />
                                    </motion.div>
                                </button>

                                {/* Info Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <div className="flex items-center gap-4 text-white/70 text-sm mb-3">
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            {featuredVideo?.duration}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Eye className="w-4 h-4" />
                                            {featuredVideo?.views} visualizações
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            {featuredVideo?.date}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                                        {featuredVideo?.title}
                                    </h3>
                                </div>

                                {/* Live Badge */}
                                <div className="absolute top-6 left-6">
                                    <span className="px-3 py-1.5 bg-red-500 text-white text-sm font-semibold rounded-full flex items-center gap-2">
                                        <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                                        MAIS RECENTE
                                    </span>
                                </div>
                            </>
                        )}
                    </div>
                </motion.div>

                {/* Other Videos */}
                <div className="grid md:grid-cols-3 gap-6">
                    {otherVideos.map((video, index) => (
                        <motion.div
                            key={video.id + index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer"
                            onClick={() => setPlayingVideo(video.id)}
                        >
                            <div className="relative aspect-video rounded-2xl overflow-hidden mb-4">
                                {playingVideo === video.id + index ? (
                                    <iframe
                                        src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                                        title={video.title}
                                        className="w-full h-full"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                ) : (
                                    <>
                                        <img
                                            src={video.thumbnail}
                                            alt={video.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />

                                        {/* Play Button */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform shadow-lg">
                                                <Play className="w-6 h-6 text-[#1e3a5f] ml-1" fill="currentColor" />
                                            </div>
                                        </div>

                                        {/* Duration Badge */}
                                        <div className="absolute bottom-3 right-3">
                                            <span className="px-2 py-1 bg-black/70 text-white text-xs font-medium rounded">
                                                {video.duration}
                                            </span>
                                        </div>
                                    </>
                                )}
                            </div>

                            <h3 className="font-semibold text-[#1e3a5f] group-hover:text-[#c9a962] transition-colors line-clamp-2 mb-2">
                                {video.title}
                            </h3>
                            <div className="flex items-center gap-3 text-gray-500 text-sm">
                                <span className="flex items-center gap-1">
                                    <Eye className="w-3.5 h-3.5" />
                                    {video.views}
                                </span>
                                <span>•</span>
                                <span>{video.date}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* YouTube Channel Link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <a
                        href="https://youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                        Inscreva-se no nosso canal
                    </a>
                </motion.div>
            </div>
        </section>
    );
}