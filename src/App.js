import React, { useEffect, useState } from "react";

import { useRoutes } from "react-router-dom";
import LandingPage from "./pages/home/landingpage/LandingPage";
import LoginPage from "./pages/authentication/login/LoginPage";
import HeroVideo from "./pages/home/hero-video/HeroVideo";
import PrivateRoute from "./routes/PrivateRoute";
import TestResults from "./pages/test-results/TestResults";
import Dashboard from "./pages/dashboard/Dashboard";
import Typeform from "./pages/home/typeform/Typeform";

import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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
      path: "/hero-video",
      element: <HeroVideo />,
    },
    {
      path: "/test",
      element: <Typeform />,
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
