import React from "react";
import NavigationBar from "../../components/layout/NavigationBar";
import Footer from "../../components/layout/Footer";
import ArticlesList from "./dashboard-articles-section/ArticlesList";
import ReadArticleLeft from "./dashboard-hero-secondary/DashboardHeroSecondary";
import DashboardHeroTertiary from "./dashboard-hero-tertiary/DashboardHeroTertiary";
import DashboardHero from "./dashboard-hero/DashboardHero";
import TabsDashboard from "./dashboard-tabs-section/TabsDashboard";
import ReadArticleRight from "./dashboard-hero-secondary/ReadArticleRight";

const Dashboard = () => {
  return (
    <>
      <div className="bg-gray-100">
        <NavigationBar />
        <DashboardHero />
        <ArticlesList title={"Fitness"} />
        <ReadArticleLeft />
        <DashboardHeroTertiary />

        <ReadArticleRight />
        <ArticlesList />
        <TabsDashboard />
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
