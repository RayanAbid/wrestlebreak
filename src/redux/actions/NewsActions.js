import { URL } from "src/assets/utils/APIUtils";
import axios from "axios";

export const getAllNews = (vals) => async (dispatch, state) => {
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
          featuredNews: response.data.news.slice(6, 12),
        });
        vals?.setLoading();
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const getAllNewsSources = (data) => async (dispatch, state) => {
  var config = {
    method: "get",
    url: `${URL}/news/get-all-sources`,
    headers: {},
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      if (response.data.success) {
        var arr = response.data.sources;
        arr.unshift({
          _id: "All",
        });
        dispatch({
          type: "set",
          newsSources: arr,
        });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const likeNews = (vals) => async (dispatch, state) => {
  var data = JSON.stringify({
    userId: state().user?.id,
  });

  var config = {
    method: "post",
    url: `${URL}/news/like-post/${vals?.newsId}`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      if (response?.data?.success) {
        if (vals?.isFromHomeFeatured) {
          const newsArray = [...state().newsArr.slice(6, 12)]; //making a new array
          newsArray[vals?.index] = response?.data?.data;

          dispatch({
            type: "set",
            featuredNews: newsArray,
          });
        } else {
          const newsArray = [...state().newsArr]; //making a new array
          newsArray[vals?.index] = response?.data?.data;

          dispatch({
            type: "set",
            newsArr: newsArray,
          });
        }
      } else {
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const dislikeNews = (vals) => async (dispatch, state) => {
  var data = JSON.stringify({
    userId: state().user?.id,
  });

  var config = {
    method: "post",
    url: `${URL}/news/dislike-post/${vals?.newsId}`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      if (response?.data?.success) {
        if (vals?.isFromHomeFeatured) {
          const newsArray = [...state().newsArr.slice(6, 12)]; //making a new array
          newsArray[vals?.index] = response?.data?.data;

          dispatch({
            type: "set",
            featuredNews: newsArray,
          });
        } else {
          const newsArray = [...state().newsArr]; //making a new array
          newsArray[vals?.index] = response?.data?.data;

          dispatch({
            type: "set",
            newsArr: newsArray,
          });
        }
      } else {
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};
