import React from "react";
import AIAGroupLogo from "../../assets/img/AIA_Group_logo 1.png";
import { Popover } from "@headlessui/react";

const NavigationBar = () => {
  return (
    <>
      <Popover className="relative">
        <div class="bg-gray-100 lg:pb-1 ">
          <div class="max-w-screen-2xl px-4 md:px-16 mx-auto shadow-sm">
            <header class="flex justify-between lg:justify-start items-center py-4 md:py-4 ">
              <a href="/" aria-label="logo">
                <img src={AIAGroupLogo} alt="" />
              </a>

              <div className="flex justify-between items-center w-screen mx-10">
                <nav class="hidden lg:flex gap-5">
                  <Popover.Button>
                    <a
                      href="#"
                      class="inline-flex items-center text-md font-semibold gap-1"
                    >
                      Browse
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-gray-800"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </Popover.Button>
                  <a
                    href="#"
                    class="text-gray-600 text-md font-semibold transition duration-100"
                  >
                    About
                  </a>
                </nav>

                <div class="hidden lg:flex flex-col sm:flex-row sm:justify-center">
                  <a
                    href="#"
                    class="inline-block focus-visible:ring ring-indigo-300 text-gray-500 hover:text-indigo-500 active:text-indigo-600 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-5 py-2"
                  >
                    Sign in
                  </a>

                  <a
                    href="#"
                    class="inline-block  focus-visible:ring ring-indigo-300 text-gray-6 00 border text-sm md:text-base font-semibold text-center rounded-md outline-none transition duration-100 px-5 py-2"
                  >
                    Email Results
                  </a>
                </div>
              </div>

              <button type="button" class="lg:hidden ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </header>

            <Popover.Panel className="absolute z-10">
              <div class="w-full hidden lg:block bg-gray-50 border rounded-lg shadow-sm overflow-hidden">
                <div class="max-w-screen-lg flex items-center gap-8 p-8 mx-auto">
                  <div class="w-2/3 grid grid-cols-2 gap-8">
                    <a href="#" class="group flex gap-4">
                      <div class="w-10 md:w-12 h-10 md:h-12 flex justify-center items-center shrink-0 bg-indigo-500 group-hover:bg-indigo-600 group-active:bg-indigo-700 text-white rounded-lg shadow-lg transition duration-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                          />
                        </svg>
                      </div>

                      <div>
                        <div class="font-semibold mb-1">Growth</div>
                        <p class="text-sm text-gray-500">
                          This is a section of some simple filler text, also
                          known as placeholder text.
                        </p>
                      </div>
                    </a>

                    <a href="#" class="group flex gap-4">
                      <div class="w-10 md:w-12 h-10 md:h-12 flex justify-center items-center shrink-0 bg-indigo-500 group-hover:bg-indigo-600 group-active:bg-indigo-700 text-white rounded-lg shadow-lg transition duration-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          />
                        </svg>
                      </div>

                      <div>
                        <div class="font-semibold mb-1">Security</div>
                        <p class="text-sm text-gray-500">
                          This is a section of some simple filler text, also
                          known as placeholder text.
                        </p>
                      </div>
                    </a>

                    <a href="#" class="group flex gap-4">
                      <div class="w-10 md:w-12 h-10 md:h-12 flex justify-center items-center shrink-0 bg-indigo-500 group-hover:bg-indigo-600 group-active:bg-indigo-700 text-white rounded-lg shadow-lg transition duration-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                          />
                        </svg>
                      </div>

                      <div>
                        <div class="font-semibold mb-1">Cloud</div>
                        <p class="text-sm text-gray-500">
                          This is a section of some simple filler text, also
                          known as placeholder text.
                        </p>
                      </div>
                    </a>

                    <a href="#" class="group flex gap-4">
                      <div class="w-10 md:w-12 h-10 md:h-12 flex justify-center items-center shrink-0 bg-indigo-500 group-hover:bg-indigo-600 group-active:bg-indigo-700 text-white rounded-lg shadow-lg transition duration-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                        </svg>
                      </div>

                      <div>
                        <div class="font-semibold mb-1">Analytics</div>
                        <p class="text-sm text-gray-500">
                          This is a section of some simple filler text, also
                          known as placeholder text.
                        </p>
                      </div>
                    </a>
                  </div>

                  <div class="w-1/3 border rounded-lg overflow-hidden">
                    <div class="h-48 bg-gray-100">
                      <img
                        src="https://images.unsplash.com/photo-1619118884592-11b151f1ae11?auto=format&q=75&fit=crop&w=320"
                        loading="lazy"
                        alt="Photo by Fakurian Design"
                        class="w-full h-full object-cover object-center"
                      />
                    </div>

                    <div class="flex justify-between items-center bg-white gap-2 p-3">
                      <p class="text-gray-500 text-sm">
                        This is some simple filler text.
                      </p>

                      <a
                        href="#"
                        class="inline-block shrink-0 bg-white hover:bg-gray-50 active:bg-gray-100 focus-visible:ring ring-indigo-300 text-indigo-500 text-sm font-semibold border rounded-lg outline-none transition duration-100 px-3 py-1"
                      >
                        More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </div>
        </div>
      </Popover>
    </>
  );
};

export default NavigationBar;
