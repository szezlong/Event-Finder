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
import {
  CheckCircleTwoTone,
  HeartTwoTone,
  SmileTwoTone,
} from "@ant-design/icons";
import { user_items } from "../helpers/user_menu";

const { Header, Content, Sider } = Layout;
const { Title, Text } = Typography;

const UserInfo = () => {
  return (
    <Sider
      width={300}
      style={{ backgroundColor: "rgba(255, 255, 255, 0)", marginTop: 20 }}
    >
      <Card>
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

const SavedEvents = () => {
  return (
    <Content style={{ padding: 10, marginLeft: 30 }}>
      <Title level={2}>Saved Events</Title>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Card title="Event 1" bordered={false}>
            Event details here
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Event 2" bordered={false}>
            Event details here
          </Card>
        </Col>
        {/* Add more cards for saved events here */}
      </Row>
    </Content>
  );
};

const Saved = () => {
  return (
    <Layout style={{ padding: "0 70px", paddingTop: 20, paddingBottom: 50 }}>
      <UserInfo />
      <SavedEvents />
    </Layout>
  );
};

export default Saved;
