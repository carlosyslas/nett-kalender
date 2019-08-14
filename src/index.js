import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Modal from "react-modal";
import "./index.scss";
import App from "./App";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

Modal.setAppElement("#root");
