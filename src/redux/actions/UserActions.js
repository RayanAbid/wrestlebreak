import { URL } from "src/assets/utils/APIUtils";
import axios from "axios";

export const login = (vals, navigate) => async (dispatch, state) => {
  var data = JSON.stringify({
    email: vals?.email,
    password: vals?.password,
  });

  var config = {
    method: "post",
    url: `${URL}/user/login`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log("resp", response.data?.data);
      if (response.data?.success) {
        dispatch({
          type: "set",
          accessToken: response.data?.data?.accessToken,
          user: response.data?.data,
        });
        navigate("/");
      } else {
        console.log("err");
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const register = (vals, navigate) => async (dispatch, state) => {
  var data = JSON.stringify({
    fullName: vals?.fullName,
    email: vals?.email,
    password: vals?.password,
  });

  var config = {
    method: "post",
    url: `${URL}/user/register`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log("resp", response.data?.data);
      if (response.data?.success) {
        dispatch({
          type: "set",
          accessToken: response.data?.data?.accessToken,
          user: response.data?.data,
        });
        navigate("/");
      } else {
        console.log("err");
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const logout = (navigate) => async (dispatch, state) => {
  dispatch({
    type: "set",
    accessToken: "",
    user: {},
  });
  navigate("/login");
};
