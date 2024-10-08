import React, { useEffect, useState } from "react";

import { CCol, CRow } from "@coreui/react";

import TodayHeadlineCard from "src/components/TodayHeadlineCard";
import FeaturedNewsCard from "src/components/FeaturedNewsCard";
import { getAllNews } from "src/redux/actions/NewsActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { useAutoAnimate } from "@formkit/auto-animate/react";
import LoaderComponent from "src/components/LoaderComponent";
import AdComponent from "src/components/AdComponent";

import ReactGA from "react-ga";

const Home = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  // add animation
  const [headlinesParent] = useAutoAnimate({
    duration: 250,
    easing: "ease-in-out",
  });
  const [featuredParent] = useAutoAnimate({
    duration: 250,
    easing: "ease-in-out",

    // disrespectUserMotionPreference: false,
  });

  const [loading, setLoading] = useState(true);

  const callGetAllNews = async () => {
    await dispatch(getAllNews({ setLoading: () => setLoading(false) }));
  };

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
    callGetAllNews();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between my-2">
        <h2>Today’s Headlines</h2>

        <Link to={"/all_news"} className="textSeeAll cursorPointer">
          See all <i className="fa-solid fa-chevron-right"></i>
        </Link>
      </div>

      <CRow ref={headlinesParent}>
        {loading ? (
          <LoaderComponent />
        ) : (
          <>
            {state?.newsArr?.slice(0, 6)?.map((item, index) => (
              <>
                {/* {index % 10 == 0 ? (
                  <>
                    <CCol md="4" sm="12" lg="4">
                      <AdComponent />
                    </CCol>
                    {item.source != "impactwrestling.com" && (
                      <CCol md="4" sm="12" lg="4">
                        <TodayHeadlineCard item={item} index={index} />
                      </CCol>
                    )}
                  </>
                ) : ( */}
                <>
                  {item.source != "impactwrestling.com" && (
                    <CCol md="4" sm="12" lg="4">
                      <TodayHeadlineCard item={item} index={index} />
                    </CCol>
                  )}
                </>
                {/* )} */}
              </>
            ))}
          </>
        )}
      </CRow>

      <div className="d-flex justify-content-between my-2">
        <h2>Featured News</h2>

        <Link to={"/all_news"} className="textSeeAll cursorPointer">
          See all <i className="fa-solid fa-chevron-right"></i>
        </Link>
      </div>
      <CRow ref={featuredParent}>
        {loading ? (
          <LoaderComponent />
        ) : (
          <>
            {state?.featuredNews?.map((item, index) => (
              <>
                {/* {index % 10 == 0 ? (
                  <>
                    <CCol md="4" sm="12" lg="4">
                      <AdComponent />
                    </CCol>
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
                ) : ( */}
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
                {/* )} */}
              </>
            ))}
          </>
        )}
      </CRow>
    </>
  );
};

export default Home;
