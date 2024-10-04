import MissionCard from "../Cards/MissionCard";
import SectionHeader from "../Subcomponents/SectionHeader";  // Import SectionHeader

const MissionSection = () => (
  <section className="p-10">
    <SectionHeader title="Our Mission" lineColor="blue-500" lineWidth="w-24" />

    <div className="flex flex-col gap-8">
      <MissionCard
        title="OUR MISSION"
        subtitle="RAPIDSCAT"
        description="Improve weather forecasting on Earth, provide cross-calibration for all international satellites..."
        imageSrc="/assets/satellite.jpg"
        imageAlt="Satellite"
        imagePosition="left"
        navigateTo="/mission/rapidscat"  // Navigate to RAPIDSCAT detail page
      />
      <MissionCard
        title="EXPLORATION"
        subtitle="MARS ROVER"
        description="Discovering the secrets of the Red Planet and searching for signs of ancient life..."
        imageSrc="/assets/mars-rover.jpg"
        imageAlt="Mars Rover"
        imagePosition="right"
        navigateTo="/mission/mars-rover"  // Navigate to MARS ROVER detail page
      />
    </div>
  </section>
);

export default MissionSection;
