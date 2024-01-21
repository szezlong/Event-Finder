import React, { useState } from "react";

import { Button, Menu, Typography } from "antd";

export const items = [
  {
    label: (
      <a
        href="@"
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginLeft: "5vw", marginRight: "10vw" }} //zamiast style tutaj, to dodać to w komponent (flex) w który wsadzisz label
      >
        Home
      </a>
    ),
    key: "home",
  },
  {
    label: (
      <a
        href="@"
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginRight: "10vw" }}
      >
        About
      </a>
    ),
    key: "about",
  },
  {
    label: (
      <a
        href="@"
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginRight: "10vw" }}
      >
        Destination
      </a>
    ),
    key: "destination",
  },
  {
    label: (
      <a
        href="@"
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginRight: "12vw" }}
      >
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
