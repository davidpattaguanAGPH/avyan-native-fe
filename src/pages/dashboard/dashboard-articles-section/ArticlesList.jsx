import React from "react";
import ArticleCardLg from "../../../components/common/card/article-card-lg/ArticleCardLg";
import ArticleCardSm from "../../../components/common/card/article-card-sm/ArticleCardSm";
import Card from "../../../components/common/card/Card";

const ArticlesList = ({ title }) => {
  return (
    <div class="bg-gray-100  lg:mb-3 font-aiaregular">
      <div class="max-w-screen-xl  mx-auto">
        <div class="mb-5 md:mb-5">
          {title != "" ? (
            <>
              <h2 class="text-gray-800 text-2xl lg:text-3xl font-aiamedium  mb-4 md:mb-2">
                {title}
              </h2>
            </>
          ) : (
            <></>
          )}

          {/* <p class=" text-black md:text-lg ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
            urna, tellus eleifend lacinia nunc quam venenatis. Diam odio ornare
            aliquam lectus nulla lectus leo. Leo libero, eget gravida sociis sem
            ut. Urna rutrum arcu varius rhoncus posuere massa praesent.
          </p> */}
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
