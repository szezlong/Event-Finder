import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Button, Menu, Typography } from "antd";

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
  {
    label: <Link to="/saved">Saved</Link>,
    key: "saved",
  },
];
