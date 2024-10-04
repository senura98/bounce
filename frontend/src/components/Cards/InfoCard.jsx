import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

const InfoCard = ({ title, subtitle, description, apiUrl }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mediaType, setMediaType] = useState(null);
  const [mediaUrl, setMediaUrl] = useState(null);
  const [mediaDescription, setMediaDescription] = useState(''); // Store media description
  const [mediaTitle, setMediaTitle] = useState(''); // Store media title
  const [loading, setLoading] = useState(false); // Loading state

  // Open the modal immediately and show spinner, then load the content
  const openModal = async () => {
    setIsModalOpen(true);  // Open modal immediately
    setLoading(true);  // Start loading media
    
    try {
      const response = await axios.get(apiUrl);  // Fetch from the provided API URL
      const { url, media_type, explanation, title } = response.data;  // Destructure the media type, description, and title

      setMediaUrl(url);  // Set the media URL (image or video)
      setMediaType(media_type);  // Set the media type (image or video)
      setMediaDescription(explanation);  // Set the media description
      setMediaTitle(title);  // Set the media title
    } catch (error) {
      console.error('Failed to fetch the media:', error);
    } finally {
      setLoading(false);  // Stop loading when media is ready
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setMediaUrl(null); // Reset the media URL
    setMediaType(null); // Reset the media type
    setMediaDescription('');  // Reset the description
    setMediaTitle('');  // Reset the title
  };

  return (
    <>
      {/* Entire card is clickable */}
      <div
        className="relative bg-dark text-light p-6 rounded-lg shadow-lg cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 min-h-[250px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={openModal}  // Modal opens when the card is clicked
      >
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-lg">{subtitle}</p>

        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-75 p-4 flex items-center justify-center rounded-lg">
            <p className="text-white text-sm">{description}</p>
          </div>
        )}
      </div>

      {/* Modal opens immediately */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="NASA Media Modal"
        className="bg-dark text-light p-4 rounded-lg max-w-xl mx-auto mt-10 relative"  // Set smaller max width and height
        overlayClassName="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center"
      >
        {/* Conditionally render close button only after loading */}
        {!loading && (
          <button
            className="absolute top-4 right-4 bg-primary text-dark font-bold rounded-full px-3 py-1"
            onClick={closeModal}
          >
            X
          </button>
        )}

        <div className="flex flex-col items-center w-full overflow-auto max-h-[75vh]">  {/* Limit the height and make scrollable */}
          {/* Show spinner while loading */}
          {loading ? (
            <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
          ) : (
            <>
              {/* Display the title at the top center after loading */}
              <h2 className="text-2xl font-bold text-center mb-2">{mediaTitle || title}</h2>

              {/* Display the media */}
              {mediaType === 'image' ? (
                <img src={mediaUrl} alt={title} className="w-full h-auto rounded-lg shadow-lg max-h-[40vh]" />
              ) : mediaType === 'video' ? (
                <div className="w-full">
                  <iframe
                    className="w-full h-48 rounded-lg shadow-lg"
                    src={mediaUrl}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <p>Loading media...</p>
              )}

              {/* Justified description below the media */}
              <p className="mt-4 text-sm text-center max-w-md text-justify">{mediaDescription || description}</p>
            </>
          )}
        </div>
      </Modal>
    </>
  );
};

export default InfoCard;
