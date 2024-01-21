import React from "react";
import { Menu, Flex, Col, Row, Typography } from "antd";

//import './index.css';
import { items } from "../../helpers/nav_buttons.js";
const { Text, Link } = Typography;

export default function Navigation() {
  const [current, setCurrent] = React.useState("mail");

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
          items={items}
          style={{ display: "flex", justifyContent: "flex-start" }}
        />
      </Col>
    </Row>
  );
}
