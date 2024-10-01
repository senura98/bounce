import React from 'react';
import MissionCard from "../Cards/MissionCard";
import SectionHeader from "../Subcomponents/SectionHeader";  
import satelliteImage from '../../assets/satellite.jpg'; 
import marssatelliteImage from '../../assets/mars.jpg'; 


const MissionSection = () => (
  <section className="p-10">

    <SectionHeader title="Our Mission" lineColor="blue-500" lineWidth="w-24" />

    <div className="flex flex-col gap-8">  {/* Flex column layout */}
      <MissionCard
        title="OUR MISSION"
        subtitle="RAPIDSCAT"
        description="Improve weather forecasting on Earth, provide cross-calibration for all international satellites..."
        imageSrc={satelliteImage}
        imageAlt="Satellite"
        imagePosition="left"
      />

      <MissionCard
        title="EXPLORATION"
        subtitle="MARS ROVER"
        description="Discovering the secrets of the Red Planet and searching for signs of ancient life..."
        imageSrc={marssatelliteImage}
        imageAlt="Mars Rover"
        imagePosition="right"
      />
    </div>
  </section>
);

export default MissionSection;
