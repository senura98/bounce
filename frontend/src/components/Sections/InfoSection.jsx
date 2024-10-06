import React from 'react';
import InfoCard from '../Cards/Infocard'; 
import SectionHeader from '../Subcomponents/SectionHeader';  

const InfoSection = () => {
  return (
    <section className="p-10">
      <SectionHeader title="Orbital Information" lineColor="blue-500" lineWidth="w-24" /> 

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* First InfoCard fetches APOD data */}
        <InfoCard 
          title="LEO" 
          subtitle="300-1500 KM" 
          description="Low Earth Orbit" 
          apiUrl="http://localhost:8080/apod/get-info" 
        />

        <InfoCard 
          title="HI - SPEED" 
          subtitle="22,236 MIL" 
          description="Orbit Geostationer" 
          apiUrl="http://localhost:8080/api/info/some-other-api"  
        />

        <InfoCard 
          title="EARTH" 
          subtitle="365 DAY" 
          description="Orbit Period" 
          apiUrl="http://localhost:8080/api/info/another-api"  
        />
      </div>
    </section>
  );
};

export default InfoSection;
