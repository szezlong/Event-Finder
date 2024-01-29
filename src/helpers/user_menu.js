import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "antd";
import {
  SettingOutlined,
  CalendarOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

export const user_items = [
  {
    label: <Text style={{ display: "flex", marginLeft: 15 }}>Settings</Text>,
    key: "settings",
    icon: <SettingOutlined />,
  },
  {
    label: (
      <Link to="/saved" style={{ display: "flex", marginLeft: 15 }}>
        Saved events
      </Link>
    ),
    key: "saved",
    icon: <CalendarOutlined />,
  },
  {
    label: (
      <Link to="/map" style={{ display: "flex", marginLeft: 15 }}>
        Map
      </Link>
    ),
    key: "map",
    icon: <EnvironmentOutlined />,
  },
];
