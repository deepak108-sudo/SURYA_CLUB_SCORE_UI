// src/components/GameCard.jsx
import React from "react";

const GameCard = ({ game, onClick }) => {
  const { title, webp, jpg } = game;
  return (
    <div
      className="relative bg-white
                      rounded-3xl shadow-lg shadow-teal-950/70 lg:animate-none           // lg disables pulse
                      lg:hover:scale-105        // lg hover scale hover:scale-110 transition-transform duration-500 overflow-hidden animate-scalePulse" onClick={()=> onClick(game)}
    >
      <picture>
        <source srcSet={webp} type="image/webp" />
        <source srcSet={jpg} type="image/jpeg" />
        <img src={jpg} alt={title} className="w-full h-48 object-cover " />

        <img
          src={jpg}
          alt={title}
          className="absolute bottom-0 left-0 w-full h-10 object-cover blur"
        />
      </picture>
      <div className="bottom-0 left-5 absolute">
        <h2 className="font-brave81 text-xl font-semibold text-white mb-2 tracking-widest">
          {title}
        </h2>
        {/* <p className="text-gray-600 text-sm">{description}</p> */}
      </div>
    </div>
  );
};

export default GameCard;
