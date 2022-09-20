import React from "react";
import House from "../../../../../assets/img/House.png";

const ExploreResultListItem = () => {
  return (
    <div
      href="#"
      class="flex flex-col items-center w-full  bg-primary-white border-b-[0.2px] sm:flex-col lg:flex-row text-gray-7  "
    >
      <div>
        <img
          class="w-full h-auto rounded-t-lg md:h-auto md:w-50 lg:w-80 pt-5 pb-2"
          src={House}
          alt=""
        />
      </div>
      <div class="flex flex-col justify-between leading-normal px-7 py-7 sm:px-5 sm:py-5 md:px-0 md:py-5 lg:px-10 lg:py-10">
        <h5 class=" text-2xl font-aiamedium  tracking-tight text-black  ">
          Values & Motivation
        </h5>
        <p class="  font-normal text-primary-black dark:text-gray-400 font-aiaregular text-justify">
          You want to live life on the exciting side. You see parenthood as a
          journey where you can discover more about yourself. Life is a big
          adventure and it’s best explored with your growing family.
        </p>
      </div>
    </div>
  );
};

export default ExploreResultListItem;
