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
import { useDispatch, useSelector } from "react-redux";
import { dislikeNews, likeNews } from "src/redux/actions";

function FeaturedNewsCard({ item, index, isFromHomeFeatured }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const {
    image,
    source,
    postLink,
    _id,
    likes,
    dislikes,
    createdAt,
    title,
    description,
  } = item;

  const navigateToPost = (e) => {
    e.preventDefault();
    window.open(postLink, "_blank");
  };

  const callLikeNews = async () => {
    console.log("like called");
    await dispatch(likeNews({ newsId: _id, index, isFromHomeFeatured }));
  };

  const callDislikeNews = async () => {
    console.log("dislike called");
    await dispatch(dislikeNews({ newsId: _id, index, isFromHomeFeatured }));
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
        {state?.accessToken && (
          <div className="d-flex justify-content-start">
            <p
              onClick={() => {
                callLikeNews();
              }}
              className="cardTextGray cursorPointer "
            >
              {likes?.includes(state?.user?.id) ? (
                <i class="fa-solid text-light fa-thumbs-up"></i>
              ) : (
                <i className="fa-regular  fa-thumbs-up"></i>
              )}

              <span> {likes?.length ? likes?.length : 0}</span>
            </p>
            <p
              onClick={() => {
                callDislikeNews();
              }}
              className="cardTextGray cursorPointer "
            >
              {dislikes?.includes(state?.user?.id) ? (
                <i
                  style={{
                    marginLeft: 30,
                  }}
                  class="fa-solid text-light fa-thumbs-down"
                ></i>
              ) : (
                <i
                  style={{
                    marginLeft: 30,
                  }}
                  className="fa-regular  fa-thumbs-down"
                ></i>
              )}

              <span> {dislikes?.length ? dislikes?.length : 0}</span>
            </p>
          </div>
        )}

        <div className="d-flex justify-content-between">
          <p className="">
            <span className="srcTag">{source}</span>
          </p>
        </div>
      </CCardBody>
    </CCard>
  );
}

export default FeaturedNewsCard;
