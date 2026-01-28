import React from 'react';

export const ShaminDisplay = () => {
  const cards = Array.from({ length: 29 });

  return (
    <div className="shamin-container flex flex-wrap gap-12 mt-7 ml-4">
      {cards.map((_, i) => (
        <div className="shamin-card w-50 h-77 bg-gray-200" key={i} />
      ))}
    </div>
  );
};

export default ShaminDisplay;