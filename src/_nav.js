import React from "react";

import { CNavItem } from "@coreui/react";

const _nav = [
  {
    component: CNavItem,
    name: "Home",
    to: "/home",
    icon: <i class="fa fa-home nav-icon" aria-hidden="true"></i>,
  },
  {
    component: CNavItem,
    name: "Explore",
    to: "/explore",
    icon: <i class="fa fa-search nav-icon" aria-hidden="true"></i>,
  },

  {
    component: CNavItem,
    name: "Saved",
    to: "/saved",
    icon: <i class="fa fa-bookmark nav-icon" aria-hidden="true"></i>,
  },
  {
    component: CNavItem,
    name: "Subscriptions",
    to: "/subscriptions",
    icon: <i class="fa fa-credit-card nav-icon" aria-hidden="true"></i>,
  },

  {
    component: CNavItem,
    name: "Settings",
    to: "/settings",
    icon: <i class="fa fa-cog nav-icon" aria-hidden="true"></i>,
  },

  {
    component: CNavItem,
    name: "Logout",
    to: "/logout",
    icon: <i class="fa fa-sign-out nav-icon" aria-hidden="true"></i>,
  },
];

export default _nav;
