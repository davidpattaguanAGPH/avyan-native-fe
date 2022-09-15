import React from "react";
import PsychometricTraits from "../psychometric-traits/PsychometricTraits";
import ExploreListResult from "./explore-result-list/ExploreResultList";
import ExploreSideBar from "./explore-sidebar/ExploreSideBar";

const ExploreResult = () => {
  return (
    <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
      <div class="grid md:grid-cols-4 gap-3">
        <div classNAme="p-4">
          <ExploreSideBar />
        </div>
        <div className="md:col-span-3 flex flex-col">
          <ExploreListResult />
          <PsychometricTraits />
        </div>
      </div>
    </div>
  );
};

export default ExploreResult;
