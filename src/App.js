import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import MapWindow from "./pages/MapWindow";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Saved from "./pages/Saved";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<MapWindow />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/saved/:uId"
          element={
            <UserProvider>
              <Saved />
            </UserProvider>
          }
        ></Route>
      </Route>
    </Routes>
  );
}

export default App;
