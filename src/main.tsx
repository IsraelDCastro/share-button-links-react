import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "../playground/App";
import "../playground/styles.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
