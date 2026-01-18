import React from 'react';

export const ShaminDisplay = () => {
  const cards = Array.from({ length: 29 });

  return (
    <div className="shamin-container">
      {cards.map((_, i) => (
        <div className="shamin-card" key={i} />
      ))}
    </div>
  );
};

export default ShaminDisplay;