import React from "react";
import House from "../../../../../assets/img/House.png";

const ExploreResultListItem = () => {
  return (
    <div
      href="#"
      class="flex flex-col items-center bg-white border-b-2  p-10 md:flex-row text-gray-700 "
    >
      <img
        class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 "
        src={House}
        alt=""
      />
      <div class="flex flex-col justify-between ml-5  leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
          Noteworthy technology acquisitions 2021
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 ">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </div>
    </div>
  );
};

export default ExploreResultListItem;
