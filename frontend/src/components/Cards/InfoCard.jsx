import React, { useState } from 'react';
import Modal from 'react-modal';

const InfoCard = ({ title, subtitle, description, fetchImage }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);

  const openModal = async () => {
    const image = await fetchImage(); 
    setImageUrl(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="relative bg-dark text-light p-6 rounded-lg shadow-lg cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 min-h-[250px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={openModal}
      >
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-lg">{subtitle}</p>

        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-75 p-4 flex items-center justify-center rounded-lg">
            <p className="text-white text-sm">{description}</p>
          </div>
        )}
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="NASA Image Modal"
        className="bg-dark text-light p-4 rounded-lg max-w-lg mx-auto mt-10"
        overlayClassName="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center"
      >
        <div className="flex flex-col items-center">
          {imageUrl ? (
            <img src={imageUrl} alt={title} className="w-full rounded-lg shadow-lg" />
          ) : (
            <p>Loading image...</p>
          )}
          <button
            className="mt-4 bg-primary text-dark font-semibold py-2 px-6 rounded-lg hover:bg-accent"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </Modal>
    </>
  );
};

export default InfoCard;
