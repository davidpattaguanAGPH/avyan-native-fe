import React from "react";
import ArticleCardLg from "../../../../components/common/card/article-card-lg/ArticleCardLg";
import ArticleCardSm from "../../../../components/common/card/article-card-sm/ArticleCardSm";
import Card from "../../../../components/common/card/Card";
import ActiveExplorerCard from "./active-explorer-card/ActiveExplorerCard";

const ActiveExplorerList = () => {
  return (
    <div class="grid overflow-hidden grid-cols-12 grid-rows-2 gap-2">
      <div className="col-span-8 row-span-2">
        <ArticleCardLg />
      </div>
      <div className="w-64 col-start-9 col-span-2">
        <ArticleCardSm />
      </div>
      <div className="w-64  col-start-9 col-span-2">
        <ArticleCardSm />
      </div>
    </div>
  );
};

export default ActiveExplorerList;
