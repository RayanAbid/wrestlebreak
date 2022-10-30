import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

const initialState = {
  sidebarShow: false,
  newsArr: [],
};

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case "set":
      return { ...state, ...rest };

    default:
      return state;
  }
};

const store = createStore(changeState, applyMiddleware(thunk, logger));
export default store;
