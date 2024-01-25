import React from "react";
import { Row, Col, Input, Button, Image, Typography } from "antd";

const { Title, Text, Link } = Typography;

const Login = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "10px",
        marginTop: 50,
      }}
    >
      <Row gutter={16}>
        <Col
          xs={{ span: 24 }}
          md={{ span: 12 }}
          style={{
            minWidth: "400px",
            paddingInline: 20,
          }}
        >
          <Title level={3} style={{ marginBottom: 5, display: "flex" }}>
            Login
          </Title>
          <div style={{ display: "flex" }}>
            <Text>Don't have an account yet?</Text>
            <Text underline style={{ marginLeft: 10 }}>
              <Link to="/register">Sign Up</Link>
            </Text>
          </div>
          <Text
            strong
            style={{ display: "flex", marginTop: 25, marginBottom: 5 }}
          >
            Email Address
          </Text>
          <Input size="large" placeholder="your@address.com" />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "5px",
              marginTop: 20,
            }}
          >
            <Text strong>Password</Text>
            <Text underline>
              <Link to="/reset">Forgot Password?</Link>
            </Text>
          </div>
          <Input.Password
            size="large"
            placeholder="Enter at least 6 characters"
          />
          <Button
            type="primary"
            block
            size="large"
            style={{
              marginTop: 35,
              fontSize: "12px",
              fontWeight: "bold",
              letterSpacing: "1px",
            }}
          >
            LOGIN
          </Button>
        </Col>
        <Col
          xs={{ span: 0 }}
          md={{ span: 12 }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src="https://img.freepik.com/free-vector/peace-mind-concept-illustration_114360-7308.jpg?w=740&t=st=1706215977~exp=1706216577~hmac=b6040ec4a16cc04b8bbc0cb57a1494a00d1359af1d2612a71745a86fc181ba06"
            alt="Vector image of a man sitting by his laptop"
            style={{ maxHeight: "500px", padding: 20 }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Login;
