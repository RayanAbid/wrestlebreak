import { URL } from "src/assets/utils/APIUtils";
import axios from "axios";

export const login = (data) => async (dispatch, state) => {
  dispatch({
    type: "set",
    accessToken: response.data.news,
    user: response.data,
  });
};
