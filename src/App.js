import React, { useState } from "react";

import { useRoutes } from "react-router-dom";
import LandingPage from "./pages/home/landingpage/LandingPage";
import LoginPage from "./pages/authentication/login/LoginPage";
import HeroVideo from "./pages/home/hero-video/HeroVideo";
import PrivateRoute from "./routes/PrivateRoute";
import TestResults from "./pages/test-results/TestResults";
import Dashboard from "./pages/dashboard/Dashboard";
import ProfileCreate from "./pages/profile-create/ProfileCreate";

const App = () => {
  const [user, setUser] = useState({
    name: "David",
    permissions: ["analyze"],
    roles: ["admin"],
  });

  const routes = useRoutes([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <>Registration Page</>,
    },
    {
      path: "/create-profile",
      element: (
        <>
          <ProfileCreate />
        </>
      ),
    },
    {
      path: "/hero-video",
      element: <HeroVideo />,
    },
    {
      path: "/test-results",
      element: <TestResults />,
    },
    {
      path: "dashboard",
      element: (
        <PrivateRoute
          redirectPath="/home"
          isAllowed={
            !!user &&
            user.permissions.includes("analyze") &&
            user.roles.includes("admin")
          }
        >
          <Dashboard />
        </PrivateRoute>
      ),
    },
    { path: "*", element: <>Error</> },
  ]);

  return routes;
};

export default App;
