import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Secret from "./Secret";
import "./index.css";

const isSecretPage = window.location.pathname.replace(/\/+$/, "") === "/secret";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {isSecretPage ? <Secret /> : <App />}
  </StrictMode>
);
