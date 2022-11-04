import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const development =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development";

const hide = false;
const isPublic = window.location.hostname !== "localhost";
const needHide = !(!isPublic || !hide) && development;
root.render(
  <React.StrictMode>
    {needHide ? (
      <div style={{ textAlign: "center" }}>
        <img alt="allo" src="./gorin.png" style={{ width: "100%" }} />
      </div>
    ) : (
      <App />
    )}
  </React.StrictMode>
);
