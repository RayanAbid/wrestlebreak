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
  CHeaderToggler,
} from "@coreui/react";

import { AppHeaderDropdown } from "./header/index";

import { FilterIcon } from "src/assets/icons";
import CIcon from "@coreui/icons-react";
import { cilMenu } from "@coreui/icons";

const AppHeader = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        {/* Empty div */}
        <CHeaderToggler
          className="ps-1 d-none d-sm-block"
          onClick={() => dispatch({ type: "set", sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderNav className="d-none d-md-flex me-auto"></CHeaderNav>
        {/* Empty div */}

        <CHeaderNav>
          <CRow>
            <CCol className="d-sm-none" xs={1}>
              <CHeaderToggler
                className="ps-1"
                onClick={() => {
                  dispatch({ type: "set", sidebarShow: !sidebarShow });
                }}
              >
                <CIcon icon={cilMenu} size="lg" />
              </CHeaderToggler>
            </CCol>
            <CCol xs={7} md={8}>
              <CInputGroup className="">
                <CInputGroupText
                  style={{ background: "white", border: 0 }}
                  id=""
                >
                  <i className="fa fa-search" aria-hidden="true"></i>
                </CInputGroupText>
                <CFormInput style={{ border: 0 }} id="" placeholder="Search" />
              </CInputGroup>
            </CCol>
            <CCol xs={1}>
              <CImage
                src={require("../../src/assets/icons/Filter.png")}
                className="d-inline-block headerFilterIcon"
                alt="filterIcon"
              />
              {/* <i className="fa fa-filter headerFilterIcon" aria-hidden="true"></i> */}
            </CCol>
            <CCol xs={1}>
              <CHeaderNav className="ms-3">
                <AppHeaderDropdown />
              </CHeaderNav>
            </CCol>
          </CRow>
        </CHeaderNav>
      </CContainer>
    </CHeader>
  );
};

export default AppHeader;
