import {
  Layout,
  Card,
  Typography,
  Avatar,
  Flex,
  Menu,
  Divider,
  message,
} from "antd";
import { Link } from "react-router-dom";
import { LogoutOutlined } from "@ant-design/icons";
import { SmileTwoTone } from "@ant-design/icons";
import { user_items } from "../helpers/user_menu";
import useAuth from "../hooks/useAuth";

const { Sider } = Layout;
const { Title, Text } = Typography;

export default function UserInfo({ user }) {
  const { setAuth } = useAuth();

  function onLogout() {
    setAuth({});
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    message.success("Logged out successfully");
  }

  return (
    <Sider
      width={300}
      style={{ backgroundColor: "rgba(255, 255, 255, 0)", marginTop: 20 }}
      breakpoint="lg"
      collapsedWidth="0"
    >
      <Card style={{ marginLeft: 30 }}>
        <Flex horizontal={"true"}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 40,
            }}
          >
            <Avatar
              size="large"
              style={{ backgroundColor: "#e6f7ff" }}
              icon={<SmileTwoTone />}
            />
          </div>
          <div style={{ marginLeft: 20 }}>
            <Title
              level={3}
              style={{
                marginTop: 0,
                marginBottom: 0,
                textAlign: "left",
              }}
            >
              {user.firstname}
            </Title>
            <Text style={{ textAlign: "left" }}>{user.email}</Text>
          </div>
        </Flex>
        <Divider style={{ marginBottom: 0, marginTop: 15 }} />
        <Menu
          defaultSelectedKeys={["saved"]}
          defaultOpenKeys={["saved"]}
          mode="inline"
          inlineCollapsed={true}
          style={{ border: "none" }}
        >
          {user_items.map((item) => (
            <Menu.Item
              key={item.key}
              style={{ marginRight: "5vw" }}
              icon={item.icon}
            >
              {item.label}
            </Menu.Item>
          ))}
          <Menu.Item
            key="logout"
            icon={<LogoutOutlined style={{ color: "red" }} />}
            onClick={() => onLogout()}
          >
            <Link to="/">
              <Text
                underline
                style={{ display: "flex", marginLeft: 15, color: "red" }}
              >
                Log out
              </Text>
            </Link>
          </Menu.Item>
        </Menu>
      </Card>
    </Sider>
  );
}
