import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilEnvelopeClosed, cilLockLocked, cilUser } from "@coreui/icons";
import { login } from "src/redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const email = useRef();
  const password = useRef();

  const navigate = useNavigate();

  return (
    <div className="bg-black min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-white">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText className="bg-black">
                        <CIcon color="black" icon={cilEnvelopeClosed} />
                      </CInputGroupText>
                      <CFormInput
                        onChange={(e) => {
                          email.current = e.target.value;
                        }}
                        value={email.current}
                        placeholder="Email"
                        autoComplete="email"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText className="bg-black">
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        onChange={(e) => {
                          password.current = e.target.value;
                        }}
                        value={password.current}
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton
                          style={{
                            backgroundColor: "#ec6ead",
                            border: 0,
                          }}
                          onClick={(e) => {
                            e.preventDefault();
                            dispatch(
                              login(
                                {
                                  email: email.current,
                                  password: password.current,
                                },
                                navigate
                              )
                            );
                          }}
                          className="px-4"
                        >
                          Login
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard
                className="text-white bg-primary py-5"
                style={{ width: "44%" }}
              >
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>Don't have an account no worries!!</p>
                    <Link to="/register">
                      <CButton
                        style={{
                          backgroundColor: "#ec6ead",
                          border: 0,
                        }}
                        onClick={() => {
                          // window.open(
                          //   "https://forms.gle/Tb5VyjG7FqhwefN97",
                          //   "_blank"
                          // );
                        }}
                        className="mt-3"
                        active
                        tabIndex={-1}
                      >
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
