import React, { useRef } from "react";
import {
  CButton,
  CCard,
  CCardBody,
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
import { useDispatch, useSelector } from "react-redux";
import { register } from "src/redux/actions";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const fullName = useRef();
  const email = useRef();
  const password = useRef();
  const passwordConfirm = useRef();

  const navigate = useNavigate();

  const callRegister = async () => {
    if (!fullName.current) {
      toast.error("Please enter username!");
      return;
    }

    if (!email.current) {
      toast.error("Please enter email!");
      return;
    }

    if (!password.current) {
      toast.error("Please enter password!");
      return;
    }

    if (!passwordConfirm.current) {
      toast.error("Please confirm password!");
      return;
    }

    if (password.current != passwordConfirm.current) {
      toast.error("Passwords don't match!");
      return;
    }

    await dispatch(
      register(
        {
          fullName: fullName.current,
          email: email.current,
          password: password.current,
        },
        navigate
      )
    );
  };

  return (
    <div className="bg-black min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Register</h1>
                  <p className="text-white">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText className="bg-black">
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      onChange={(e) => {
                        fullName.current = e.target.value;
                      }}
                      placeholder="Username"
                      autoComplete="username"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText className="bg-black">
                      <CIcon color="black" icon={cilEnvelopeClosed} />
                    </CInputGroupText>
                    <CFormInput
                      onChange={(e) => {
                        email.current = e.target.value;
                      }}
                      placeholder="Email"
                      autoComplete="email"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText className="bg-black">
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      onChange={(e) => {
                        password.current = e.target.value;
                      }}
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText className="bg-black">
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      onChange={(e) => {
                        passwordConfirm.current = e.target.value;
                      }}
                      type="password"
                      placeholder="Repeat password"
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton
                      style={{
                        backgroundColor: "#ec6ead",
                        border: 0,
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        callRegister();
                      }}
                      // color="success"
                    >
                      Create Account
                    </CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Register;
