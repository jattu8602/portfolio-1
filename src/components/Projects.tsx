import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, ShoppingCart, Code, MessageSquare } from 'lucide-react';

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const projects = [
    {
      title: "Shopper's Bay",
      subtitle: 'E-commerce Platform',
      description: 'A full-stack e-commerce website that allows users to browse products, add them to a cart, and proceed to checkout.',
      features: [
        'Secure user authentication with JWT',
        'Product search and filtering',
        'Shopping cart functionality',
        'Responsive user interface',
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
      icon: ShoppingCart,
      color: 'from-blue-500 to-cyan-500',
      links: {
        live: '#',
        github: '#',
      },
    },
    {
      title: 'CodeSnip',
      subtitle: 'Code Snippet Manager',
      description: 'A backend-focused application for developers to save, manage, and search for useful code snippets. The primary focus was on building a clean and well-documented REST API.',
      features: [
        'Secure CRUD operations for code snippets',
        'Search functionality based on language or tags',
        'User-specific data storage',
        'Well-documented REST API',
      ],
      tech: ['Java', 'Spring Boot', 'MySQL', 'Spring Security'],
      icon: Code,
      color: 'from-purple-500 to-pink-500',
      links: {
        github: '#',
      },
    },
    {
      title: 'CampusConnect',
      subtitle: 'College Discussion Forum',
      description: 'A web-based forum where students can post questions, share notes, and discuss topics related to different college subjects. This was a collaborative team project.',
      features: [
        'User authentication system',
        'Post and comment functionality',
        'Subject-wise discussion threads',
        'Note sharing capabilities',
      ],
      tech: ['Python', 'Django', 'SQLite', 'HTML', 'CSS'],
      icon: MessageSquare,
      color: 'from-green-500 to-teal-500',
      links: {
        github: '#',
      },
      role: 'Backend Developer - Responsible for entire backend development, including database schema design, user authentication, and logic for handling posts and comments.',
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="min-h-screen py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-16 text-center"
        >
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Projects</span>
        </motion.h2>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-gray-700 hover:border-gray-600"
              >
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${project.color} flex items-center justify-center shadow-lg`}
                      >
                        <project.icon className="text-white" size={32} />
                      </motion.div>
                      <div>
                        <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                        <p className={`text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r ${project.color}`}>
                          {project.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed">{project.description}</p>

                    {project.role && (
                      <div className="bg-gray-700/50 rounded-xl p-4">
                        <p className="text-sm text-gray-300">
                          <span className="font-semibold text-blue-400">My Role:</span> {project.role}
                        </p>
                      </div>
                    )}

                    <div className="space-y-2">
                      <h4 className="text-white font-semibold">Key Features:</h4>
                      {project.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.2 + idx * 0.1 }}
                          className="flex gap-3"
                        >
                          <div className={`w-2 h-2 mt-2 rounded-full bg-gradient-to-r ${project.color}`} />
                          <p className="text-gray-400">{feature}</p>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          whileHover={{ scale: 1.1 }}
                          className="px-4 py-2 bg-gray-700 text-gray-300 rounded-full text-sm font-medium hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-4">
                      {project.links.live && (
                        <motion.a
                          href={project.links.live}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`px-6 py-3 bg-gradient-to-r ${project.color} text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2`}
                        >
                          <ExternalLink size={20} />
                          Live Demo
                        </motion.a>
                      )}
                      <motion.a
                        href={project.links.github}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-gray-700 text-white rounded-full font-semibold hover:bg-gray-600 transition-all flex items-center gap-2"
                      >
                        <Github size={20} />
                        GitHub
                      </motion.a>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative w-full aspect-video bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl overflow-hidden shadow-2xl"
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 180, 360],
                          }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                          className={`w-32 h-32 bg-gradient-to-r ${project.color} opacity-20 rounded-full blur-3xl`}
                        />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <project.icon className="text-gray-600" size={80} />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
