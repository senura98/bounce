import React from 'react';

const SectionHeader = ({ title, lineColor = "blue-500", lineWidth = "w-16" }) => {
  return (
    <div className="mb-8">
      <h2 className="text-4xl font-bold text-white text-left">{title}</h2> {/* Align to left */}
      <hr className={`border-t-4 mt-2 ${lineWidth} border-blue-500`} />  {/* Horizontal line aligned left */}
    </div>
  );
};

export default SectionHeader;
