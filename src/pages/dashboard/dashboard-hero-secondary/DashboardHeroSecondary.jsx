import React from "react";

const DashboardHeroSecondary = () => {
  return (
    <div class="bg-gray-100 py-6 sm:py-8 lg:py-12 font-aiaregular">
      <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-4">
            <div className="md:relative">
              <div class="md:absolute w-[28rem] h-auto md:translate-x-10 md:translate-y-20 mx-0 p-10 bg-white  border-gray-200 rounded-md">
                <a href="#">
                  <h5 class="mb-2 text-3xl font-aiamedium tracking-tight text-primary-black ">
                    How Johnson & Johnson Is Shaping the Future of Healthcare
                    Through Technology
                  </h5>
                </a>
                <p class="mb-10 font-aiaregular text-sm text-gray-700 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vitae, mauris in consequat sit sed viverra a varius. Diam amet
                  mattis justo, et aenean felis quis. In lorem at phasellus
                  morbi ut senectus fringilla morbi orci.
                </p>
                <a
                  href="#"
                  class="inline-flex items-center py-3 px-7 text-sm font-medium text-center  text-white bg-primary-red"
                >
                  Read fui
                </a>
              </div>
            </div>
            <div className="col-span-3">
              <img
                className=""
                src="https://images.unsplash.com/photo-1663174493884-b916b474d78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeroSecondary;
