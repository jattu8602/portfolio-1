import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  return (
    <section id="education" ref={sectionRef} className="min-h-screen py-20 px-4 sm:px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-16 text-center"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Education</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 sm:p-12 shadow-xl hover:shadow-2xl transition-all border-2 border-blue-100"
          >
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-lg flex-shrink-0"
              >
                <GraduationCap className="text-white" size={48} />
              </motion.div>

              <div className="flex-1 space-y-6">
                <div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                    Bachelor of Technology (B.Tech)
                  </h3>
                  <p className="text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold mb-2">
                    Computer Science & Engineering
                  </p>
                  <p className="text-lg text-gray-700 font-medium">
                    University Institute of Technology, RGPV, Bhopal
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 }}
                    className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-md"
                  >
                    <Calendar className="text-blue-600" size={24} />
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Duration</p>
                      <p className="text-gray-900 font-semibold">2021 - 2025</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 }}
                    className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-md"
                  >
                    <MapPin className="text-purple-600" size={24} />
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Location</p>
                      <p className="text-gray-900 font-semibold">Bhopal, MP</p>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 font-medium mb-1">CGPA</p>
                      <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                        8.5
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500 font-medium mb-1">Out of</p>
                      <p className="text-4xl font-bold text-gray-400">10.0</p>
                    </div>
                  </div>
                  <div className="mt-4 bg-gray-200 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: '85%' } : {}}
                      transition={{ duration: 1, delay: 0.8 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap gap-3"
                >
                  <span className="text-sm text-gray-600">
                    <span className="font-semibold">Core Subjects:</span>
                  </span>
                  {['Data Structures', 'Algorithms', 'DBMS', 'Operating Systems', 'Computer Networks', 'OOP'].map(
                    (subject, index) => (
                      <motion.span
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-medium shadow-md"
                      >
                        {subject}
                      </motion.span>
                    )
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
