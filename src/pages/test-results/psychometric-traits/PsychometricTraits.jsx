import React from "react";
import PsychometricCard from "./PsychoMetricCard.jsx/PsychometricCard";

const PsychometricTraits = () => {
  return (
    <>
      <div className=" rounded-lg mb-5 w-full ">
        <h1 className="text-3xl mb-3 font-medium">Psychometric Traits</h1>
        <p className="aiaregular text-sm mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, mauris
          in consequat sit sed viverra a varius. Diam amet mattis justo, et
          aenean felis quis. In lorem at phasellus morbi ut senectus fringilla
          morbi orci.
        </p>
      </div>
      <div className="mb-10">
        <PsychometricCard />
        <PsychometricCard />
        <PsychometricCard />
        <PsychometricCard />
        <PsychometricCard />
      </div>
    </>
  );
};

export default PsychometricTraits;
