import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/common/button/Button";
import ArticleCardSm from "../../../components/common/card/article-card-sm/ArticleCardSm";

const DashboardHeroTertiary = () => {
  return (
    <div className="max-w-screen-xl px-4 md:px-8  mx-auto h-96 bg-pink-100 relative mb-40 rounded-md">
      <div className="grid grid-cols-2 h-60 items-center">
        <div className="flex justify-center">
          <h1 className="aiamedium text-4xl font-semibold  w-[24rem] ">
            More content, for the better you.
          </h1>
        </div>
        <div className=" flex flex-col gap-4 w-10/12">
          <div className="text-sm mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae,
            mauris in consequat sit sed viverra a varius. Diam amet mattis
            justo, et aenean felis quis. In lorem at phasellus morbi ut senectus
            fringilla morbi orci.
          </div>
          <Link to="/test">
            <button className="bg-primary-red px-8 py-3 rounded-md text-xs text-white font-aiaregular">
              Read Full Article
            </button>
          </Link>
        </div>
      </div>
      <div className="  -translate-x-5 absolute mx-10">
        <div className="grid grid-cols-4 gap-5 ">
          <ArticleCardSm />
          <ArticleCardSm />
          <ArticleCardSm />
          <ArticleCardSm />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeroTertiary;
