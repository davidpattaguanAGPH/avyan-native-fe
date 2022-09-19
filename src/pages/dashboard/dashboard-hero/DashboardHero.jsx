import React from "react";

const DashboardHero = () => {
  return (
    <div class="bg-primary-red pb-6 sm:pb-8 lg:pb-3 font-aiaregular text-white relative">
      <div className="absolute top-0 left-0">
        <svg
          width="194"
          height="200"
          viewBox="0 0 194 409"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.4">
            <path
              d="M-135.827 -136.82L-220.947 81.8007L-123.688 156.606L146.312 151.374C147.193 151.357 147.646 150.301 147.04 149.678L-132.501 -137.532C-133.514 -138.573 -135.293 -138.192 -135.827 -136.82Z"
              fill="#FADEE5"
            />
            <path
              opacity="0.7"
              d="M148.155 152.983L136.627 -2.98501C136.529 -4.30333 135.187 -5.1385 133.935 -4.65936L-170.548 111.88C-172.105 112.475 -172.907 114.199 -172.344 115.737L-128.866 234.344C-128.331 235.804 -126.745 236.586 -125.228 236.138L145.959 156.123C147.341 155.715 148.26 154.401 148.155 152.983Z"
              fill="#EF8187"
            />
            <path
              d="M-219.63 66.3508L144.185 145.513C149.161 146.596 150.878 152.614 147.211 156.119L-79.7805 373.115C-84.2231 377.362 -91.5165 376.575 -94.786 371.496L-240.495 145.124C-242.617 141.828 -243.392 137.866 -242.668 134.013L-231.4 73.973C-230.401 68.6508 -225.034 65.175 -219.63 66.3508Z"
              fill="white"
            />
          </g>
        </svg>
      </div>
      <div className="absolute bottom-0 right-0">
        <svg
          width="298"
          height="200"
          viewBox="0 0 298 345"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.4">
            <path
              d="M608.029 297.528L414.801 431.727L313.668 359.057L244.056 104.38C243.828 103.546 244.72 102.867 245.502 103.279L607.763 294.181C609.095 294.883 609.238 296.688 608.029 297.528Z"
              fill="#FADEE5"
            />
            <path
              opacity="0.7"
              d="M241.083 104.307L399.208 76.3168C400.542 76.0806 401.759 77.1736 401.628 78.491L370.355 393.486C370.197 395.077 368.765 396.23 367.124 396.087L237.24 384.755C235.628 384.614 234.384 383.271 234.408 381.698L238.649 107.112C238.671 105.722 239.683 104.554 241.083 104.307Z"
              fill="#EF8187"
            />
            <path
              d="M426.996 429.471L247.802 107.914C245.351 103.516 238.91 103.4 236.451 107.71L84.2062 374.515C81.2265 379.737 84.0262 386.382 89.9663 388.187L354.691 468.609C358.546 469.78 362.687 469.523 366.307 467.887L422.7 442.403C427.699 440.144 429.658 434.247 426.996 429.471Z"
              fill="white"
            />
          </g>
        </svg>
      </div>
      <div class="max-w-screen-lg px-4 md:px-8 mx-auto">
        <section class="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16 ">
          <div class="xl:w-5/12 flex flex-col justify-center sm:text-center lg:text-left lg:py-12 xl:py-24">
            <h1 class="text-black-800 text-3xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-5">
              Financial Readiness Test
            </h1>
            <p class="lg:w-4/5 leading-relaxed mb-8 md:mb-5 font-light">
              How ready are you? consectetur adipiscing elit. Faucibus turpis
              suscipit a id interdum turpis.
            </p>
            <div class="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5">
              <a
                href="#"
                class="inline-block bg-primary-white text-black text-sm md:text-base font-semibold text-center rounded-md outline-none transition duration-100 px-12 py-3"
              >
                Get Started
              </a>
            </div>
          </div>

          <div class="xl:w-5/12 h-48 lg:h-80 bg-gray-100 overflow-hidden shadow-lg rounded-lg mt-10">
            <img
              src="https://images.unsplash.com/photo-1618004912476-29818d81ae2e?auto=format&q=75&fit=crop&w=1000"
              loading="lazy"
              alt="Photo by Fakurian Design"
              class="w-full h-full object-cover object-center"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashboardHero;
