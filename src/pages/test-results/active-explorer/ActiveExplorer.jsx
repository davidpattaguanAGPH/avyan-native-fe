import React from "react";
import ActiveExplorerList from "./active-explorer-list/ActiveExplorerList";

const ActiveExplorer = () => {
  return (
    <div className=" mb-10 ">
      <div className=" rounded-lg mb-5 w-full font-aiaregular">
        <h1 className="font-semibold text-3xl mb-2">For an active explorer</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, mauris
          in consequat sit sed viverra a varius. Diam amet mattis justo, et
          aenean felis quis. In lorem at phasellus morbi ut senectus fringilla
          morbi orci.
        </p>
      </div>
      <div className="w-full">
        <ActiveExplorerList />
      </div>
    </div>
  );
};

export default ActiveExplorer;
