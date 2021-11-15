import React from "react";
import ReactDOM from "react-dom";

import RouterProvider from "providers/router";

import App from "./components/views/App";
import "./index.css";
import WiadomosciProvider from "providers/wiadomosci";

ReactDOM.render(
  <WiadomosciProvider>
    <RouterProvider>
      <App />
    </RouterProvider>
  </WiadomosciProvider>,
  document.getElementById("root")
);
