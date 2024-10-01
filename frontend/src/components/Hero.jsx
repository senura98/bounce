import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../assets/earth.jpg';

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,  // Stagger each child animation by 0.1 seconds
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  const [animationKey, setAnimationKey] = useState(0); // To re-trigger animation at regular intervals

  // Split the text into individual letters
  const title = "DISCOVER THE SPACE";
  const titleArray = title.split("");

  // Set an interval to trigger the animation regularly
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey(prev => prev + 1);  // Increment the key to reset the animation
    }, 5000);  // Change the interval time as per your requirement (5000ms = 5 seconds)

    return () => clearInterval(interval);  // Cleanup interval on unmount
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col justify-end items-start text-light bg-cover bg-center min-h-screen p-10"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Staggered Letter Animation */}
      <motion.h1
        key={animationKey}  // Changing key to reset animation
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-6xl font-bold md:text-7xl lg:text-8xl flex"
      >
        {titleArray.map((letter, index) => (
          <motion.span key={index} variants={letterVariants}>
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.h1>

      {/* Subtitle */}
      <p className="mt-4 text-lg md:text-xl lg:text-2xl max-w-xl">
        Reporting from the NASA page, a satellite is an object that orbits or surrounds another object in space...
      </p>

      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="mt-6 bg-primary text-dark font-semibold py-2 px-6 rounded-lg hover:bg-accent"
      >
        Get Started
      </motion.button>
    </motion.section>
  );
};

export default Hero;
