import React from "react";
import MapComponent from "../components/map/map-component";
export default function MapWindow() {
  return (
    <div>
        <h1>Mapa</h1>
        <div style={{height: "70vh", width: "100%"}}>
            <MapComponent />
        </div>
    </div>
  );
}
