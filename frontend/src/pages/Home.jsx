import React from 'react';
import Navbar from '../components/Navbar';      
import Hero from '../components/Hero';         
import InfoSection from '../components/Cards/InfoSection'; 
// import MissionSection from '../components/MissionSection'; 
import Footer from '../components/Footer';     

const Home = () => {
  return (
    <div>
      <Navbar />           
      <Hero />             
      <InfoSection />      
      {/* <MissionSection />    */}
      <Footer />           
    </div>
  );
};

export default Home;