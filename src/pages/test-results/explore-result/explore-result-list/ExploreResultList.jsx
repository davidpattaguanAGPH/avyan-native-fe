import React from "react";
import ExploreResultListItem from "./explore-result-listitem/ExploreResultListItem";

const ExploreListResult = () => {
  return (
    <div className="bg-white mx-1 mb-5 rounded-md">
      <ExploreResultListItem />
      <ExploreResultListItem />
      <ExploreResultListItem />
      <ExploreResultListItem />
      <ExploreResultListItem />
    </div>
  );
};

export default ExploreListResult;
