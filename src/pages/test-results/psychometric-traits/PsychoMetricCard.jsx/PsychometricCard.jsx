import React from "react";
import { Disclosure } from "@headlessui/react";

const PsychometricCard = () => {
  return (
    <div className="mb-5 ">
      <Disclosure>
        <div className=" relative border flex py-9 px-5 md:px-10 lg:px-20 rounded-sm flex-col text-center ">
          <div>
            <h1 className="mb-2 font-aiamedium text-lg ">Nature</h1>
          </div>
          <div className=" ">
            <h6 className=" text-sm  mb-5">
              This trait underpins others, showing how confident we are in our
              abilities and decisions.
            </h6>
          </div>
          <div className="w-full flex items-center">
            <div className="flex flex-col text-left">
              <div className="text-lg font-aiamedium lg:text-4xl">61%</div>
              <div className="text-sm">Intuitive</div>
            </div>
            <div class="flex w-full justify-end bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mx-2">
              <div
                class="bg-blue-600 h-2.5 rounded-full "
                style={{ width: "50%" }}
              ></div>
            </div>
            <div className="flex flex-col text-right">
              <div className="text-lg  font-aiamedium lg:text-4xl">61%</div>
              <div className="text-sm">Intuitive</div>
            </div>
          </div>
          <div className="flex justify-center pt-5">
            <Disclosure.Button className="py-2">
              <div className="absolute  bottom-0 -translate-x-1/2 ">
                <svg
                  width="63"
                  height="35"
                  viewBox="0 0 63 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_554_9142)">
                    <ellipse
                      cx="31.8126"
                      cy="35.5094"
                      rx="30.8453"
                      ry="31.0963"
                      fill="#DDD6D3"
                    />
                    <path
                      d="M37.5989 18.0107L31.8126 23.8441L26.0264 18.0107"
                      stroke="#806F61"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_554_9142">
                      <rect
                        width="61.4995"
                        height="34"
                        fill="white"
                        transform="translate(0.750244 0.510742)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </Disclosure.Button>
          </div>
        </div>
        <Disclosure.Panel className="bg-gray-200 text-gray-500 p-5">
          You are mostly intuitive. Intuitive individuals are very imaginative,
          open-minded and curious. They prefer novelty over stability and focus
          on hidden meanings and future possibilities.
        </Disclosure.Panel>
      </Disclosure>
    </div>
  );
};

export default PsychometricCard;
