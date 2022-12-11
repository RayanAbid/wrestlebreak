import React, { useDebugValue, useEffect, useState } from "react";

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
import {
  firstAction,
  getAllNews,
  getAllNewsSources,
} from "src/redux/actions/NewsActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [itemSelected, setItemSelected] = useState(0);

  const callGetAllNews = async () => {
    await dispatch(getAllNews());
  };

  const callGetAllNewsSources = async () => {
    await dispatch(getAllNewsSources());
  };

  useEffect(() => {
    callGetAllNews();
    callGetAllNewsSources();
  }, []);

  return (
    <>
      <div class="scrollmenu">
        {state?.newsSources?.map((item, index) => (
          <>
            {index == itemSelected ? (
              <p
                key={index}
                onClick={() => {
                  console.log("index in the selec", index);
                  setItemSelected(index);
                }}
                className="cursorPointer selected"
              >
                {item?._id}
              </p>
            ) : (
              <p
                key={index}
                onClick={() => {
                  console.log(index);

                  setItemSelected(index);
                }}
                className="cursorPointer"
              >
                {item?._id}
              </p>
            )}
          </>
        ))}
      </div>
      <div className="d-flex justify-content-between my-2">
        <h2>Today’s Headlines</h2>

        <Link to={"/all_news"} className="textSeeAll cursorPointer">
          See all <i className="fa-solid fa-chevron-right"></i>
        </Link>
      </div>

      <CRow>
        {state?.newsArr?.slice(0, 6)?.map((item, index) => (
          <>
            {item.source != "impactwrestling.com" && (
              <CCol md="4" sm="12" lg="4">
                <TodayHeadlineCard item={item} index={index} />
              </CCol>
            )}
          </>
        ))}
      </CRow>

      <div className="d-flex justify-content-between my-2">
        <h2>Featured News</h2>

        <Link to={"/all_news"} className="textSeeAll cursorPointer">
          See all <i className="fa-solid fa-chevron-right"></i>
        </Link>
      </div>
      <CRow>
        {state?.featuredNews?.map((item, index) => (
          <>
            {item.source != "impactwrestling.com" && (
              <CCol md="4" sm="12" lg="4">
                <FeaturedNewsCard
                  isFromHomeFeatured={true}
                  item={item}
                  index={index}
                />
              </CCol>
            )}
          </>
        ))}
      </CRow>
    </>
  );
};

export default Home;
