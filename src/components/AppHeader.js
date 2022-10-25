import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  CImage,
  CInputGroup,
  CFormInput,
  CRow,
  CCol,
  CInputGroupText,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from "@coreui/icons";

import { AppBreadcrumb } from "./index";
import { AppHeaderDropdown } from "./header/index";
import logo from "src/assets/brand/logo.png";

const AppHeader = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        {/* Empty div */}
        <CHeaderNav className="d-none d-md-flex me-auto"></CHeaderNav>
        {/* Empty div */}

        <CHeaderNav>
          <CRow>
            <CCol xs={10}>
              <CInputGroup className="">
                <CInputGroupText
                  style={{ background: "white", border: 0 }}
                  id=""
                >
                  <i class="fa fa-search" aria-hidden="true"></i>
                </CInputGroupText>
                <CFormInput style={{ border: 0 }} id="" placeholder="Search" />
              </CInputGroup>
            </CCol>
            <CCol xs={2}>
              <i class="fa fa-filter headerFilterIcon" aria-hidden="true"></i>
            </CCol>
          </CRow>
        </CHeaderNav>
        <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
    </CHeader>
  );
};

export default AppHeader;
