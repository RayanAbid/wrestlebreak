import { URL } from "src/assets/utils/APIUtils";
import axios from "axios";

export const getAllNews = (data) => async (dispatch, state) => {
  var config = {
    method: "get",
    url: `${URL}/news/get-all-news`,
    headers: {},
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      if (response.data.success) {
        dispatch({
          type: "set",
          newsArr: response.data.news,
        });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};
