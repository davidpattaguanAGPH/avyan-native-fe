import React from "react";
import ActiveExplorer from "../active-explorer/ActiveExplorer";
import FosterStrength from "../foster-strength/FosterStrength";
import PsychometricTraits from "../psychometric-traits/PsychometricTraits";
import ExploreListResult from "./explore-result-list/ExploreResultList";
import ExploreSideBar from "./explore-sidebar/ExploreSideBar";

const ExploreResult = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-3">
        <ExploreSideBar />
        <div className="md:col-span-3 mx-5">
          <ExploreListResult />
          <PsychometricTraits />
          <ActiveExplorer />
          <FosterStrength />
        </div>
      </div>
    </div>
  );
};

export default ExploreResult;
