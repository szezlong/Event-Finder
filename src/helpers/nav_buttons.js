import React, { useState } from "react";

import { Button, Menu, Typography } from "antd";

export const items = [
  {
    label: (
      <a href="@" target="_blank" rel="noopener noreferrer">
        Home
      </a>
    ),
    key: "home",
  },
  {
    label: (
      <a href="@" target="_blank" rel="noopener noreferrer">
        About
      </a>
    ),
    key: "about",
  },
  {
    label: (
      <a href="@" target="_blank" rel="noopener noreferrer">
        Destination
      </a>
    ),
    key: "destination",
  },
  {
    label: (
      <a href="@" target="_blank" rel="noopener noreferrer">
        Contact
      </a>
    ),
    key: "contact",
  },
  {
    label: <Button type="primary">Login</Button>,
    key: "login",
  },
];
