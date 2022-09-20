import React from "react";
import ActiveExplorer from "../active-explorer/ActiveExplorer";
import FosterStrength from "../foster-strength/FosterStrength";
import PsychometricTraits from "../psychometric-traits/PsychometricTraits";
import ExploreListResult from "./explore-result-list/ExploreResultList";
import ExploreSideBar from "./explore-sidebar/ExploreSideBar";

const ExploreResult = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div class="grid grid-cols-12 gap-3">
        <div className="col-span-12 sm:col-span-4 lg:col-span-3">
          <ExploreSideBar />
        </div>

        <div className="col-span-12 sm:col-span-8 lg:col-span-9 px-5  w-full mx-auto">
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
