import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

export default function ProjectsSection({ darkMode }: any) {
    const [selectedProject, setSelectedProject] = useState<any>(null);

    const projects = [
        {
            id: 1,
            title: ' Plataforma de E-Commerce',
            shortDescription: 'Plataforma completa de e-commerce com painel administrativo',
            fullDescription: 'Sistema completo de e-commerce desenvolvido do zero, incluindo catálogo de produtos, carrinho de compras, sistema de pagamentos integrado (Stripe/PagSeguro), gestão de estoque, painel administrativo com relatórios e analytics, e área do cliente para acompanhamento de pedidos.',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
            technologies: ['React', 'Node.js', 'Mysql', 'PHP'],
            demoUrl: 'https://demo.example.com',
            codeUrl: 'https://github.com/example',
            category: 'Web App',
            highlights: ['100k+ usuários ativos', '99.9% uptime', 'Performance otimizada'],
        },
        {
            id: 2,
            title: 'Sistema de Gestão ERP',
            shortDescription: 'ERP corporativo com módulos integrados',
            fullDescription: 'Sistema ERP completo para gestão empresarial com módulos de vendas, compras, financeiro, estoque, RH e produção. Inclui dashboards interativos, relatórios personalizáveis, controle de acesso por perfil e integração com sistemas fiscais.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
            technologies: ['Vue.js', 'Spring Boot', 'MySQL', 'RabbitMQ', 'AWS'],
            demoUrl: 'https://demo.example.com',
            codeUrl: 'https://github.com/example',
            category: 'Enterprise',
            highlights: ['50+ empresas utilizam', 'Multi-tenant', 'API RESTful'],
        },
        {
            id: 3,
            title: 'Landing Pages',
            shortDescription: 'Uma página focada em um único objetivo, sem distrações.',
            fullDescription: '🎯 Objetivo principal da landing page é Captar leads (nome, e-mail, telefone), gerar vendas, solicitar orçamentos, inscrições em eventos, downloads de materiais e contato direto (WhatsApp, formulário, etc.)',
            image: 'https://graphicsfamily.com/wp-content/uploads/edd/2022/02/Free-Modern-Landing-Page-Template.jpg?w=800&h=500&fit=crop',
            technologies: ['Next.Js', 'PHP', 'MYSQL', 'Google Maps'],
            demoUrl: 'https://demo.example.com',
            codeUrl: 'https://github.com/example',
            category: 'Web App',
            highlights: ['10k downloads', 'Rating 4.8★', 'Real-time tracking'],
        },
        {
            id: 4,
            title: 'Gestão Financeira Para Igrejas',
            shortDescription: 'Plataforma de Gestão financeira para igrejas',
            fullDescription: 'Um sistema completo de gestão para igrejas, que reúne controle financeiro, gestão de membros, usuários e células em um único lugar. Com dashboards mensais, lista de presença nos cultos e total flexibilidade para ser modelado conforme a necessidade de cada igreja, a plataforma traz organização, transparência e praticidade para a administração.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
            technologies: ['React', 'Python', 'FastAPI', 'PostgreSQL', 'Chart.js', 'Pandas'],
            demoUrl: 'https://demo.example.com',
            codeUrl: 'https://github.com/example',
            category: 'Data',
            highlights: ['Tempo real', 'Machine Learning', '20+ integrações'],
        },
        {
            id: 5,
            title: 'API Gateway',
            shortDescription: 'Gateway centralizado para microsserviços',
            fullDescription: 'API Gateway desenvolvido para gerenciar comunicação entre microsserviços, incluindo autenticação JWT, rate limiting, caching, logging centralizado, circuit breaker e documentação automática com Swagger.',
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop',
            technologies: ['Node.js', 'Kong', 'Redis', 'Prometheus', 'Grafana', 'Docker'],
            demoUrl: 'https://demo.example.com',
            codeUrl: 'https://github.com/example',
            category: 'Backend',
            highlights: ['1M+ requests/dia', 'Latência < 50ms', 'Alta disponibilidade'],
        },
        {
            id: 6,
            title: 'Sistema de Agendamentos',
            shortDescription: 'Plataforma de agendamentos online',
            fullDescription: 'Sistema completo de agendamentos com calendário interativo, notificações automáticas, pagamento online, gestão de profissionais e serviços, área do cliente e relatórios de produtividade.',
            image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&h=500&fit=crop',
            technologies: ['Next.js', 'NestJS', 'PostgreSQL', 'Twilio', 'Stripe'],
            demoUrl: 'https://demo.example.com',
            codeUrl: 'https://github.com/example',
            category: 'SaaS',
            highlights: ['500+ clínicas', 'WhatsApp integrado', 'Multi-idioma'],
        },
    ];

    return (
        <section id="projetos" className={`py-24 lg:py-32 ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
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
                        ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                        : 'bg-cyan-50 text-cyan-600 border border-cyan-100'
                        }`}>
                        Projetos
                    </span>
                    <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'
                        }`}>
                        Trabalhos{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                            Recentes
                        </span>
                    </h2>
                    <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        Uma seleção dos meus projetos mais relevantes e impactantes
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => setSelectedProject(project)}
                            className={`group cursor-pointer rounded-2xl overflow-hidden ${darkMode
                                ? 'bg-slate-800 border border-slate-700 hover:border-slate-600'
                                : 'bg-white border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md'
                                } transition-all duration-300`}
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden aspect-video">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                                    {/* <Button size="sm" className="bg-white/90 text-slate-900 hover:bg-white rounded-lg">
                                        <ExternalLink className="w-4 h-4 mr-1" />
                                        Demo
                                    </Button> */}
                                    {/* <Button size="sm" variant="outline" className="bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20 rounded-lg">
                                        <Github className="w-4 h-4 mr-1" />
                                        Código
                                    </Button> */}
                                </div>
                                <Badge className={`absolute top-4 right-4 ${darkMode ? 'bg-slate-900/80 text-white' : 'bg-white/90 text-black'
                                    } backdrop-blur`}>
                                    {project.category}
                                </Badge>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                    {project.title}
                                </h3>
                                <p className={`text-sm mb-4 line-clamp-2 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                    {project.shortDescription}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.slice(0, 4).map((tech) => (
                                        <span
                                            key={tech}
                                            className={`px-2 py-1 text-xs rounded-md ${darkMode
                                                ? 'bg-slate-700 text-slate-300'
                                                : 'bg-slate-100 text-slate-600'
                                                }`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 4 && (
                                        <span className={`px-2 py-1 text-xs rounded-md ${darkMode ? 'bg-slate-700 text-slate-400' : 'bg-slate-100 text-slate-500'
                                            }`}>
                                            +{project.technologies.length - 4}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Project Modal */}
                <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
                    <DialogContent className={`max-w-3xl   ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white'}`}>
                        {selectedProject && (
                            <>
                                <DialogHeader>
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <Badge className="mb-2">{selectedProject.category}</Badge>
                                            <DialogTitle className={`text-2xl ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                                {selectedProject.title}
                                            </DialogTitle>
                                        </div>
                                    </div>
                                </DialogHeader>

                                <div className="space-y-6">
                                    <img
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        className="w-full rounded-xl"
                                    />

                                    <DialogDescription className={`text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                                        {selectedProject.fullDescription}
                                    </DialogDescription>

                                    {/* Highlights */}
                                    <div className="flex flex-wrap gap-3">
                                        {selectedProject.highlights.map((highlight: any) => (
                                            <span
                                                key={highlight}
                                                className={`px-3 py-1.5 rounded-lg text-sm font-medium ${darkMode
                                                    ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                                                    : 'bg-blue-50 text-blue-600 border border-blue-100'
                                                    }`}
                                            >
                                                {highlight}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Technologies */}
                                    <div>
                                        <h4 className={`text-sm font-semibold mb-3 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                                            Tecnologias Utilizadas
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.technologies.map((tech: any) => (
                                                <span
                                                    key={tech}
                                                    className={`px-3 py-1.5 text-sm rounded-lg ${darkMode
                                                        ? 'bg-slate-800 text-slate-300 border border-slate-700'
                                                        : 'bg-slate-100 text-slate-700'
                                                        }`}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex gap-3 pt-4">
                                        <Button
                                            className="flex-1 bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white"
                                            onClick={() => window.open(selectedProject.demoUrl, '_blank')}
                                        >
                                            <ExternalLink className="w-4 h-4 mr-2" />
                                            Ver Demo
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className={`flex-1 ${darkMode ? 'border-slate-700 text-white hover:bg-slate-800' : ''}`}
                                            onClick={() => window.open(selectedProject.codeUrl, '_blank')}
                                        >
                                            <Github className="w-4 h-4 mr-2" />
                                            Ver Código
                                        </Button>
                                    </div>
                                </div>
                            </>
                        )}
                    </DialogContent>
                </Dialog>
            </div>
        </section>
    );
}