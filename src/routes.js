import { element } from "prop-types";
import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const Home = React.lazy(() => import("./views/home/Home"));
const Explore = React.lazy(() => import("./views/dashboard/Dashboard"));
const Saved = React.lazy(() => import("./views/dashboard/Dashboard"));
const Subscriptions = React.lazy(() => import("./views/dashboard/Dashboard"));
const Settings = React.lazy(() => import("./views/dashboard/Dashboard"));
const Logout = React.lazy(() => import("./views/dashboard/Dashboard"));

const routes = [
  // { path: "/", exact: true, name: "Home", element: Dashboard },
  { path: "/home", exact: true, name: "Home", element: Home },
  { path: "/explore", name: "Explore", element: Home },
  { path: "/saved", name: "Saved", element: Home },
  { path: "/subscriptions", name: "Subscriptions", element: Home },
  { path: "/settings", name: "Settings", element: Home },
  { path: "/logout", name: "Logout", element: Logout },
];

export default routes;
