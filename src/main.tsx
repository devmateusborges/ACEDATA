import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import AppHeader from "./Components/Header/AppHeader";
import store from "./store";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppHeader />
      <App />
    </Provider>
  </React.StrictMode>
);
