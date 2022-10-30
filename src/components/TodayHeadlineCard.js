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

function TodayHeadlineCard({ item, index }) {
  const { image, source, postLink, createdAt, title, description } = item;

  const navigateToPost = (e) => {
    e.preventDefault();
    window.open(postLink, "_blank");
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
            >
              {title?.substring(0, 60)}
              {title?.length > 60 && "..."}
            </CCardTitle>
            {/* <CCardText> */}
            <CRow>
              <CCol md="6" xs="6" sm="6" lg="6">
                <p className="cardTextGray cursorPointer">
                  <i className="fa-regular fa-thumbs-up"></i> <span>10.8k</span>
                </p>
              </CCol>
              <CCol md="6" xs="6" sm="6" lg="6">
                <p className="cardTextGray cursorPointer">
                  <i className="fa-regular fa-thumbs-down"></i>{" "}
                  <span>10.8k</span>
                </p>
              </CCol>
            </CRow>
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
