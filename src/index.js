import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";

import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./redux/reducers";

import "./style/reset.css";
import "./style/common.css";

ReactDOM.render(
  <Provider store={createStore(reducers, composeWithDevTools())}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
