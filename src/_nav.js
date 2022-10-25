import React from "react";
import CIcon from "@coreui/icons-react";
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from "@coreui/icons";
import { CNavGroup, CNavItem, CNavTitle } from "@coreui/react";

const _nav = [
  {
    component: CNavItem,
    name: "Home",
    to: "/dashboard",
    icon: <i class="fa fa-home nav-icon" aria-hidden="true"></i>,
  },
  {
    component: CNavItem,
    name: "Explore",
    to: "/dashboard",
    icon: <i class="fa fa-search nav-icon" aria-hidden="true"></i>,
  },

  {
    component: CNavItem,
    name: "Saved",
    to: "/dashboard",
    icon: <i class="fa fa-bookmark nav-icon" aria-hidden="true"></i>,
  },
  {
    component: CNavItem,
    name: "Subscriptions",
    to: "/dashboard",
    icon: <i class="fa fa-credit-card nav-icon" aria-hidden="true"></i>,
  },

  {
    component: CNavItem,
    name: "Settings",
    to: "/dashboard",
    icon: <i class="fa fa-cog nav-icon" aria-hidden="true"></i>,
  },

  {
    component: CNavItem,
    name: "Logout",
    to: "/dashboard",
    icon: <i class="fa fa-sign-out nav-icon" aria-hidden="true"></i>,
  },

  // {
  //   component: CNavItem,
  //   name: "Docs",
  //   href: "https://coreui.io/react/docs/templates/installation/",
  //   // icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  // },
];

export default _nav;
