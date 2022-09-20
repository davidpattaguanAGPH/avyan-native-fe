import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProfileCreate from "../profile-create/ProfileCreate";

const CreateProfile = () => {
  const [isCreateProfileModalOpen, setCreateProfileModalOpen] = useState(false);

  const createProfileModalToggler = () => {
    setCreateProfileModalOpen(true);
  };

  return (
    <>
      <div className="max-screen mx-auto ">
        <div className=" mb-5 md:mb-10 px-5">
          <div
            class="flex flex-wrap sm:flex-nowrap sm:justify-around sm:items-center bg-gray-200 rounded-lg relative py-10 
      max-w-screen-lg mx-auto px-6 md:px-10"
          >
            <div class="sm:order-none w-full sm:w-auto md:w-9/12 max-w-screen-lg inline-block text-gray-800 text-sm md:text-base mb-2 sm:mb-0">
              <h1 className="text-4xl mb-3 text-primary-black font-aiamedium">
                Don't Lose your Results!
              </h1>
              <p className="text-primary-black  font-aiaregular">
                Create a free profile to get your results by e-mail and gain
                access to more than a hundred surveys, additional tests,
                discussions, and much more. It only takes a few seconds.
              </p>
            </div>
            <button
              to=""
              class="order-last sm:order-none w-full sm:w-auto inline-block bg-primary-red bg-red-600active:bg-indigo-800 focus-visible:ring   text-white text-xs md:text-sm font-semibold text-center whitespace-nowrap rounded-md outline-none transition duration-100 px-10 py-3 mt-3 sm:mt-0"
              onClick={createProfileModalToggler}
            >
              Create Profile
            </button>
          </div>
        </div>
      </div>
      <ProfileCreate
        isModalOpen={isCreateProfileModalOpen}
        setIsModalOpen={setCreateProfileModalOpen}
      />
    </>
  );
};

export default CreateProfile;
