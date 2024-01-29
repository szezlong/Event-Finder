import React from "react";
import { Link } from "react-router-dom";

export const items = [
  {
    label: <Link to="/">Home</Link>,
    key: "home",
  },
  {
    label: <Link to="/about">About</Link>,
    key: "about",
  },
  {
    label: <Link to="/map">Map</Link>,
    key: "map",
  },
];
