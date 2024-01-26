import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import MapWindow from "./pages/MapWindow";

function App() {
   return (
    <Routes>
      <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<MapWindow />} />
        </Route>
    </Routes>
  );
}

export default App;
