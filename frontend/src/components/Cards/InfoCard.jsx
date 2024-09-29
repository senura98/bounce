const InfoCard = ({ title, subtitle, description }) => (
    <div className="bg-dark text-light p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="text-lg mt-2">{subtitle}</p>
      <p className="mt-4">{description}</p>
    </div>
  );

export default InfoCard;