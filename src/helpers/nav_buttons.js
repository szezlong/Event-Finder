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
    label: <Link to="/destination">Destination</Link>,
    key: "destination",
  },
  {
    label: <Link to="/contact">Contact</Link>,
    key: "contact",
  },
  {
    label: (
      <Button type="primary">
        <Link to="/login">Login</Link>
      </Button>
    ),
    key: "login",
  },
];
