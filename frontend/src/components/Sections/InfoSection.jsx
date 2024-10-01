import React from 'react';
import InfoCard from '../Cards/InfoCard'; // Assuming InfoCard is a reusable component
import SectionHeader from '../Subcomponents/SectionHeader';  // Import SectionHeader

const InfoSection = () => {
  return (
    <section className="p-10">
      <SectionHeader title="Orbital Information" lineColor="blue-500" lineWidth="w-24" /> 

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <InfoCard 
          title="LEO" 
          subtitle="300-1500 KM" 
          description="Low Earth Orbit" 
        />
        <InfoCard 
          title="HI - SPEED" 
          subtitle="22,236 MIL" 
          description="Orbit Geostationer" 
        />
        <InfoCard 
          title="EARTH" 
          subtitle="365 DAY" 
          description="Orbit Period" 
        />
      </div>
    </section>
  );
};

export default InfoSection;
