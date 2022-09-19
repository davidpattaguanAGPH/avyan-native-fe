import React from "react";
import ArticleCardLg from "../../../components/common/card/article-card-lg/ArticleCardLg";
import ArticleCardSm from "../../../components/common/card/article-card-sm/ArticleCardSm";
import Card from "../../../components/common/card/Card";

const ArticlesList = () => {
  return (
    <div class="bg-gray-100 py-6 sm:py-8 lg:py-12 font-aiaregular">
      <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
        <div class="mb-10 md:mb-7">
          <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold  mb-4 md:mb-2">
            The Life
          </h2>
          <p class=" text-black md:text-lg ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
            urna, tellus eleifend lacinia nunc quam venenatis. Diam odio ornare
            aliquam lectus nulla lectus leo. Leo libero, eget gravida sociis sem
            ut. Urna rutrum arcu varius rhoncus posuere massa praesent.
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-3 xl:gap-3">
          <ArticleCardSm />
          <ArticleCardSm />
          <ArticleCardSm />
          <ArticleCardSm />
        </div>
      </div>
    </div>
  );
};

export default ArticlesList;
