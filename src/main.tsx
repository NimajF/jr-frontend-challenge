import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = import.meta.env.REACT_APP_MAPBOX_TOKEN!;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
