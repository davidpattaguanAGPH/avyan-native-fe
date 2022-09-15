import React from "react";
import Footer from "../../components/layout/Footer";
import NavigationBar from "../../components/layout/NavigationBar";
import CreateProfile from "./create-profile/CreateProfile";
import ExploreResult from "./explore-result/ExploreResult";
import PersonalityType from "./personality-type/PersonalityType";

const TestResults = () => {
  return (
    <div className="bg-gray-100 ">
      <NavigationBar />
      <PersonalityType />
      <CreateProfile />
      <ExploreResult />
      <Footer />
    </div>
  );
};

export default TestResults;
