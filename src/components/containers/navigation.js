import React from "react";
import { Menu, Flex, Col, Row, Typography } from "antd";

import { items } from "../../helpers/nav_buttons.js";
const { Text, Link } = Typography;


export default function Navigation() {
  const [current, setCurrent] = React.useState("home"); //for now

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Row>
      <Col
        span={6}
        style={{
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Text strong italic style={{ color: "red", marginTop: 12 }}>
          Event Finder Logo
        </Text>
      </Col>
      <Col span={14}>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          style={{
            borderBottom: "1px solid rgba(255, 0, 0, 0)",
          }}
        >
          {items.map((item) => (
            <Menu.Item key={item.key} style={{ marginRight: "5vw"}}>
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      </Col>
    </Row>
  );
}
