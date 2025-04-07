import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const education = [
    {
      title: "Full Stack Development",
      institution: "10x Academy",
      year: "2023-2024",
      description: "Intensive training in modern web development technologies"
    },
    {
      title: "Master of Science",
      institution: "Mathematics",
      year: "2021-2023",
      description: "Specialized in advanced mathematical theories and applications"
    },
    {
      title: "Bachelor of Science",
      institution: "Maths & Computer Science",
      year: "2018-2021",
      description: "Dual major with focus on computational mathematics"
    }
  ];

  const skills = [
    { name: "JavaScript", level: 90, category: "Frontend" },
    { name: "React.js", level: 90, category: "Frontend" },
    { name: "Redux", level: 85, category: "Frontend" },
    { name: "Node.js", level: 80, category: "Backend" },
    { name: "Next.js", level: 85, category: "Fullstack" },
    { name: "MongoDB", level: 85, category: "Database" },
    { name: "MySQL", level: 80, category: "Database" },
    { name: "TailwindCSS", level: 90, category: "Frontend" },
    { name: "Bootstrap", level: 85, category: "Frontend" },
    { name: "WordPress", level: 75, category: "CMS" }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const progressBar = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: { duration: 1.5, ease: "easeInOut" }
    })
  };

  return (
    <motion.div 
      className="bg-[#0a0c10] text-[#e8f9f3] min-h-screen py-10 md:py-24 relative overflow-hidden"
      id='skills-page'
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={container}
      ref={ref}
    >
      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-[#66ffcc]/10 blur-xl"
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-32 h-32 rounded-full bg-[#b3ff66]/10 blur-xl"
        animate={{
          y: [0, 30, 0],
          x: [0, -15, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <div className="w-[90%] lg:w-[80%] mx-auto relative z-10">
        <motion.h2 
          className="text-5xl lg:text-7xl font-serif mb-16 bg-gradient-to-r from-[#66ffcc] to-[#b3ff66] bg-clip-text text-transparent"
          variants={item}
        >
          Credentials
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Education Section */}
          <motion.div 
            className="w-full lg:w-[40%]"
            variants={container}
          >
            <motion.h3 
              className="text-3xl lg:text-4xl mb-8 text-[#66ffcc] font-medium"
              variants={item}
            >
              Education
            </motion.h3>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div 
                  key={index}
                  className="relative pl-8 border-l-2 border-[#66ffcc]/30 group"
                  variants={item}
                  whileHover={{ x: 5 }}
                >
                  <div className="absolute left-0 w-4 h-4 rounded-full bg-[#66ffcc] transform -translate-x-1/2 top-1 group-hover:scale-125 transition-transform" />
                  <h4 className="text-2xl font-medium mb-1">{edu.title}</h4>
                  <p className="text-xl text-[#66ffcc] mb-2">{edu.institution} • {edu.year}</p>
                  <p className="text-[#94a3b8]">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div 
            className="w-full lg:w-[60%]"
            variants={container}
          >
            <motion.h3 
              className="text-3xl lg:text-4xl mb-8 text-[#66ffcc] font-medium"
              variants={item}
            >
              Skills & Expertise
            </motion.h3>

            <div className="space-y-8">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  className="group"
                  variants={item}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-lg font-medium">{skill.name}</span>
                    <span className="text-[#66ffcc]">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-[#1e293b] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#66ffcc] to-[#b3ff66]"
                      variants={progressBar}
                      custom={skill.level}
                      initial="hidden"
                      animate="visible"
                    />
                  </div>
                  <div className="mt-1 text-right text-xs text-[#94a3b8]">
                    {skill.category}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;