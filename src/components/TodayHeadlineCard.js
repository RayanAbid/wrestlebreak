import {
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
  CCol,
  CRow,
} from "@coreui/react";

function TodayHeadlineCard() {
  return (
    <CCard className="mb-3" style={{ maxWidth: "440px" }}>
      <CRow className="g-0">
        <CCol md={4}>
          <CCardImage
            className="headlineCardImg"
            src="https://www.insidesport.in/wp-content/uploads/2022/02/drew_mcintyre_png_render_wwe_2021_by_v_mozz_defxm2v-fullview-2.png"
          />
        </CCol>
        <CCol md={8}>
          <CCardBody>
            <CCardTitle>New Raw set revealed</CCardTitle>
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
              <CCol md="6" xs="6" sm="6" lg="6">
                <p className="">
                  <span className="srcTag">Raw</span>
                </p>
              </CCol>
              <CCol md="6" xs="6" sm="6" lg="6">
                <p>
                  <span className="cardTextGray">
                    <i className="fa-solid fa-clock"></i> 2:00 pm
                  </span>
                </p>
              </CCol>
            </CRow>
          </CCardBody>
        </CCol>
      </CRow>
    </CCard>
  );
}

export default TodayHeadlineCard;
