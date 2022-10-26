import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const Home = React.lazy(() => import("./views/dashboard/Dashboard"));
const Explore = React.lazy(() => import("./views/dashboard/Dashboard"));
const Saved = React.lazy(() => import("./views/dashboard/Dashboard"));
const Subscriptions = React.lazy(() => import("./views/dashboard/Dashboard"));
const Settings = React.lazy(() => import("./views/dashboard/Dashboard"));
const Logout = React.lazy(() => import("./views/dashboard/Dashboard"));

const routes = [
  { path: "/", exact: true, name: "Home", element: Dashboard },
  { path: "/home", exact: true, name: "Home" },
  { path: "/explore", name: "Explore", element: Explore },
  { path: "/saved", name: "Saved", element: Saved },
  { path: "/subscriptions", name: "Subscriptions", element: Subscriptions },
  { path: "/settings", name: "Settings", element: Settings },
  { path: "/logout", name: "Logout", element: Logout },
];

export default routes;
