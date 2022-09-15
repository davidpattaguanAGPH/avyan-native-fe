import React from "react";
import PsychometricCard from "./PsychoMetricCard.jsx/PsychometricCard";

const PsychometricTraits = () => {
  return (
    <div className="bg-white p-10 shadow-md mx-16 mb-5">
      <h1>Psychometric Traits</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, mauris
        in consequat sit sed viverra a varius. Diam amet mattis justo, et aenean
        felis quis. In lorem at phasellus morbi ut senectus fringilla morbi
        orci.
      </p>

      <div>
        <PsychometricCard />
        <PsychometricCard />
        <PsychometricCard />
        <PsychometricCard />
        <PsychometricCard />
      </div>
    </div>
  );
};

export default PsychometricTraits;
