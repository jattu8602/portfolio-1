import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Server, Database, Wrench, Lightbulb } from 'lucide-react';

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      skills: ['Java', 'Python', 'JavaScript', 'SQL'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Backend',
      icon: Server,
      skills: ['Spring Boot', 'Node.js', 'Express.js', 'REST APIs'],
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'Frontend',
      icon: Code2,
      skills: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MySQL', 'MongoDB'],
      color: 'from-orange-500 to-orange-600',
    },
    {
      title: 'Developer Tools',
      icon: Wrench,
      skills: ['Git', 'GitHub', 'Docker', 'Postman', 'Jira'],
      color: 'from-red-500 to-red-600',
    },
    {
      title: 'Core Concepts',
      icon: Lightbulb,
      skills: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'],
      color: 'from-yellow-500 to-yellow-600',
    },
  ];

  return (
    <section id="skills" ref={sectionRef} className="min-h-screen py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-16 text-center"
        >
          Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Skills</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg`}
                >
                  <category.icon className="text-white" size={28} />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-800">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
