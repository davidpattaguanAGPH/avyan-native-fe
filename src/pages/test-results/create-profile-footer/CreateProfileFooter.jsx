import React from "react";

const CreateProfileFooter = () => {
  return (
    <div className="px-4 md:px-4 mb-5 md:mb-10">
      <div>
        <div class="max-w-screen-lg  pb-4 mx-auto">
          <div class="flex flex-wrap relative p-10 sm:flex-nowrap sm:justify-around sm:items-center bg-primary-red rounded-lg   py-10 justify-center">
            <div className="absolute bottom-0 left-0">
              <svg
                width="133"
                height="192"
                viewBox="0 0 133 192"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.4">
                  <path
                    d="M106.859 3.65842L126.864 112.049L75.5846 139.748L-47.1928 116.221C-48.0484 116.057 -48.2998 114.954 -47.5997 114.436L103.702 2.41403C104.891 1.53393 106.591 2.20394 106.859 3.65842Z"
                    fill="#FADEE5"
                  />
                  <path
                    opacity="0.7"
                    d="M-48.8267 115.621L-30.6852 45.3448C-30.35 44.0462 -28.8567 43.4391 -27.7104 44.1353L100.03 121.725C101.423 122.57 101.886 124.373 101.073 125.785L72.2718 175.845C71.4788 177.223 69.748 177.743 68.3265 177.03L-47.2669 119.052C-48.5302 118.419 -49.1799 116.989 -48.8267 115.621Z"
                    fill="#EF8187"
                  />
                  <path
                    d="M128.035 105.317L-46.3923 114.067C-48.778 114.187 -50.0893 116.895 -48.7033 118.841L37.0962 239.279C38.7755 241.636 42.2031 241.839 44.1483 239.696L130.836 144.19C132.098 142.799 132.798 140.988 132.798 139.11V109.847C132.798 107.253 130.626 105.187 128.035 105.317Z"
                    fill="white"
                  />
                </g>
              </svg>
            </div>

            <div className="absolute top-0 right-0">
              <svg
                width="117"
                height="202"
                viewBox="0 0 117 202"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.4">
                  <path
                    d="M156.544 198.187L176.549 89.796L125.269 62.0977L2.49201 85.6239C1.63642 85.7878 1.38501 86.8913 2.08516 87.4097L153.387 199.431C154.576 200.311 156.275 199.641 156.544 198.187Z"
                    fill="#FADEE5"
                  />
                  <path
                    opacity="0.7"
                    d="M0.858148 86.2243L18.9996 156.5C19.3348 157.799 20.8281 158.406 21.9744 157.71L149.715 80.1205C151.108 79.2747 151.571 77.4724 150.758 76.0603L121.957 26.0005C121.164 24.6221 119.433 24.102 118.011 24.815L2.41792 82.7928C1.15463 83.4265 0.504895 84.8559 0.858148 86.2243Z"
                    fill="#EF8187"
                  />
                  <path
                    d="M177.72 96.5279L3.29255 87.7782C0.906784 87.6585 -0.404525 84.9497 0.981478 83.0042L86.781 -37.4339C88.4603 -39.7911 91.8879 -39.9936 93.8331 -37.8506L180.521 57.655C181.783 59.0458 182.483 60.8569 182.483 62.7352V91.9983C182.483 94.5923 180.311 96.6578 177.72 96.5279Z"
                    fill="white"
                  />
                </g>
              </svg>
            </div>

            <div class="gap-2 flex flex-col items-center sm:order-none  w-11/12 sm:w-auto md:w-9/12 max-w-screen-lg text-gray-800 text-sm md:text-base mb-2 sm:mb-0">
              <h1 className="text-4xl font-semibold mb-3 text-primary-white">
                Don't Lose your Results!
              </h1>
              <p className="text-primary-white mb-5">
                Create a free profile to get your results by e-mail and gain
                access to more than a hundred surveys, additional tests,
                discussions, and much more. It only takes a few seconds.
              </p>
              <a
                href="#"
                class="order-last sm:order-none w-full sm:w-auto inline-block bg-primary-red bg-red-600active:bg-indigo-800 focus-visible:ring  bg-primary-white text-primary-black text-xs md:text-sm font-semibold text-center whitespace-nowrap rounded-md outline-none transition duration-100 px-8 py-3"
              >
                Create Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProfileFooter;
