import React from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Input,
  Button,
  Image,
  Typography,
  Form,
  message,
} from "antd";

import { useNavigate } from "react-router-dom";
import { login } from "../services/account";
import { useAsyncFn } from "../hooks/useAsync";
import useAuth from "../hooks/useAuth";

const { Title, Text } = Typography;

const Login = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { execute: loginFn } = useAsyncFn(login);
  const { setAuth } = useAuth();

  const onFinish = async (values) => {
    try {
      return loginFn(values)
        .then((response) => {
          if (response) {
            const userId = response?.userId;
            const token = response?.token;
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("token", token);
            localStorage.setItem("userId", userId);

            setAuth({ userId, token });
            console.log(localStorage);
            navigate("/");
          }
        })
        .catch((error) => {
          console.error(error);
          message.error("Login failed. Please try again.");
        });
    } catch (error) {
      console.log("Tried: ", values);
      console.error("Error when login:", error);
      message.error("An error occurred. Please try again later.");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "10px",
        marginTop: 50,
      }}
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
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
          <div style={{ display: "flex", marginBottom: 25 }}>
            <Text>Don't have an account yet?</Text>
            <Text underline style={{ marginLeft: 10 }}>
              <Link to="/register">Sign Up</Link>
            </Text>
          </div>

          <Text strong style={{ display: "flex", marginBottom: 5 }}>
            Email Address
          </Text>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email address!",
              },
            ]}
            style={{ marginBottom: 20 }}
          >
            <Input size="large" placeholder="your@address.com" />
          </Form.Item>

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
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "You have not provided a password!",
              },
            ]}
            style={{ marginBottom: 20 }}
          >
            <Input.Password
              size="large"
              placeholder="Enter at least 6 characters"
            />
          </Form.Item>

          <Button
            type="primary"
            block
            size="large"
            htmlType="submit"
            style={{
              marginTop: 15,
              fontSize: "12px",
              fontWeight: "bold",
              letterSpacing: "1px",
              background: "linear-gradient(to right, #1677fe, #5ddfa7)",
              border: "none",
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
            alt="Vector image of a woman siting by her laptop"
            style={{ maxHeight: "500px", padding: 20 }}
          />
        </Col>
      </Row>
    </Form>
  );
};

export default Login;
