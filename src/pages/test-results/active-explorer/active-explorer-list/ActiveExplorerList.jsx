import React from "react";
import ArticleCardLg from "../../../../components/common/card/article-card-lg/ArticleCardLg";
import ArticleCardSm from "../../../../components/common/card/article-card-sm/ArticleCardSm";
import Card from "../../../../components/common/card/Card";
import ActiveExplorerCard from "./active-explorer-card/ActiveExplorerCard";

const ActiveExplorerList = () => {
  return (
    <div class="grid grid-cols-1 gap-5 lg:overflow-hidden lg:grid-cols-12 lg:grid-rows-2 lg:gap-2">
      <div className="lg:col-span-8 lg:row-span-2">
        <ArticleCardLg />
      </div>
      <div className="lg:w-64 lg:col-start-9 lg:col-span-2">
        <ArticleCardSm />
      </div>
      <div className="lg:w-64  lg:col-start-9 lg:col-span-2">
        <ArticleCardSm />
      </div>
    </div>
  );
};

export default ActiveExplorerList;
