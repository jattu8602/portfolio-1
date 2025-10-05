import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const achievements = [
    'Developed and implemented RESTful APIs using Java and Spring Boot for the new "User Profile" module, serving over 10,000 users.',
    'Collaborated with the frontend team to integrate APIs, ensuring seamless data flow and improving data retrieval times by 15%.',
    'Wrote unit and integration tests using JUnit and Mockito, which increased the code coverage of the module to 90% and reduced pre-deployment bugs.',
    'Participated in Agile development cycles, daily stand-up meetings, and code reviews, contributing to a collaborative team environment.',
  ];

  return (
    <section id="experience" ref={sectionRef} className="min-h-screen py-20 px-4 sm:px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-16 text-center"
        >
          Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Experience</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute left-0 sm:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-600 hidden md:block" />

          <div className="md:ml-20">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0"
                >
                  <Briefcase className="text-white" size={32} />
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    Software Development Intern
                  </h3>
                  <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold mb-3">
                    Growthify Solutions (Remote)
                  </p>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar size={18} />
                    <span className="font-medium">June 2024 - August 2024</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600" />
                    <p className="text-gray-700 leading-relaxed">{achievement}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap gap-2 mt-6"
              >
                {['Java', 'Spring Boot', 'REST APIs', 'JUnit', 'Mockito', 'Agile'].map((tech, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-medium shadow-md"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
