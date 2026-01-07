import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Server, Building2, Wrench, MessageSquare, ArrowRight } from 'lucide-react';

export default function ServicesSection({ darkMode }: any) {
    const services = [
        {
            icon: Globe,
            title: 'Desenvolvimento Web',
            description: 'Criação de aplicações web modernas, responsivas e de alta performance utilizando as melhores tecnologias do mercado.',
            features: ['Sites institucionais', 'E-commerce', 'Web apps', 'Landing pages'],
            color: 'from-blue-500 to-cyan-500',
        },
        {
            icon: Server,
            title: 'APIs e Integrações',
            description: 'Desenvolvimento de APIs RESTful e GraphQL robustas, além de integrações com sistemas terceiros e serviços externos.',
            features: ['APIs RESTful', 'GraphQL', 'Webhooks', 'Microsserviços'],
            color: 'from-violet-500 to-purple-500',
        },
        {
            icon: Building2,
            title: 'Sistemas Corporativos',
            description: 'Soluções empresariais personalizadas para automatizar processos, aumentar produtividade e reduzir custos operacionais.',
            features: ['ERP', 'CRM', 'Gestão de projetos', 'BI & Analytics'],
            color: 'from-green-500 to-emerald-500',
        },
        {
            icon: Wrench,
            title: 'Manutenção e Evolução',
            description: 'Suporte contínuo, correção de bugs, otimização de performance e evolução de sistemas existentes.',
            features: ['Refatoração', 'Otimização', 'Atualizações', 'Monitoramento'],
            color: 'from-orange-500 to-amber-500',
        },
        {
            icon: MessageSquare,
            title: 'Consultoria Técnica',
            description: 'Assessoria especializada para tomada de decisões técnicas, arquitetura de sistemas e melhores práticas.',
            features: ['Arquitetura', 'Code review', 'Mentoria', 'Planejamento'],
            color: 'from-rose-500 to-pink-500',
        },
    ];

    return (
        <section id="servicos" className={`py-24 lg:py-32 ${darkMode ? 'bg-slate-950' : 'bg-slate-50'}`}>
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
                        ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                        : 'bg-green-50 text-green-600 border border-green-100'
                        }`}>
                        Serviços
                    </span>
                    <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'
                        }`}>
                        Como posso{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">
                            ajudar você
                        </span>
                    </h2>
                    <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        Soluções completas em desenvolvimento de software para transformar sua ideia em realidade
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`group relative p-8 rounded-2xl transition-all duration-300 ${darkMode
                                ? 'bg-slate-900 border border-slate-800 hover:border-slate-700'
                                : 'bg-white border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-lg'
                                }`}
                        >
                            {/* Gradient overlay on hover */}
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                            {/* Icon */}
                            <div className={`inline-flex p-4 rounded-2xl mb-6 bg-gradient-to-br ${service.color}`}>
                                <service.icon className="w-7 h-7 text-white" />
                            </div>

                            {/* Content */}
                            <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                {service.title}
                            </h3>
                            <p className={`text-sm mb-6 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                {service.description}
                            </p>

                            {/* Features */}
                            <ul className="space-y-2">
                                {service.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className={`flex items-center gap-2 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}
                                    >
                                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* Arrow */}
                            <motion.div
                                className={`absolute bottom-8 right-8 p-2 rounded-full ${darkMode ? 'bg-slate-800' : 'bg-slate-100'
                                    } opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0`}
                            >
                                <ArrowRight className={`w-4 h-4 ${darkMode ? 'text-white' : 'text-slate-600'}`} />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}