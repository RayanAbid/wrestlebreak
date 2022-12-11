import React, { useDebugValue, useEffect } from "react";

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import { CChartLine } from "@coreui/react-chartjs";
import { getStyle, hexToRgba } from "@coreui/utils";
import CIcon from "@coreui/icons-react";
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from "@coreui/icons";

import avatar1 from "src/assets/images/avatars/1.jpg";
import avatar2 from "src/assets/images/avatars/2.jpg";
import avatar3 from "src/assets/images/avatars/3.jpg";
import avatar4 from "src/assets/images/avatars/4.jpg";
import avatar5 from "src/assets/images/avatars/5.jpg";
import avatar6 from "src/assets/images/avatars/6.jpg";

import WidgetsBrand from "../widgets/WidgetsBrand";
import WidgetsDropdown from "../widgets/WidgetsDropdown";
import TodayHeadlineCard from "src/components/TodayHeadlineCard";
import FeaturedNewsCard from "src/components/FeaturedNewsCard";
import { firstAction, getAllNews } from "src/redux/actions/NewsActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AllNews = () => {
  const newsArr = useSelector((state) => state.newsArr);
  const dispatch = useDispatch();

  const callGetAllNews = async () => {
    await dispatch(getAllNews());
  };

  useEffect(() => {
    callGetAllNews();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between my-2">
        <h2>Explore</h2>

        <Link to={"/"} className="textSeeAll cursorPointer">
          <i className="fa-solid fa-chevron-left"></i> Go back
        </Link>
      </div>
      <CRow>
        {newsArr?.map((item, index) => (
          <>
            {item.source != "impactwrestling.com" && (
              <CCol md="4" sm="12" lg="4">
                <FeaturedNewsCard item={item} index={index} />
              </CCol>
            )}
          </>
        ))}
      </CRow>
    </>
  );
};

export default AllNews;
