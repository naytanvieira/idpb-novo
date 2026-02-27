"use client"

import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { useEffect } from "react"

interface EventModalProps {
    isOpen: boolean
    onClose: () => void
    event: {
        title: string
        description: string
        date: string
        image: string
        registrationLink?: string
    }
}

export default function EventModal({
    isOpen,
    onClose,
    event,
}: EventModalProps) {

    // Fecha com ESC
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose()
        }
        window.addEventListener("keydown", handleEsc)
        return () => window.removeEventListener("keydown", handleEsc)
    }, [onClose])

    return (
        <AnimatePresence>
            {isOpen && (
                <>

                    {/* Overlay */}
                    <motion.div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        className="fixed inset-0 flex items-center justify-center z-50 p-4"
                        initial={{ opacity: 0, scale: 0.9, y: 40 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 40 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div
                            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Imagem */}
                            <img
                                src={event.image}
                                alt={event.title}
                                className="w-full h-56 object-cover"
                            />

                            {/* Conteúdo */}
                            <div className="p-6">
                                <h2 className="text-2xl font-bold mb-2">
                                    {event.title}
                                </h2>

                                <p className="text-gray-600 mb-4">
                                    {event.description}
                                </p>

                                <p className="text-sm text-gray-500 mb-6">
                                    📅 {event.date}
                                </p>

                                <div className="flex">
                                    {event.registrationLink && (
                                        <a
                                            href={event.registrationLink}
                                            target="_blank"
                                            className="w-[50%] block  text-center bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-xl transition"
                                        >
                                            Fazer inscrição
                                        </a>
                                    )}
                                    <Button
                                        onClick={() => onClose()}
                                        className="block w-[50%] text-center bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-xl h-12 transition"
                                    >Ver outros Eventos</Button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}