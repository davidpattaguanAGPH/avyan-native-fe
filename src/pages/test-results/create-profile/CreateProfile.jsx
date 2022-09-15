import React from "react";

const CreateProfile = () => {
  return (
    <div className="px-4 md:px-4 mx-auto max-w-7xl mb-5 md:mb-10">
      <div>
        <div class="max-w-screen-xl px-1 md:px-32 pb-4 ">
          <div class="flex flex-wrap p-10 sm:flex-nowrap sm:justify-around sm:items-center bg-gray-200 rounded-lg  relative py-10">
            <div class="sm:order-none  w-11/12 sm:w-auto md:w-7/12 max-w-screen-lg inline-block text-gray-800 text-sm md:text-base mb-2 sm:mb-0">
              <h1 className="text-4xl font-semibold mb-3 text-primary-black">
                Don't Lose your Results!
              </h1>
              <p className="text-primary-black">
                Create a free profile to get your results by e-mail and gain
                access to more than a hundred surveys, additional tests,
                discussions, and much more. It only takes a few seconds.
              </p>
            </div>
            <a
              href="#"
              class="order-last sm:order-none w-full sm:w-auto inline-block bg-primary-red bg-red-600active:bg-indigo-800 focus-visible:ring  bg-primary-red text-white text-xs md:text-sm font-semibold text-center whitespace-nowrap rounded-md outline-none transition duration-100 px-8 py-3"
            >
              Create Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;