import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Zap, Award, Download, MapPinned } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AboutSection({ darkMode }: any) {
    const stats = [
        { icon: Code, value: '9+', label: 'Anos de Experiência' },
        { icon: Cpu, value: '50+', label: 'Projetos Entregues' },
        { icon: Zap, value: '99%', label: 'Clientes Satisfeitos' },
        { icon: MapPinned, value: '4+', label: 'Estados com projetos' },
    ];

    return (
        <section id="sobre" className={`py-24 lg:py-32 ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative aspect-square max-w-md mx-auto">
                            {/* Decorative Elements */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-violet-600 rounded-3xl opacity-20 blur-2xl" />
                            <div className={`absolute inset-0 ${darkMode ? 'bg-slate-800' : 'bg-slate-100'} rounded-3xl`} />

                            {/* Profile Image Placeholder */}
                            <div className="relative z-10 p-8">
                                <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center overflow-hidden">
                                    <img
                                        src="https://i.postimg.cc/sgWHVnM9/Whats-App-Image-2026-01-06-at-17-57-45.jpg?w=500&h=600&fit=crop&crop=face"
                                        alt="Desenvolvedor"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className={`z-20 absolute -right-4 top-1/4 px-4 py-2 rounded-xl shadow-lg ${darkMode ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-slate-200'
                                    }`}
                            >
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                                    <span className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                        Disponível
                                    </span>
                                </div>
                            </motion.div>

                            {/* Experience Badge */}
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className={`z-10 absolute -left-4 bottom-1/4 px-4 py-3 rounded-xl shadow-lg ${darkMode ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-slate-200'
                                    }`}
                            >
                                <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>10+</p>
                                <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Anos de XP</p>
                            </motion.div>
                        </div>
                        <div className="relative aspect-square max-w-md mx-auto mt-10">
                            {/* Decorative Elements */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-violet-600 rounded-3xl opacity-20 blur-2xl" />
                            <div className={`absolute inset-0 ${darkMode ? 'bg-slate-800' : 'bg-slate-100'} rounded-3xl`} />

                            {/* Profile Image Placeholder */}
                            <div className="relative z-10 p-8">
                                <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center overflow-hidden">
                                    <img
                                        src="https://i.postimg.cc/k47TvK7c/Whats-App-Image-2026-01-06-at-20-17-30.jpg?w=500&h=600&fit=crop&crop=face"
                                        alt="Desenvolvedor"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className={`z-20 absolute -right-4 top-1/4 px-4 py-2 rounded-xl shadow-lg ${darkMode ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-slate-200'
                                    }`}
                            >
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                                    <span className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                        Soluções Inovadoras
                                    </span>
                                </div>
                            </motion.div>

                            {/* Experience Badge */}
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className={`z-10 absolute -left-4 bottom-1/4 px-4 py-3 rounded-xl shadow-lg ${darkMode ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-slate-200'
                                    }`}
                            >
                                <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>50+</p>
                                <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Projetos</p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${darkMode
                            ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                            : 'bg-blue-50 text-blue-600 border border-blue-100'
                            }`}>
                            Sobre Mim
                        </span>

                        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'
                            }`}>
                            Desenvolvedor apaixonado por{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">
                                tecnologia
                            </span>
                        </h2>

                        <div className={`space-y-4 mb-8 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                            <p className="text-lg leading-relaxed">
                                Sou desenvolvedor de sistemas com 9 anos de experiência, construídos a partir de uma trajetória sólida que começou ainda nos estágios no Governo de Minas Gerais, onde tive meus primeiros contatos com ambientes corporativos, sistemas públicos e projetos de grande escala.
                            </p>
                            <p className="text-lg leading-relaxed">
                                Ao longo desse caminho, passei pelo CIT da UFMG, ampliando minha base técnica, minha visão analítica e o contato com soluções tecnológicas voltadas à pesquisa, inovação e suporte institucional. Em paralelo, também atuei no setor privado, com experiência em empresas como a Demarco, o que me permitiu vivenciar diferentes modelos de negócio, prazos, expectativas e desafios do mercado.
                            </p>
                            <p className="text-lg leading-relaxed">
                                Grande parte da minha carreira foi construída dentro do setor público, onde atuei por vários anos em diferentes órgãos do Governo de Minas Gerais, como IEF, SEMAD e IPSEMG. Esse período foi fundamental para o amadurecimento profissional, proporcionando uma visão ampla sobre processos, governança, sistemas críticos e a complexidade da tecnologia aplicada à gestão pública.
                            </p>
                            <p className="text-lg leading-relaxed">
                                Nos últimos anos, já no IPSEMG, minha atuação evoluiu para a gestão de projetos de tecnologia, liderando demandas, organizando fluxos, acompanhando entregas e garantindo alinhamento entre áreas técnicas e de negócio. Mesmo com o foco em gestão, mantive uma atuação ativa no desenvolvimento de software, conciliando estratégia e execução técnica.
                            </p><p className="text-lg leading-relaxed">
                                Além da experiência institucional, atuo de forma independente no desenvolvimento de <strong>projetos particulares</strong>, atendendo uma <strong>cartela diversificada de clientes em nível nacional.</strong> Esses projetos envolvem desde sistemas de gestão e organização de eventos até soluções mais complexas, com integração de gateways de pagamento, automações, controle financeiro e funcionalidades personalizadas conforme a necessidade de cada cliente.
                            </p>
                            <p>
                                Essa combinação entre <strong>experiência técnica, vivência em gestão, atuação no setor público e privado</strong>, aliada à entrega de soluções reais para clientes, define meu perfil profissional: alguém que entende o problema, planeja a solução e entrega tecnologia com responsabilidade, eficiência e visão de negócio.
                            </p>

                        </div>

                        <Button
                            className="px-6 py-5 text-base font-semibold rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white shadow-lg shadow-blue-500/25"
                        >
                            <Download className="w-5 h-5 mr-2" />
                            Download CV
                        </Button>
                    </motion.div>
                </div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className={`p-6 rounded-2xl text-center ${darkMode
                                ? 'bg-slate-800/50 border border-slate-700'
                                : 'bg-slate-50 border border-slate-200'
                                }`}
                        >
                            <div className={`inline-flex p-3 rounded-xl mb-4 ${darkMode ? 'bg-blue-500/10' : 'bg-blue-50'
                                }`}>
                                <stat.icon className="w-6 h-6 text-blue-500" />
                            </div>
                            <p className={`text-3xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                {stat.value}
                            </p>
                            <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}