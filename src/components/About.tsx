import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  useEffect(() => {
    if (sectionRef.current) {
      gsap.from('.about-text', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 50,
        duration: 1,
      });
    }
  }, []);

  return (
    <section id="about" ref={sectionRef} className="min-h-screen py-20 px-4 sm:px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-12 text-center"
        >
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl"
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="absolute inset-4 bg-gray-100 rounded-3xl flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-8xl font-bold text-gray-400"
                  >
                    AV
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="about-text space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed"
          >
            <p>
              My journey into the world of technology began with a simple <span className="font-semibold text-blue-600">"Hello, World!"</span> program in C++. That moment sparked a curiosity that has driven me ever since. I am a recent graduate with a B.Tech in Computer Science from the <span className="font-semibold">University Institute of Technology, RGPV, Bhopal</span>.
            </p>

            <p>
              Throughout my degree, I've developed a strong foundation in Data Structures, Algorithms, and Object-Oriented Programming. I enjoy diving deep into how things work, which led me to focus on backend development. During my internship at <span className="font-semibold text-purple-600">Growthify Solutions</span>, I had the opportunity to build and deploy RESTful APIs using Spring Boot, which solidified my interest in creating robust server-side applications.
            </p>

            <p>
              I am a dedicated problem-solver, consistently practicing on platforms like <span className="font-semibold">LeetCode</span> and <span className="font-semibold">CodeChef</span>. I'm now eager to apply my skills and passion to a challenging full-time role as a Software Development Engineer, where I can contribute to meaningful projects and continue to learn from experienced professionals.
            </p>

            <motion.div
              className="flex flex-wrap gap-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              <div className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-semibold shadow-lg">
                500+ LeetCode Problems
              </div>
              <div className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full font-semibold shadow-lg">
                4-Star CodeChef
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
