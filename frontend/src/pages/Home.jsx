import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from '../components/Hero';
import NavBar from '../components/Hero';
import InfoSection from '../components/Sections/InfoSection';
import MissionSection from '../components/Sections/MissionSection';
import Footer from '../components/Footer';

const Home = () => {
  const { scrollYProgress } = useScroll();  // Use Framer Motion's scroll hook
  
  // Use scroll position to control opacity of other sections
  const infoOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);  // InfoSection fades in from 10% to 30% scroll
  const missionOpacity = useTransform(scrollYProgress, [0.35, 0.55], [0, 1]);  // MissionSection fades in from 35% to 55% scroll
  const footerOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);  // Footer fades in from 60% to 80% scroll

  return (
    <div className="bg-gradient-to-b from-black via-black to-[#020624] text-white min-h-screen overflow-hidden">
      <Hero />  {/* Hero section is full screen by default */}
      
      {/* Info Section appears after scrolling down */}
      <motion.div style={{ opacity: infoOpacity }}>
        <InfoSection />
      </motion.div>
      
      {/* Mission Section fades in next */}
      <motion.div style={{ opacity: missionOpacity }}>
        <MissionSection />
      </motion.div>
      
      {/* Footer fades in last */}
      <motion.div style={{ opacity: footerOpacity }}>
        <Footer />
      </motion.div>
    </div>
  );
};

export default Home;
