import React from "react";

const ActiveExplorerCard = () => {
  return (
    <div>
      <div class="max-w-sm bg-white rounded-lg font-aiaregular">
        <a className="">
          <img
            class="rounded-t-lg object-none h-48 w-96"
            src="https://images.unsplash.com/photo-1663176563971-aa23f7c9b6b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900 ">
              How Johnson & Johnson Is Shaping the Future of Healthcare Through
              Technology
            </h5>
          </a>
          <p class="mb-3 font-normal text-xs text-gray-700 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            possimus praesentium obcaecati ullam omnis repudiandae ut eaque modi
            hic distinctio, blanditiis ad totam, nemo ipsa aspernatur rem quidem
            debitis aliquam!
          </p>
          <a
            href="#"
            class="inline-flex items-center py-1 px-2 text-xs  font-medium text-center text-primary-black bg-gray-100 "
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default ActiveExplorerCard;
