import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@/assets/share-button-links-react.scss";
import "@/assets/docs.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
