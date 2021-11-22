import React from "react";
import ReactDOM from "react-dom";

import RouterProvider from "providers/router";

import App from "./components/views/App";
import styles from "./index.module.scss";
import WiadomosciProvider from "providers/wiadomosci";

ReactDOM.render(
  <div className={styles.backGround}>
    <WiadomosciProvider>
      <RouterProvider>
        <App />
      </RouterProvider>
    </WiadomosciProvider>
  </div>,
  document.getElementById("root")
);
