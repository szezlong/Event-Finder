import React from "react";
import { Menu, Flex, Col, Row, Typography } from "antd";
const { Text, Link } = Typography;

import { items } from "../../helpers/nav_buttons.js";

export default function Navigation() {
  const [current, setCurrent] = React.useState("home"); //for now

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Row>
      <Col
        span={4}
        style={{
          justifyContent: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Text strong italic style={{ color: "red", marginTop: 12 }}>
          Event Finder
        </Text>
      </Col>
      <Col span={20}>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          style={{
            marginLeft: "5vw",
            borderBottom: "1px solid rgba(255, 0, 0, 0)",
          }}
        >
          {items.map((item) => (
            <Menu.Item key={item.key} style={{ marginRight: "11vw" }}>
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      </Col>
    </Row>
  );
}
