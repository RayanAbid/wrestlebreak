import React, { useEffect, useState } from "react";

import { CCol, CRow } from "@coreui/react";

import FeaturedNewsCard from "src/components/FeaturedNewsCard";
import { getAllNews, getAllNewsSources } from "src/redux/actions/NewsActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import LoaderComponent from "src/components/LoaderComponent";

const AllNews = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [parent, enableAnimations] = useAutoAnimate({
    duration: 250,
    easing: "ease-in-out",
  });
  // states
  const [itemSelected, setItemSelected] = useState(0);
  const [loading, setLoading] = useState(true);

  const callGetAllNews = async () => {
    await dispatch(getAllNews({ setLoading: () => setLoading(false) }));
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
                  console.log(index);
                  setLoading(true);
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
            {state?.newsArr?.map((item, index) => (
              <>
                {item.source != "impactwrestling.com" && (
                  <CCol md="4" sm="12" lg="4">
                    <FeaturedNewsCard item={item} index={index} />
                  </CCol>
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
