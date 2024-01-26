import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Input, Button, Image, Typography } from "antd";

import { SettingOutlined, CalendarOutlined, EnvironmentOutlined, LogoutOutlined} from '@ant-design/icons';

const { Title, Text } = Typography;

export const user_items = [
  {
    label: <Text style={{display: "flex", marginLeft: 15}}>Settings</Text>,
    key: "settings",
    icon: <SettingOutlined />
  },
  {
    label: <Link to="/saved"  style={{display: "flex", marginLeft: 15}}>Saved events</Link>,
    key: "saved",
    icon: <CalendarOutlined />
  },
  {
    label: <Link to="/map" style={{display: "flex", marginLeft: 15}}>Map</Link>,
    key: "map",
    icon: <EnvironmentOutlined/>
  },
  {
    label: (
      <Link to="/home">
        <Text underline style={{ display: "flex", marginLeft: 15, color: "red" }}>
          Log out
        </Text>
      </Link>
    ), // add logout
    key: "logout",
    icon: <LogoutOutlined />
  },
];
