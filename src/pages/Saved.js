import { Layout, Card, Typography, Flex, Divider, List } from "antd";
import { ClockCircleOutlined, EnvironmentOutlined } from "@ant-design/icons";

import UserInfo from "../components/user_info";
import HeartButton from "../helpers/heart_button";

import { useUser } from "../contexts/UserContext";
import formatDateTime from "../helpers/functions/formatDateTime";

const { Content } = Layout;
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
    <Card bordered={false} style={{ display: "flex", flexDirection: "column" }}>
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
      <div style={{ display: "flex" }}>
        <Text>
          <ClockCircleOutlined style={{ marginRight: 5 }} />
          {formatDateTime(date)}
        </Text>
      </div>
      <Divider style={{ marginTop: 10, marginBottom: 5 }} />

      <div style={{ display: "flex" }}>
        <Text style={{ textAlign: "left" }}>
          <EnvironmentOutlined style={{ marginRight: 5 }} />
          {address.street +
            " " +
            address.number +
            ", " +
            address.postCode +
            ", " +
            address.city}
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

function Events({ user }) {
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
        dataSource={user.events}
        renderItem={(event) => (
          <List.Item>
            <EventCard
              name={event.name}
              date={event.date}
              address={event.address}
              description={event.description}
            />
          </List.Item>
        )}
      />
    </Content>
  );
}

export function Saved() {
  const { user } = useUser();
  return (
    <Layout style={{ paddingTop: 20, paddingBottom: 50 }}>
      <UserInfo user={user} />
      {user.events ? <Events user={user} /> : <></>}
    </Layout>
  );
}
