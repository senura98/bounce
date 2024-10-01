import React from 'react';
import { motion } from 'framer-motion';

const MissionCard = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  imagePosition = 'left', 
}) => {

  const isImageLeft = imagePosition === 'left';

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="p-10 bg-dark text-light flex flex-col md:flex-row "
    >
      {isImageLeft && (
        <div className="w-full md:w-1/2">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      )}

      <div className="w-full md:w-1/2 md:ml-8 md:mr-8 text-center md:text-left mt-6 md:mt-0">
        <h2 className="text-4xl font-bold">{title}</h2>
        <h3 className="text-3xl font-semibold mt-2">{subtitle}</h3>
        <p className="mt-4 text-lg">{description}</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-6 bg-primary text-dark font-semibold py-2 px-6 rounded-lg hover:bg-accent"
        >
          View All
        </motion.button>
      </div>

      {!isImageLeft && (
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      )}
    </motion.section>
  );
};

export default MissionCard;
