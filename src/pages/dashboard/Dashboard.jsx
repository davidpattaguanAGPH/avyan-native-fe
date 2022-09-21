import React from "react";
import NavigationBar from "../../components/layout/NavigationBar";
import ArticlesList from "./dashboard-articles-section/ArticlesList";
import DashboardHeroSecondary from "./dashboard-hero-secondary/DashboardHeroSecondary";
import DashboardHeroTertiary from "./dashboard-hero-tertiary/DashboardHeroTertiary";
import DashboardHero from "./dashboard-hero/DashboardHero";
import TabsDashboard from "./dashboard-tabs-section/TabsDashboard";

const Dashboard = () => {
  return (
    <>
      <div className="bg-gray-100">
        <NavigationBar />
        <DashboardHero />
        <ArticlesList />
        <DashboardHeroSecondary />
        <DashboardHeroTertiary />
        <ArticlesList />
        <TabsDashboard />
      </div>
    </>
  );
};

export default Dashboard;
