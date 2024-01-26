import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Input, Button, Image, Typography } from "antd";

const { Title, Text } = Typography;

const Register = () => {
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
            Register
          </Title>
          <div style={{ display: "flex" }}>
            <Text>Already have an account?</Text>
            <Text underline style={{ marginLeft: 10 }}>
              <Link to="/login">Login</Link>
            </Text>
          </div>
          <Text
            strong
            style={{ display: "flex", marginTop: 25, marginBottom: 5 }}
          >
            Email Address
          </Text>
          <Input size="large" placeholder="your@address.com" />

          <Text
            strong
            style={{ display: "flex", marginTop: 15, marginBottom: 5 }}
          >
            Password
          </Text>
          <Input.Password
            size="large"
            placeholder="Enter at least 6 characters"
          />
          <Text
            strong
            style={{ display: "flex", marginTop: 15, marginBottom: 5 }}
          >
            Repeat your password
          </Text>
          <Input.Password size="large" />
          <Button
            type="primary"
            block
            size="large"
            style={{
              marginTop: 35,
              fontSize: "12px",
              fontWeight: "bold",
              letterSpacing: "1px",
              background: "linear-gradient(to right, #1677fe, #5ddfa7)",
              border: "none",
            }}
          >
            SIGN UP
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
            src="https://img.freepik.com/free-vector/around-world-concept-illustration_114360-3623.jpg?w=740&t=st=1706229107~exp=1706229707~hmac=b233aa7af086e7c56c7c184d3cee8af2aa5559df6f3adff5fd709586b168c09f"
            alt="Vector image of a woman siting by her laptop"
            style={{ maxHeight: "550px", padding: 20 }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Register;
