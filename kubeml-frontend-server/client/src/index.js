import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import axios from "axios";
import { store, persistor } from "./redux/store";

import "./index.css";
import App from "./App";
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Roboto:300,400,700", "Raleway:300,400,500,700", "sans-serif"],
  },
});
axios.defaults.baseURL = "http://seoz.io:1234/api"; // || 6060;"http://51.75.196.152:1234/api";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
