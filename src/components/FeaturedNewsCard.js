import {
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
  CCol,
  CRow,
} from "@coreui/react";
import moment from "moment";

import React from "react";

function FeaturedNewsCard({ item, index }) {
  const { image, source, postLink, createdAt, title, description } = item;

  const navigateToPost = (e) => {
    e.preventDefault();
    window.open(postLink, "_blank");
  };

  return (
    <CCard index={index} className="mb-3">
      <CCardImage
        onClick={(e) => {
          navigateToPost(e);
        }}
        className="headlineCardImgFeatured cursorPointer"
        orientation="top"
        src={image}
      />
      <CCardBody>
        <CCardTitle
          onClick={(e) => {
            navigateToPost(e);
          }}
          className="cursorPointer"
        >
          {title?.substring(0, 60)}
          {title?.length > 60 && "..."}
        </CCardTitle>
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
              <i className="fa-solid fa-clock"></i>{" "}
              {moment(createdAt)?.format("hh:mm A")}
            </span>
          </p>
        </div>
      </CCardBody>
    </CCard>
  );
}

export default FeaturedNewsCard;
