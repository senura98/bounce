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
          title="APOD" 
          subtitle="The NASA APOD (Astronomy Picture of the Day) API is a publicly accessible service provided by NASA that delivers daily images or photographs of astronomical objects or phenomena, along with brief descriptions." 
          description="Astronomy Picture of the Day" 
          apiUrl="https://bounce-backend-d9ms.onrender.com/apod/get-info" 
        />

        <InfoCard 
          title="CNEAS"
          subtitle="Solar System Dynamics is the field of astronomy that studies the gravitational interactions, orbital mechanics, and physical processes that govern the motion and evolution of objects in the Solar System. This includes planets, moons, asteroids, comets, and other smaller celestial bodies." 
          description="Solar System Dynamics" 
          apiUrl="https://bounce-backend-d9ms.onrender.com/api/info/some-other-api"  
        />

        <InfoCard 
          title="MARS ROVER" 
          subtitle="The Mars Rover Pictures API, provided by NASA, offers access to images taken by Mars rovers such as Curiosity, Opportunity, Perseverance, and Spirit. These rovers are equipped with advanced cameras and scientific instruments to capture high-resolution images of the Martian surface, terrain, and atmosphere as part of their exploration missions." 
          description="Mars Rover Pictures                                                                          " 
          apiUrl="https://bounce-backend-d9ms.onrender.com/api/info/another-api"  
        />
      </div>
    </section>
  );
};

export default InfoSection;
