import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import edtech from '../assets/futuristic-portrait-young-girl-with-high-tech.jpg';
import ct from '../assets/empty-town-square.jpg';
import flyaway from '../assets/construction-building-architecture-concept.jpg';
import color from '../assets/colorpng.png';

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const sliderRef = useRef(null);

  const projects = [
    {
      title: "Techmomentum Website",
      description: "Developed Interactive SEO-friendly Edtech Website With CMS",
      link: "https://techmomentum-psi.vercel.app/",
      image: edtech,
      tech: [ "Next.Js", "MongoDB", "Tailwind"]
    },
    {
      title: "Conscientious Technology Website",
      description: "Developed Responsive UI With CMS for managing Content",
      link: "https://conscientious-technology.vercel.app",
      image: ct,
      tech: ["React.js", "Node.js", "CMS", "Material UI", "Tailwind"]
    },
    {
      title: "Flyaway Airport Parking",
      description: "Airport Car Parking Management System Web App",
      link: "https://demoairportparking.netlify.app",
      image: flyaway,
      tech: ["React", "NodeJS", "MongoDb", "Framer Motion", "Paypal"]
    },
    {
      title: "Color Prediction Game",
      description: "Developed Interactive Color Prediction Game",
      link: "https://color-prediction-six.vercel.app/",
      image: color,
      tech: ["React Vite", "NodeJs", "Express", "MongoDB"]
    },
    {
      title: "E dashboard",
      description: "Developed Demo of Dashboard for E-commerce Using Live Api",
      link: "https://edashboard-nine.vercel.app/",
      image: color,
      tech: ["React", "Nodejs","React query", "Mapbox"]
    },
    {
      title: "Mines Blast Game",
      description: "Developed a user interactive mines game where you can play and challenge yourself",
      link: "https://www.98fastbet.com/casino/mines",
      image: color,
      tech: ["React","React query", "Tailwind CSS"]
    },
    {
      title: "Cricket Betting Game",
      description: "Developed Cricket Player Betting Game with live API",
      link: "https://www.98fastbet.com/casino/mines",
      image: color,
      tech: ["React", "Nodejs","Styled Component", "MongoDB", "Socket.io" ]
    },
    {
      title: "Titli Patta Game",
      description: "Created a game where images are displayed continuously, allowing users to select an image card to win.",
      link: "https://www.98fastbet.com/casino/titli",
      image: color,
      tech: ["React", "Nodejs","Styled Component", "MongoDB", "Socket.io" ]
    },
    {
      title: "Kudo Spot",
      description: "Developed a web app for users to vote on their favorite music artists and tracks",
      link: "https://www.98fastbet.com/casino/titli",
      image: color,
      tech: ["React", "Nodejs","Styled Component", "MongoDB", "Socket.io" ]
    },
  ];

  // Custom Arrow Components
  const NextArrow = ({ onClick }) => {
    return (
      <motion.div
        className="absolute right-[-50px] top-1/2 -translate-y-1/2 z-10 cursor-pointer hidden lg:block"
        onClick={onClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="w-12 h-12 rounded-full bg-[#66ffcc]/10 border border-[#66ffcc]/30 flex items-center justify-center hover:bg-[#66ffcc]/20 transition-all">
          <FaArrowRight className="text-[#66ffcc] text-lg" />
        </div>
      </motion.div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <motion.div
        className="absolute left-[-50px] top-1/2 -translate-y-1/2 z-10 cursor-pointer hidden lg:block"
        onClick={onClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="w-6 lg:w-12 h-6 lg:h-12 rounded-full bg-[#66ffcc]/10 border border-[#66ffcc]/30 flex items-center justify-center hover:bg-[#66ffcc]/20 transition-all">
          <FaArrowLeft className="text-[#66ffcc] text-sm lg:text-lg" />
        </div>
      </motion.div>
    );
  };

  // Slider settings
  const settings = {
    dots: false,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true
        }
      }
    ]
  };

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

  const imageHover = {
    scale: 1.03,
    boxShadow: "0 20px 40px -10px rgba(102, 255, 204, 0.3)",
    transition: { type: 'spring', stiffness: 300 }
  };

  return (
    <motion.div
      className="bg-[#0a0c10] text-white pt-5 md:pt-20 pb-10 overflow-hidden relative"
      id="my-work-page"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={container}
      ref={ref}
    >
      <div className="container mx-auto px-4 w-[95%] lg:w-[85%] relative">
        <motion.h2
          className="text-4xl lg:text-6xl font-sans font-normal text-left mb-16"
          variants={item}
        >
          My <span className="text-[#66ffcc]">Best</span> Work
        </motion.h2>

        {/* Slider Container */}
        <motion.div variants={container} className="portfolio-slider-container relative">
          <Slider {...settings} ref={sliderRef}>
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group relative px-2 h-full"
                variants={item}
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                {/* Project card with fixed height */}
                <div className="relative z-10 h-auto md:h-[450px] flex flex-col bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-xl shadow-2xl overflow-hidden border border-[#66ffcc]/20 transition-all duration-300 group-hover:border-[#66ffcc]/50">
                  {/* Image container with fixed aspect ratio */}
                  <div className="relative h-44 overflow-hidden flex-shrink-0">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
                      whileHover={imageHover}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content area */}
                  <div className="p-6 flex-grow flex flex-col">
                    <motion.h3
                      className="text-2xl font-semibold mb-3 text-[#e8f9f3]"
                      whileHover={{ color: "#66ffcc" }}
                    >
                      {project.title}
                    </motion.h3>

                    <p className="text-[#cbd5e1] mb-5 leading-relaxed flex-grow">
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <motion.span
                          key={i}
                          className="px-3 py-1 bg-[#66ffcc]/10 rounded-full text-sm text-[#66ffcc]"
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: "#66ffcc",
                            color: "#0a0c10"
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#66ffcc] hover:text-[#b3ff66] transition-colors mt-auto"
                      whileHover={{ x: 5 }}
                    >
                      View Project
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </motion.a>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-[#66ffcc] to-[#b3ff66] opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300 z-0" />
                <div className="absolute -inset-px rounded-xl border border-[#66ffcc]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
              </motion.div>
            ))}
          </Slider>
        </motion.div>
      </div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-[#66ffcc]/10 blur-xl"
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
        className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-[#b3ff66]/10 blur-xl"
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
    </motion.div>
  );
};

export default PortfolioSection;