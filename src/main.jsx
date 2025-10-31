import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Full_Fibre from "./Full_Fibre";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Full_Fibre />
  </StrictMode>
);
