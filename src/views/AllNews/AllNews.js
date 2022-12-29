import React, { useEffect, useState } from "react";

import { CCol, CRow } from "@coreui/react";

import FeaturedNewsCard from "src/components/FeaturedNewsCard";
import {
  getAlExplorelNews,
  getAllNews,
  getAllNewsSources,
  getSpecificNewsSource,
} from "src/redux/actions/NewsActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import LoaderComponent from "src/components/LoaderComponent";
import AdComponent from "src/components/AdComponent";
import ReactGA from "react-ga";

const AllNews = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [parente] = useAutoAnimate({
    duration: 250,
    easing: "ease-in-out",
  });
  // states
  const [itemSelected, setItemSelected] = useState("All");
  const [loading, setLoading] = useState(true);

  const callGetAllNews = async () => {
    await dispatch(getAllNews({ setLoading: () => setLoading(false) }));
  };

  const callGetAllNewsSources = async () => {
    await dispatch(getAlExplorelNews());
  };

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
    callGetAllNews();
    callGetAllNewsSources();
  }, []);

  const callGetSpecificNewsSource = async (source) => {
    if (source == "All") {
      await callGetAllNews();
    } else {
      await dispatch(
        getSpecificNewsSource({
          source: source,
          setLoading: () => setLoading(false),
        })
      );
    }
  };

  var randNum = Math.floor(Math.random() * 10) + 1;
  console.log("randNum,", randNum);

  return (
    <>
      <div class="scrollmenu">
        {state?.newsSources?.map((item, index) => (
          <>
            {item?._id == itemSelected ? (
              <p
                key={index}
                onClick={() => {
                  console.log("index in the selec", index);
                  // setItemSelected(index);
                }}
                className="cursorPointer selected"
              >
                {item?._id}
              </p>
            ) : (
              <p
                key={index}
                onClick={() => {
                  console.log(item?._id);
                  setLoading(true);
                  callGetSpecificNewsSource(item?._id);
                  setItemSelected(item?._id);
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
        <h2>Explore</h2>

        <Link to={"/"} className="textSeeAll cursorPointer">
          <i className="fa-solid fa-chevron-left"></i> Go back
        </Link>
      </div>
      <CRow ref={parent}>
        {loading ? (
          <LoaderComponent />
        ) : (
          <>
            {state?.exploreNewsArr?.map((item, index) => (
              <>
                {index % 10 == 0 ? (
                  <>
                    <CCol md="4" sm="12" lg="4">
                      <AdComponent />
                    </CCol>
                    {item.source != "impactwrestling.com" && (
                      <CCol md="4" sm="12" lg="4">
                        <FeaturedNewsCard item={item} index={index} />
                      </CCol>
                    )}
                  </>
                ) : (
                  <>
                    {item.source != "impactwrestling.com" && (
                      <CCol md="4" sm="12" lg="4">
                        <FeaturedNewsCard item={item} index={index} />
                      </CCol>
                    )}
                  </>
                )}
              </>
            ))}
          </>
        )}
      </CRow>
    </>
  );
};

export default AllNews;
