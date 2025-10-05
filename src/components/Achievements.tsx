import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, Code, Award, Zap } from 'lucide-react';

const Achievements = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const achievements = [
    {
      title: 'GATE 2025',
      description: 'Secured an All India Rank (AIR) of 2145 in Computer Science & IT',
      icon: Trophy,
      color: 'from-yellow-500 to-orange-500',
      badge: 'AIR 2145',
    },
    {
      title: 'LeetCode Knight',
      description: '500+ problems solved with a contest rating of 1750',
      icon: Code,
      color: 'from-orange-500 to-red-500',
      badge: 'Rating 1750',
    },
    {
      title: 'CodeChef 4-Star',
      description: 'Achieved a 4-Star rating with a maximum rating of 1820',
      icon: Award,
      color: 'from-blue-500 to-cyan-500',
      badge: 'Max 1820',
    },
    {
      title: 'Smart India Hackathon 2024',
      description: 'Reached the Finals of the world\'s biggest open innovation model, building a web application for digital management of village-level services',
      icon: Zap,
      color: 'from-purple-500 to-pink-500',
      badge: 'Finalist',
    },
  ];

  return (
    <section id="achievements" ref={sectionRef} className="min-h-screen py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-16 text-center"
        >
          Achievements & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Recognition</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300" />

              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all overflow-hidden">
                <motion.div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${achievement.color} opacity-10 rounded-full blur-2xl`}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${achievement.color} flex items-center justify-center shadow-lg`}
                    >
                      <achievement.icon className="text-white" size={32} />
                    </motion.div>

                    <motion.span
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.15 + 0.3 }}
                      className={`px-4 py-2 bg-gradient-to-r ${achievement.color} text-white rounded-full text-sm font-bold shadow-md`}
                    >
                      {achievement.badge}
                    </motion.span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{achievement.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-8 shadow-2xl">
            <p className="text-white text-lg sm:text-xl font-semibold mb-2">
              Consistent Problem Solver
            </p>
            <p className="text-blue-100">
              Actively practicing on competitive programming platforms
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
