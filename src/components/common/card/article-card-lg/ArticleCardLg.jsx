import React from "react";
import Tags from "../../tags/Tags";

const ArticleCardLg = () => {
  return (
    <div class=" text-primary-black rounded-md bg-white h-full ">
      <a href="#">
        <img
          class="rounded-t-md"
          src="https://images.unsplash.com/photo-1661961110671-77b71b929d52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
      </a>
      <div class="p-6">
        <a href="#">
          <h5 class="mb-2 text-sm font-bold tracking-tight text-gray-900 ">
            How Johnson & Johnson Is Shaping the Future of Healthcare Through
            Technology
          </h5>
        </a>
        <p class="mb-3 font-normal text-xs text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <Tags />
      </div>
    </div>
  );
};

export default ArticleCardLg;
