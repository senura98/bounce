import InfoCard from "./Infocard";

const InfoSection = () => (
    <section className="flex justify-between space-x-4 p-10">
      <InfoCard title="LEO" subtitle="300-1500 KM" description="Low Earth Orbit" />
      <InfoCard title="HI - SPEED" subtitle="22,236 MIL" description="Orbit Geostationer" />
      <InfoCard title="EARTH" subtitle="365 DAY" description="Orbit Period" />
    </section>
  );

export default InfoSection