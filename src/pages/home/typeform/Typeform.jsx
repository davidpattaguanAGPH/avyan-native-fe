import React from "react";
import { Widget } from "@typeform/embed-react";

const Typeform = () => {
  return (
    <>
      <div className="bg-primary-red h-screen relative ">
        <div className="absolute top-0 left-0">
          <svg
            width="397"
            height="715"
            viewBox="0 0 397 715"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.4">
              <path
                d="M-265.865 -389.445L-438.104 53.536L-241.539 204.484L305.794 194.759C306.676 194.743 307.128 193.686 306.519 193.062L-262.544 -390.154C-263.558 -391.194 -265.333 -390.814 -265.865 -389.445Z"
                fill="#FADEE5"
              />
              <path
                opacity="0.7"
                d="M307.065 200.743L282.878 -118.571C282.778 -119.888 281.438 -120.724 280.188 -120.248L-339.484 115.57C-341.043 116.164 -341.846 117.892 -341.277 119.432L-251.099 363.906C-250.562 365.364 -248.979 366.146 -247.466 365.702L304.87 203.886C306.254 203.48 307.173 202.165 307.065 200.743Z"
                fill="#EF8187"
              />
              <path
                d="M-436.105 23.2005L298.46 183.751C308.507 185.947 311.994 198.071 304.605 205.117L-152.808 641.349C-161.761 649.887 -176.484 648.278 -183.1 638.04L-477.951 181.754C-482.245 175.11 -483.822 167.131 -482.375 159.373L-459.834 38.5116C-457.836 27.7979 -447.015 20.8159 -436.105 23.2005Z"
                fill="white"
              />
            </g>
          </svg>
        </div>
        <div className="absolute bottom-0 right-0">
          <svg
            width="588"
            height="499"
            viewBox="0 0 588 499"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.4">
              <path
                d="M964.697 474.872L655.768 691.567L495.473 575.604L385.62 166.812C385.395 165.975 386.287 165.291 387.064 165.703L964.444 471.513C965.768 472.215 965.904 474.025 964.697 474.872Z"
                fill="#FADEE5"
              />
              <path
                opacity="0.7"
                d="M380.086 167.96L634.246 122.005C635.576 121.765 636.784 122.857 636.65 124.179L585.392 631.842C585.23 633.442 583.798 634.605 582.161 634.464L372.56 616.525C370.955 616.388 369.721 615.045 369.749 613.467L377.651 170.785C377.676 169.388 378.689 168.212 380.086 167.96Z"
                fill="#EF8187"
              />
              <path
                d="M676.956 684.248L393.691 170.055C389.817 163.022 379.589 162.862 375.666 169.772L132.814 597.564C128.061 605.936 132.48 616.565 141.906 619.432L561.973 747.194C568.091 749.054 574.668 748.626 580.423 745.993L670.08 704.972C678.027 701.336 681.163 691.885 676.956 684.248Z"
                fill="white"
              />
            </g>
          </svg>
        </div>

        <div className="md:container md:mx-auto h-screen flex justify-center items-center px-5">
          <Widget
            id="https://be16e6qhc32.typeform.com/to/hsHZRath"
            style={{ width: "100%", height: "720px" }}
            className="my-form"
          />
        </div>
      </div>
    </>
  );
};

export default Typeform;