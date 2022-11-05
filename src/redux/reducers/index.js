import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

const initialState = {
  sidebarShow: true,
  newsArr: [],
  user: [],
  accessToken: [],
};

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case "set":
      return { ...state, ...rest };

    default:
      return state;
  }
};

export default changeState;
