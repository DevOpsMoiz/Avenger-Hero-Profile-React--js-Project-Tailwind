import React, { useState, useEffect } from "react";
import data from "../Data/data.js";
import "./Details.css"; // Import the CSS for transitions

const Details = ({ index }) => {
  const [fade, setFade] = useState(false);
  const [details, setDetails] = useState(data[index]);

  useEffect(() => {
    setFade(true); // Trigger fade out
    const timer = setTimeout(() => {
      setDetails(data[index]); // Update details after fade out
      setFade(false); // Trigger fade in
    }, 300); // Match with CSS transition duration

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [index]);

  return (
    <div className="flex w-full h-full overflow-hidden shadow-inner shadow-white/40">
      <div className="container w-full h-full flex items-center justify-evenly text-2xl flex-col">
        {/* Left Container */}
        <div className="left w-2/6 h-2/6">
          <img 
            className={`w-full h-full rounded-full transition-opacity ${fade ? "opacity-0" : "opacity-100"}`} 
            src={details.img} 
            alt={details.name} 
          />
        </div>

        {/* Right Container */}
        <div className={`right w-full px-8 space-y-4 transition-opacity ${fade ? "opacity-0" : "opacity-100"}`}>
          {/* Name */}
          <div className="name">
            <span>Name: </span>
            <span>{details.name}</span>
          </div>
          {/* Costume */}
          <div className="costume">
            <span>Costume:</span>
            <span>{details.costume}</span>
          </div>
          {/* Creature */}
          <div className="creature">
            <span>Creature:</span>
            <span>{details.creature}</span>
          </div>
          {/* Speciality */}
          <div className="speciality">
            <span>Speciality:</span>
            <span>{details.speciality}</span>
          </div>
          {/* SuperPower */}
          <div className="superPower">
            <span>SuperPower:</span>
            <span>{details.superPower[0]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
