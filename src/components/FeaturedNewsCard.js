import {
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
  CCol,
  CRow,
} from "@coreui/react";
import React from "react";

function FeaturedNewsCard() {
  return (
    <CCard className="mb-3">
      <CCardImage
        className="headlineCardImg"
        orientation="top"
        src="https://www.insidesport.in/wp-content/uploads/2022/02/drew_mcintyre_png_render_wwe_2021_by_v_mozz_defxm2v-fullview-2.png"
      />
      <CCardBody>
        <CCardTitle>WWE Raw Results: More Bray Wyatt Clues</CCardTitle>
        <div className="d-flex justify-content-start">
          <p className="cardTextGray cursorPointer ">
            <i className="fa-regular fa-thumbs-up"></i> <span>10.8k</span>
          </p>
          <p className="cardTextGray cursorPointer ">
            <i
              className="fa-regular fa-thumbs-down "
              style={{
                marginLeft: 30,
              }}
            ></i>{" "}
            <span>10.8k</span>
          </p>
        </div>
        <div className="d-flex justify-content-between">
          <p className="">
            <span className="srcTag">Raw</span>
          </p>
          <p>
            <span className="cardTextGray">
              <i className="fa-solid fa-clock"></i> 2:00 pm
            </span>
          </p>
        </div>
      </CCardBody>
    </CCard>
  );
}

export default FeaturedNewsCard;
