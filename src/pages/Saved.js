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
  List,
} from "antd";
import { ClockCircleOutlined, EnvironmentOutlined } from "@ant-design/icons";

import UserInfo from "../components/user_info";
import HeartButton from "../helpers/heart_button";

import { useUser } from "../contexts/UserContext";

const { Header, Content, Sider } = Layout;
const { Title, Text } = Typography;

const EventsTitle = () => {
  return (
    <Flex vertical style={{ marginBottom: 30 }}>
      <Title level={3} style={{ textAlign: "left", marginBottom: 0 }}>
        Saved Events
      </Title>
      <Text style={{ textAlign: "left" }}>
        Find your saved events and get ready to join them!
      </Text>
    </Flex>
  );
};

const EventCard = ({ name, date, address, description }) => {
  return (
    <Card bordered={false} style={{ display: "flex", flexDirection: "column"}}>
      <div
        style={{
          backgroundColor: "#5ddfa7",
          borderRadius: "5px",
          padding: "7px",
          marginBottom: 10,
        }}
      >
        <Text
          strong
          style={{
            fontFamily: "Barlow Condensed, sans-serif",
            color: "#fff",
            textShadow:
              "1px 1px 1px #000, -1px -1px 1px #000, 1px -1px 1px #000, -1px 1px 1px #000",
            fontSize: "25px",
          }}
        >
          {name}
        </Text>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "5px",
        }}
      >
        <Text>
          <ClockCircleOutlined style={{ marginRight: 5 }} />
          {date}
        </Text>
        <Text>
          <EnvironmentOutlined style={{ marginRight: 5 }} />
          {address}
        </Text>
      </div>
      <Divider style={{ marginTop: 10, marginBottom: 5 }} />
      <div style={{ display: "flex", marginTop: 7, textAlign: "justify" }}>
        <Text>{description}</Text>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
        }}
      >
        <HeartButton />
      </div>
    </Card>
  );
};

const MockupData = [
  {
    name: "Super Event no 1",
    date: "Date of the event",
    address: "Address of the event",
    description: "Details of the event, it's description perhaps. Lorem ipsum",
  },
  {
    name: "Super Event no 2",
    date: "Date of the event",
    address: "Address of the event",
    description: "Details of the event, it's description perhaps. Lorem ipsum",
  },
  {
    name: "Super Event no 3",
    date: "Date of the event",
    address: "Address of the event",
    description: "Details of the event, it's description perhaps. Lorem ipsum",
  },
];

const Events = () => {
  const {
    //userId,
    user,
    // firstname = user.firstname,
    // lastname = user.lastname,
    // email = user.email,
    // events = user.events,
  } = useUser();
  
  return (
    <Content style={{ padding: 0, marginInline: 60 }}>
      <EventsTitle />
      <List
        grid={{
          gutter: 20,
          xs: 1,
          sm: 1,
          md: 2,
          lg: 3,
          xl: 3,
          xxl: 3,
        }}
        dataSource={MockupData}
        renderItem={(item) => (
          <List.Item>
            <EventCard
              name={user.firstname}
              date={item.date}
              address={item.address}
              description={item.description}
            />
          </List.Item>
        )}
      />
    </Content>
  );
};

const Saved = () => {
  return (
    <Layout style={{ paddingTop: 20, paddingBottom: 50 }}>
      <UserInfo />
      <Events />
    </Layout>
  );
};

export default Saved;
