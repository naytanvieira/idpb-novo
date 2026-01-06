import React from 'react';
import { motion } from 'framer-motion';

export default function SkillsSection({ darkMode }: any) {
  const skillCategories = [
    {
      title: 'Backend',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'PHP', level: 98 },
        { name: 'TypeScript', level: 90 },

        { name: 'Node.js', level: 70 },

      ],
    },
    {
      title: 'Frontend',
      color: 'from-violet-500 to-purple-500',
      skills: [
        { name: 'React', level: 95 },
        { name: 'Next.js', level: 95 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'HTML5/CSS3', level: 98 },
        { name: 'JavaScript', level: 95 },
      ],
    },
    {
      title: 'Banco de Dados',
      color: 'from-orange-500 to-amber-500',
      skills: [
        { name: 'PostgreSQL', level: 80 },
        { name: 'MySQL', level: 90 },
        { name: 'Oracle', level: 70 },
      ],
    },
    {
      title: 'DevOps & Cloud',
      color: 'from-rose-500 to-pink-500',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'Docker', level: 80 },
        { name: 'CI/CD', level: 85 },
        { name: 'Linux', level: 85 },
      ],
    },
    {
      title: 'Metodologias',
      color: 'from-cyan-500 to-teal-500',
      skills: [
        { name: 'Scrum', level: 90 },
        { name: 'Kanban', level: 88 },
        { name: 'TDD', level: 80 },
        { name: 'Clean Code', level: 92 },
        { name: 'Design Patterns', level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className={`py-24 lg:py-32 ${darkMode ? 'bg-slate-950' : 'bg-slate-50'}`}>
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
            ? 'bg-violet-500/10 text-violet-400 border border-violet-500/20'
            : 'bg-violet-50 text-violet-600 border border-violet-100'
            }`}>
            Tecnologias & Skills
          </span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'
            }`}>
            Minha Stack de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">
              Desenvolvimento
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Ferramentas e tecnologias que utilizo para criar soluções para o mercado
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className={`p-6 rounded-2xl ${darkMode
                ? 'bg-slate-900 border border-slate-800'
                : 'bg-white border border-slate-200 shadow-sm'
                }`}
            >
              <div className={`inline-flex px-3 py-1 rounded-lg text-sm font-semibold mb-6 bg-gradient-to-r ${category.color} text-white`}>
                {category.title}
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className={`text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        {skill.name}
                      </span>
                      <span className={`text-xs font-semibold ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`h-2 rounded-full overflow-hidden ${darkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                        className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}