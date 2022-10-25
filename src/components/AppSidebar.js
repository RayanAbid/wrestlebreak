import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  CImage,
  CNavItem,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarToggler,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import { AppSidebarNav } from "./AppSidebarNav";

import logo from "src/assets/brand/logo.png";
import { sygnet } from "src/assets/brand/sygnet";

import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

// sidebar nav config
import navigation from "../_nav";

const AppSidebar = () => {
  const dispatch = useDispatch();
  const unfoldable = useSelector((state) => state.sidebarUnfoldable);
  const sidebarShow = useSelector((state) => state.sidebarShow);

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      // visible={sidebarShow}
      // onVisibleChange={(visible) => {
      //   dispatch({ type: "set", sidebarShow: visible });
      // }}
    >
      <CSidebarBrand
        style={{
          borderTopRightRadius: 20,
        }}
        className="d-none bgSider d-md-flex"
        to="/"
      >
        {/* logo */}
        <CImage
          src={logo}
          width={unfoldable ? "50px" : "80px"}
          className="d-inline-block bgSider align-top"
          alt="logo"
        />
      </CSidebarBrand>
      <CSidebarNav className="bgSider">
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>

      <CSidebarToggler
        className="d-none bgSider d-lg-flex"
        onClick={() =>
          dispatch({ type: "set", sidebarUnfoldable: !unfoldable })
        }
      />
    </CSidebar>
  );
};

export default React.memo(AppSidebar);
