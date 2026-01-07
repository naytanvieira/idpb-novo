import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function ExperienceSection({ darkMode }: any) {
    const experiences = [
        {
            role: 'Gestor de Projetos de Tecnologia',
            company: 'MGS - Minas Gerais Administração e Serviços S.A',
            location: 'Belo Horizonte, MG',
            period: 'Janeiro 2024 - Dezembro 2025',
            description: 'Liderança técnica de equipe, definição de arquitetura de sistemas, acompanhamento diário dos projetos garantindo a entrega no tempo previsto.',
            responsibilities: [
                'Metodologia Ágil',
                'Qualidade de Código',
                'Organização de Equipe',
                'Entrega dentro do prazo',
            ],
            technologies: ['React', 'Node.js', 'Next.JS', 'PHP', 'Docker', 'Angular.Js', 'PostgreSQL', 'Mysql'],
            current: false,
        },
        {
            role: 'Desenvolvedor Full Stack Sênior',
            company: 'SEMAD - Secretaria de Estado de Meio Ambiente e Desenvolvimento Sustentável',
            location: 'Belo Horizonte, MG',
            period: 'Julho 2022 - Fevereiro 2024',
            description: 'Desenvolvimento de aplicações web complexas e APIs de alta performance para o Governo de Minas Gerais.',
            responsibilities: [
                'Desenvolvimento de features críticas em React e Node.js',
                'Otimização de performance e escalabilidade de sistemas',
                'Integração com APIs de terceiros e serviços cloud',
                'Participação em decisões de arquitetura e tecnologia',
            ],
            technologies: ['Yii2', 'PHP', 'React.js', 'HTML', 'CSS', 'JAVASCRIPT', 'Angular.Js', 'Docker'],
            current: false,
        },
        {
            role: 'Desenvolvedor Full Stack Pleno',
            company: 'IEF - Instituto Estadual de Florestas',
            location: 'Belo Horizonte, MG',
            period: 'Maio 2020 - Julho 2022',
            description: 'Desenvolvedor Full Stack nas linguagens PHP e ReactJS, trabalhando na manutenção de sistemas legados e desenvolvimento de novos softwares e nodesenvolvimento de funcionalidades evolutivas em sistemas já publicados. ',
            responsibilities: [
                'Desenvolvimento front-end com React e Vue.js',
                'Criação de APIs RESTful com Node.js e PHP',
                'Implementação de sistemas de pagamento e integrações',
                'Manutenção e evolução de sistemas legados',
            ],
            technologies: ['React', 'PHP', 'Laravel', 'MySQL', 'Git'],
            current: false,
        },
    ];

    return (
        <section id="experiencia" className={`py-24 lg:py-32 ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
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
                        ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20'
                        : 'bg-orange-50 text-orange-600 border border-orange-100'
                        }`}>
                        Experiência Profissional
                    </span>
                    <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'
                        }`}>
                        Minha{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                            Jornada
                        </span>
                    </h2>
                    <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        Trajetória profissional construída com dedicação e evolução constante
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline Line */}
                    <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 ${darkMode ? 'bg-slate-800' : 'bg-slate-200'
                        }`} />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.role + exp.company}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className={`absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 ${exp.current
                                ? 'bg-gradient-to-r from-blue-500 to-violet-500 border-blue-500/20'
                                : darkMode
                                    ? 'bg-slate-800 border-slate-700'
                                    : 'bg-white border-slate-200'
                                }`}>
                                {exp.current && (
                                    <span className="absolute inset-0 rounded-full animate-ping bg-blue-500/50" />
                                )}
                            </div>

                            {/* Content */}
                            <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                                }`}>
                                <div className={`p-6 rounded-2xl ${darkMode
                                    ? 'bg-slate-800/50 border border-slate-700'
                                    : 'bg-slate-50 border border-slate-200'
                                    }`}>
                                    {/* Header */}
                                    <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                                        <div>
                                            <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                                {exp.role}
                                            </h3>
                                            <p className={`text-base font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'
                                                }`}>
                                                {exp.company}
                                            </p>
                                        </div>
                                        {exp.current && (
                                            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-500/10 text-green-500 border border-green-500/20">
                                                Atual
                                            </span>
                                        )}
                                    </div>

                                    {/* Meta */}
                                    <div className={`flex flex-wrap gap-4 text-sm mb-4 ${darkMode ? 'text-slate-400' : 'text-slate-500'
                                        }`}>
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            {exp.period}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <MapPin className="w-4 h-4" />
                                            {exp.location}
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p className={`text-sm mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                                        {exp.description}
                                    </p>

                                    {/* Responsibilities */}
                                    <ul className="space-y-1 mb-4">
                                        {exp.responsibilities.map((resp, i) => (
                                            <li
                                                key={i}
                                                className={`flex items-start gap-2 text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'
                                                    }`}
                                            >
                                                <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-500 flex-shrink-0" />
                                                {resp}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className={`px-2 py-1 text-xs rounded-md ${darkMode
                                                    ? 'bg-slate-700 text-slate-300'
                                                    : 'bg-white text-slate-600 border border-slate-200'
                                                    }`}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}