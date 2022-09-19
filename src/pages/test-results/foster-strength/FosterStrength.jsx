import React from "react";
import FosterStrengthList from "./foster-strength-list/FosterStrengthList";

const FosterStrength = () => {
  return (
    <div>
      <div className=" rounded-lg w-full font-aiaregular">
        <h1 className="font-semibold text-2xl mb-2">Foster your Strengths</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, mauris
          in consequat sit sed viverra a varius. Diam amet mattis justo, et
          aenean felis quis. In lorem at phasellus morbi ut senectus fringilla
          morbi orci.
        </p>
      </div>
      <FosterStrengthList />
    </div>
  );
};

export default FosterStrength;
