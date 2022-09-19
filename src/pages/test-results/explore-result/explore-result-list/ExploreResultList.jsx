import React from "react";
import ExploreResultListItem from "./explore-result-listitem/ExploreResultListItem";

const ExploreListResult = () => {
  return (
    <div className="bg-white md:px-16 md:py-5 rounded-sm mb-10">
      <ExploreResultListItem />
      <ExploreResultListItem />
      <ExploreResultListItem />
      <ExploreResultListItem />
      <ExploreResultListItem />
    </div>
  );
};

export default ExploreListResult;
