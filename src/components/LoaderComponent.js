import React from "react";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import {
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
  CCol,
  CRow,
} from "@coreui/react";

function LoaderComponent() {
  return (
    <CRow>
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
    </CRow>
  );
}

export default LoaderComponent;

function Box({ children }) {
  return (
    <CCol md="4" sm="12" lg="4">
      <SkeletonTheme>
        <CCard className="mb-3">
          <Skeleton
            style={{ height: "150px !important" }}
            className="headlineCardImgFeaturedSkeleton "
          />

          <CCardBody>
            <CCardTitle className="">
              <Skeleton />
            </CCardTitle>
            <div className="d-flex justify-content-start">
              <p className="cardTextGray  ">
                <i class="fa-solid text-light fa-thumbs-up"></i>
              </p>
              <p className="cardTextGray  ">
                <i
                  style={{
                    marginLeft: 30,
                  }}
                  class="fa-solid text-light fa-thumbs-down"
                ></i>
                <span> </span>
              </p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="">
                <Skeleton width={100} className="srcTag" />
              </p>
            </div>
          </CCardBody>
        </CCard>
      </SkeletonTheme>
    </CCol>
  );
}
