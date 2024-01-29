import React from "react";
import { Link } from "react-router-dom";

import { Menu, Col, Row, Typography, Button, message } from "antd";
import useAuth from "../../hooks/useAuth.js";
import { items } from "../../helpers/nav_buttons.js";

const { Text } = Typography;

export default function Navigation() {
  const [current, setCurrent] = React.useState("home");
  const { auth, setAuth } = useAuth();

  const onClick = (page) => {
    setCurrent(page.key);
  };

  function isLoggedIn() {
    if (auth.userId) {
      return true;
    } else {
      return false;
    }
  }

  function onLogout() {
    setAuth({});
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    message.success("Logged out successfully");
  }

  return (
    <Row>
      <Col
        span={6}
        style={{
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Text
          strong
          italic
          style={{
            color: "red",
            marginTop: 17,
            fontFamily: "Pattaya, sans-serif",
            fontSize: "20px",
          }}
        >
          Event Finder
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
            <Menu.Item key={item.key} style={{ marginRight: "5vw" }}>
              {item.label}
            </Menu.Item>
          ))}
          {isLoggedIn() ? (
            <>
              <Menu.Item key="saved" style={{ marginRight: "5vw" }}>
                <Link to={"/saved/" + auth.userId}>Saved</Link>
              </Menu.Item>
              <Menu.Item key="logout" style={{ marginRight: "5vw" }}>
                <Button onClick={() => onLogout()} type="primary">
                  <Link to="/">Logout</Link>
                </Button>
              </Menu.Item>
            </>
          ) : (
            <Menu.Item key="login" style={{ marginRight: "5vw" }}>
              <Button type="primary">
                <Link to="/login">Login</Link>
              </Button>
            </Menu.Item>
          )}
        </Menu>
      </Col>
    </Row>
  );
}
