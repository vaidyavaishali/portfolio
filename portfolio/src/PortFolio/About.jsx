import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import aboutus1 from '../assets/about1.png';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: 'spring', stiffness: 50 }
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 20px 40px -10px rgba(102, 255, 204, 0.3)",
      transition: { type: 'spring', stiffness: 300 }
    }
  };

  return (
    <motion.div 
      className="bg-[#0a0c10] text-[#e8f9f3] text-left py-8 px-6 overflow-hidden"
      id='about-page'
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      ref={ref}
    >
      {/* About Section */}
      <div className="w-[95%] lg:w-[85%] mx-auto">
        <motion.h2 
          className="text-4xl font-medium text-[#66ffcc] mb-6"
          variants={itemVariants}
        >
          About Vaishali Vaidya
        </motion.h2>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Text Section */}
          <motion.div 
            className="flex-1 text-lg md:text-xl font-mono"
            variants={containerVariants}
          >
            <motion.p className="mb-6 leading-relaxed" variants={itemVariants}>
              I'm a dedicated <span className="text-[#66ffcc] font-semibold">MERN stack developer</span> with a passion for crafting impactful web solutions. With expertise in MongoDB, Express.js, React.js, and Node.js, I thrive on turning ideas into reality. Driven by a relentless pursuit of excellence, I embrace challenges as opportunities for growth.
            </motion.p>
            
            <motion.p className="leading-relaxed" variants={itemVariants}>
              I'm committed to <span className="text-[#b3ff66] font-semibold">continuous learning</span>, staying updated on the latest technologies and best practices to deliver cutting-edge solutions.
            </motion.p>

            {/* Animated Skills Tags */}
            <motion.div 
              className="mt-8 flex flex-wrap gap-3"
              variants={itemVariants}
            >
              {['JavaScript', 'React', 'Node.js', "Next.Js",  'Express', 'MongoDB', 'Tailwind',"Wordpress"].map((skill, i) => (
                <motion.span
                  key={i}
                  className="px-4 py-2 bg-[#0f172a] rounded-full text-sm font-medium"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "#1e293b",
                    color: "#66ffcc"
                  }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div 
            className="mt-7 lg:mt-0 mx-auto h-[400px] flex-1 flex justify-center items-center relative"
            variants={itemVariants}
          >
            <motion.div
              className="absolute inset-0 bg-[#66ffcc] rounded-lg opacity-10 blur-xl"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.1, 0.15, 0.1]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.img
              src={aboutus1}
              alt="Coding Workspace"
              className="rounded-lg shadow-lg mx-auto h-[90%] w-full object-cover relative z-10 border-2 border-[#66ffcc]/30"
              variants={imageVariants}
              whileHover="hover"
            />

            {/* Floating elements */}
            <motion.div
              className="absolute -bottom-5 -left-5 w-20 h-20 bg-[#66ffcc]/10 rounded-full z-0"
              animate={{
                y: [0, -15, 0],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -top-5 -right-5 w-16 h-16 bg-[#b3ff66]/10 rounded-full z-0"
              animate={{
                y: [0, 10, 0],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.div>
        </div>

        {/* Animated divider */}
        <motion.div 
          className="mt-16 h-px bg-gradient-to-r from-transparent via-[#66ffcc] to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 1.5, ease: "circOut" }}
        />
      </div>
    </motion.div>
  );
};

export default About;