import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CContainer,
  CHeader,
  CHeaderNav,
  CImage,
  CInputGroup,
  CFormInput,
  CRow,
  CCol,
  CInputGroupText,
} from "@coreui/react";

import { AppHeaderDropdown } from "./header/index";

import { FilterIcon } from "src/assets/icons";

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
              <CImage
                src={require("../../src/assets/icons/Filter.png")}
                className="d-inline-block headerFilterIcon"
                alt="filterIcon"
              />
              {/* <i class="fa fa-filter headerFilterIcon" aria-hidden="true"></i> */}
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
