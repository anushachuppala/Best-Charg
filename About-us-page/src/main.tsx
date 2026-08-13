import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

import "./styles/fonts.css";
import "./styles/variables.css";
import "./styles/global.css";
import NavBar from "./widgets/app-shell/NavBar";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NavBar />
    <App />
  </StrictMode>,
);
