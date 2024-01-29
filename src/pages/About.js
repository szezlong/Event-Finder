import React from "react";
import { Row, Col, Button, Image, Typography } from "antd";

const { Title, Text } = Typography;

const About = () => {
  return (
    <div style={{ marginBottom: 150 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "10px",
          marginTop: 5,
        }}
      >
        <Row gutter={16}>
          <Col
            style={{
              paddingInline: 20,
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Title level={3} style={{ marginBottom: 5, display: "flex" }}>
              Welcome to your Local Event Finder!
            </Title>
            <Text
              strong
              style={{
                display: "flex",
                marginTop: 25,
                marginBottom: 5,
                width: 450,
                textAlign: "justify",
                fontSize: 15,
              }}
            >
              Our Local Event Finder is your go-to platform for discovering
              exciting events happening in your area. With our user-friendly
              interface and comprehensive features, we strive to enhance your
              event-finding experience.
            </Text>
          </Col>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src="https://img.freepik.com/free-vector/location-review-concept-illustration_114360-4367.jpg?w=740&t=st=1706229634~exp=1706230234~hmac=5014e3b077fcd4a5ee9efb68b17ae558cc2bedff57bfa4b2c11fb80821d8cfca"
              alt="Vector image of a woman siting by her laptop"
              style={{ maxHeight: "350px", padding: 10 }}
            />
          </Col>
        </Row>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "10px",
          marginTop: 0,
        }}
      >
        <Row gutter={16}>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src="https://img.freepik.com/free-vector/garden-part-concept-illustration_114360-9599.jpg?w=996&t=st=1706229626~exp=1706230226~hmac=b1ff209711b6aba3f5379d275bbaec0890b89a4b51404f351d20668f153a5fb1"
              alt="Vector image of a woman siting by her laptop"
              style={{ maxWidth: "400px", padding: 10 }}
            />
          </Col>
          <Col
            style={{
              paddingInline: 20,
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Title level={3} style={{ marginBottom: 5, display: "flex" }}>
              Key Features:
            </Title>
            <Text
              strong
              style={{
                display: "flex",
                marginTop: 25,
                marginBottom: 5,
                width: 450,
                textAlign: "justify",
              }}
            >
              1. Personalized Experience: Enjoy a personalized experience by
              signing in and accessing exclusive features tailored to your
              preferences.
              <br />
              <br />
              2. Event Management: Seamlessly create, update, and delete events
              to ensure accurate and up-to-date event information for all users.
              <br />
              <br />
              3. Interactive Maps: Explore local events visually through our
              integration with Google Maps, allowing you to easily locate events
              based on your area of interest.
              <br />
              <br />
              4. RESTful API: Interact with our platform effortlessly using our
              RESTful API, enabling smooth client-server communication and
              integration with external applications.
            </Text>
          </Col>
        </Row>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "10px",
          marginTop: 5,
        }}
      >
        <Row gutter={16}>
          <Col
            style={{
              paddingInline: 20,
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Text
              strong
              style={{
                display: "flex",
                marginTop: 25,
                marginBottom: 5,
                width: 300,
                textAlign: "justify",
                fontSize: 15,
              }}
            >
              At Local Event Finder, we're committed to connecting you with the
              vibrant events happening near you. Start exploring today and make
              the most out of your local community!
            </Text>
          </Col>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src="https://img.freepik.com/free-vector/happy-hour-concept-illustration_114360-9092.jpg?w=996&t=st=1706229629~exp=1706230229~hmac=5081245b960c73064abcd70309e4777fa251dea2768c3d40190cd6d9d0f871cd"
              alt="Vector image of a woman siting by her laptop"
              style={{ maxHeight: "350px", padding: 10 }}
            />
          </Col>
        </Row>
      </div>
      <div style={{ padding: "20px" }}>
        <Button
          type="primary"
          block
          size="large"
          style={{
            maxWidth: 700,
            marginTop: 50,
            fontSize: "12px",
            fontWeight: "bold",
            letterSpacing: "1px",
            background: "linear-gradient(to right, #1677fe, #5ddfa7)",
            border: "none",
          }}
        >
          LET'S GET STARTED ! {/* Link to maps */}
        </Button>
      </div>
    </div>
  );
};

export default About;
