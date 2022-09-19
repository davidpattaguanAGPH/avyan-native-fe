import React from "react";
import House from "../../../../../assets/img/House.png";

const ExploreResultListItem = () => {
  return (
    <div
      href="#"
      class="flex flex-col  items-center w-full  bg-primary-white border-b-2 md:flex-row text-gray-7 font-aiaregular "
    >
      <div>
        <img
          class="w-full h-auto rounded-t-lg md:h-auto md:w-96 my-7 "
          src={House}
          alt=""
        />
      </div>

      <div class="flex flex-col justify-between leading-normal p-9">
        <h5 class=" text-2xl font-bold tracking-tight text-gray-900 mb-3">
          Values & Motivation
        </h5>
        <p class="  font-normal text-gray-700 dark:text-gray-400 ">
          You want to live life on the exciting side. You see parenthood as a
          journey where you can discover more about yourself. Life is a big
          adventure and it’s best explored with your growing family.
        </p>
      </div>
    </div>
  );
};

export default ExploreResultListItem;
