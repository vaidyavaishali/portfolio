import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useAnimation, AnimatePresence } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import './home.css';

const Home = () => {
  // Advanced motion values for parallax
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [0, 800], [8, -8]);
  const rotateY = useTransform(x, [0, 800], [-8, 8]);
  const controls = useAnimation();
  const containerRef = useRef(null);

  // 3D hover effect
  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  // Luxury particle system
  const particles = Array.from({ length: 45 }).map((_, i) => ({
    id: i,
    size: Math.random() * 8 + 4,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 15 + 15,
    delay: Math.random() * 8,
    opacity: Math.random() * 0.4 + 0.1,
    shape: Math.random() > 0.7 ? 'triangle' : 'circle'
  }));

  // Animate gradient background
  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        backgroundPosition: ['0% 0%', '100% 100%'],
        transition: { duration: 20, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }
      });
    };
    sequence();
  }, [controls]);

  // Luxury name hover effect
  const nameVariants = {
    normal: { 
      scale: 1,
      textShadow: "0 0 0px rgba(102, 255, 204, 0)"
    },
    hover: {
      scale: 1.03,
      textShadow: [
        "0 0 5px rgba(102, 255, 204, 0.3)",
        "0 0 15px rgba(102, 255, 204, 0.5)",
        "0 0 5px rgba(102, 255, 204, 0.3)"
      ],
      transition: { 
        duration: 1.5,
        repeat: Infinity,
        repeatType: 'reverse'
      }
    }
  };

  return (
    <div 
      className="luxury-home-container"
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      {/* Animated gradient layer */}
      <motion.div 
        className="luxury-gradient-bg"
        animate={controls}
        initial={{ backgroundPosition: '0% 0%' }}
      />

      {/* Diamond grid overlay */}
      <div className="diamond-grid-overlay">
        {Array.from({ length: 100 }).map((_, i) => (
          <motion.div
            key={i}
            className="diamond"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.03, 0],
              transition: {
                duration: Math.random() * 10 + 10,
                delay: Math.random() * 5,
                repeat: Infinity
              }
            }}
          />
        ))}
      </div>

      {/* Main content with 3D perspective */}
      <motion.div
        className="luxury-content-container"
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1000
        }}
      >
        {/* Animated header with character stagger */}
        <motion.h1 
          className="luxury-heading"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.06 }
            }
          }}
        >
          {"Hi, I'm ".split('').map((char, i) => (
            <motion.span 
              key={i}
              className="luxury-heading-char"
              variants={{
                hidden: { 
                  opacity: 0, 
                  y: 40,
                  rotateX: 90 
                },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  rotateX: 0,
                  transition: { 
                    type: 'spring',
                    damping: 12,
                    stiffness: 100
                  }
                }
              }}
            >
              {char}
            </motion.span>
          ))}
          
          <motion.span 
            className="luxury-name"
            variants={nameVariants}
            initial="normal"
            whileHover="hover"
          >
            Vaishali Vaidya
          </motion.span>
          <motion.span
            className="luxury-comma"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, type: 'spring' }}
          >
            ,
          </motion.span>
        </motion.h1>
        
        {/* Premium typing animation */}
        <motion.div 
          className="luxury-typing-container"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, type: 'spring', stiffness: 60 }}
        >
          <div className="luxury-typing-text">
            and I'm a{' '}
            <ReactTyped
              strings={[
                "Full Stack Developer.",
                "UI/UX Developer.",
                "Wordpress Developer.",
                "AI Specialist.",
                "Tech Visionary.",
                "API Developer.",
                "Software Engineer.",
              ]}
              typeSpeed={35}
              backSpeed={20}
              loop
              showCursor={true}
              cursorChar="▐"
              className="luxury-typed-text"
            />
          </div>
        </motion.div>
        
        {/* Luxury button with multiple hover effects */}
        <motion.div 
          className="luxury-button-container"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.1, type: 'spring' }}
        >
          <a href="#contact-page">
            <motion.button 
              className="luxury-button"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px -10px rgba(102, 255, 204, 0.5)"
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
              <span className="luxury-button-text">Connect with Me</span>
              <motion.span 
                className="luxury-button-arrow"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ 
                  repeat: Infinity,
                  repeatType: 'reverse',
                  duration: 0.8
                }}
              >
                →
              </motion.span>
              <div className="luxury-button-hover-effect" />
              <div className="luxury-button-edge-glow" />
            </motion.button>
          </a>
        </motion.div>
      </motion.div>

      {/* Premium particle system */}
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className={`luxury-particle ${particle.shape}`}
            initial={{
              x: `${particle.x}vw`,
              y: `${particle.y}vh`,
              opacity: 0,
              rotate: 0
            }}
            animate={{
              y: [`${particle.y}vh`, `${particle.y - 120}vh`],
              x: [`${particle.x}vw`, `${particle.x + (Math.random() * 30 - 15)}vw`],
              opacity: [0, particle.opacity, 0],
              rotate: 360,
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "linear"
            }}
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
          />
        ))}
      </AnimatePresence>

      {/* Luxury floating elements */}
      <div className="luxury-floating-elements">
        <motion.div
          className="luxury-orb"
          initial={{ scale: 0 }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="luxury-floating-shape triangle"
          animate={{
            y: ["0vh", "-50vh"],
            x: ["0vw", "10vw"],
            rotate: [0, 180],
            opacity: [0, 0.4, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            delay: 3,
            ease: "linear"
          }}
        />
        <motion.div
          className="luxury-floating-shape diamond"
          animate={{
            y: ["100vh", "-50vh"],
            x: ["30vw", "40vw"],
            rotate: [0, 360],
            opacity: [0, 0.3, 0]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </div>
  );
}

export default Home;