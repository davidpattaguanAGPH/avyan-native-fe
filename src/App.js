import React, { useState } from "react";

import { useRoutes } from "react-router-dom";
import LandingPage from "./pages/home/landingpage/LandingPage";
import PrivateRoute from "./routes/PrivateRoute";

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
      element: <>Login Page</>,
    },
    {
      path: "/register",
      element: <>Registration Page</>,
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
          TESTING
        </PrivateRoute>
      ),
    },
    { path: "*", element: <>Error</> },
  ]);

  return routes;
};

export default App;
