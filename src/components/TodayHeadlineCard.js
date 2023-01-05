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

import { useDispatch, useSelector } from "react-redux";
import { dislikeNews, likeNews } from "src/redux/actions";

function TodayHeadlineCard({ item, index }) {
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

    const arr = likes;
    const arrLikes = dislikes;

    const newId = state?.user?.id; //new id

    if (!arr?.includes(newId)) {
      console.log("add now");

      arr?.push(newId); //adding to array because value doesnt exists
      arrLikes?.splice(arrLikes.indexOf(newId), 1);
    } else {
      console.log("rem now");

      arr?.splice(arr.indexOf(newId), 1); //deleting
    }

    await dispatch(likeNews({ newsId: _id, index }));
  };

  const callDislikeNews = async () => {
    console.log("dislike called");
    const arr = dislikes;
    const arrLikes = likes;
    const newId = state?.user?.id; //new id

    if (!arr?.includes(newId)) {
      console.log("add now");

      arr?.push(newId); //adding to array because value doesnt exists

      arrLikes?.splice(arrLikes.indexOf(newId), 1);
    } else {
      console.log("rem now");

      arr?.splice(arr.indexOf(newId), 1); //deleting
    }

    await dispatch(dislikeNews({ newsId: _id, index }));
  };

  return (
    <CCard index={index} className="mb-3" style={{ maxWidth: "440px" }}>
      <CRow className="g-0">
        <CCol md={4}>
          <CCardImage
            onClick={(e) => {
              navigateToPost(e);
            }}
            className="headlineCardImg cursorPointer"
            src={image}
          />
        </CCol>
        <CCol md={8}>
          <CCardBody>
            <CCardTitle
              onClick={(e) => {
                navigateToPost(e);
              }}
              style={{
                fontSize: "15px",
              }}
              className="cursorPointer"
            >
              {title?.substring(0, 60)}
              {title?.length > 60 && "..."}
            </CCardTitle>
            {/* <CCardText> */}
            {state?.accessToken && (
              <CRow>
                <CCol md="6" xs="6" sm="6" lg="6">
                  <p
                    onClick={() => {
                      callLikeNews();
                    }}
                    className="cardTextGray cursorPointer"
                  >
                    {likes?.includes(state?.user?.id) ? (
                      <i class="fa-solid text-light fa-thumbs-up"></i>
                    ) : (
                      <i className="fa-regular  fa-thumbs-up"></i>
                    )}

                    <span> {likes?.length ? likes?.length : 0}</span>
                  </p>
                </CCol>
                <CCol md="6" xs="6" sm="6" lg="6">
                  <p
                    onClick={() => {
                      callDislikeNews();
                    }}
                    className="cardTextGray cursorPointer"
                  >
                    {dislikes?.includes(state?.user?.id) ? (
                      <i class="fa-solid text-light fa-thumbs-down"></i>
                    ) : (
                      <i className="fa-regular  fa-thumbs-down"></i>
                    )}

                    <span> {dislikes?.length ? dislikes?.length : 0}</span>
                  </p>
                </CCol>
              </CRow>
            )}
            <CRow>
              <p className="">
                <span className="srcTag">{source}</span>
              </p>
            </CRow>
          </CCardBody>
        </CCol>
      </CRow>
    </CCard>
  );
}

export default TodayHeadlineCard;
