import React, { useState } from "react";
import "../assets/css/styles.css";

const Gallery = ({ items }) => {

  return (
    <div>
      <div className="gallery">
        {items.map((item) => (
          <a key={item.id} href={item.image} target="_blank" rel="noopener noreferrer">
            <img src={item.image} alt={item.title} className="gallery-img" />
          </a>
        ))}
      </div>
    </div>
  );
  
};

export default Gallery;
