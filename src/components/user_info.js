import {
  Layout,
  Row,
  Col,
  Card,
  Typography,
  Avatar,
  Flex,
  Menu,
  Divider,
} from "antd";
import { SmileTwoTone } from "@ant-design/icons";
import { user_items } from "../helpers/user_menu";

const { Header, Content, Sider } = Layout;
const { Title, Text } = Typography;

const UserInfo = () => {
  return (
    <Sider
      width={270}
      style={{ backgroundColor: "rgba(255, 255, 255, 0)", marginTop: 20 }}
      breakpoint="lg"
      collapsedWidth="0"
    >
      <Card style={{marginLeft: 30}}>
        <Flex horizontal>
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
              Username
            </Title>
            <Text style={{ textAlign: "left" }}>email@example.com</Text>
          </div>
        </Flex>
        <Divider style={{ marginBottom: 0, marginTop: 15 }} />
        <Menu
          defaultSelectedKeys={["saved"]}
          defaultOpenKeys={["saved"]}
          mode="inline"
          items={user_items}
          inlineCollapsed={true}
          style={{ border: "none" }}
        />
      </Card>
    </Sider>
  );
};

export default UserInfo;
