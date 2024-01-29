import React from "react";
import { Row, Col, Typography, Divider } from "antd";

const { Text } = Typography;

export default function FooterContainer() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Row justify="center" align="top" style={{ width: 900 }}>
        <Col
          span={8}
          style={{ display: "flex", alignItems: "center", height: "100%" }}
        >
          <Text
            style={{
              color: "black",
              marginTop: 15,
              fontFamily: "Pattaya, sans-serif",
              fontSize: "25px",
            }}
          >
            Event Finder
          </Text>
          <Text style={{ marginLeft: 5, fontSize: "10px" }}>
            ©{new Date().getFullYear()}
          </Text>
        </Col>
        <Col span={6}>
          <Row>
            <Text
              strong
              style={{
                fontFamily: "Barlow Condensed, sans-serif",
                fontSize: "15px",
              }}
            >
              AUTHORS
            </Text>
          </Row>
          <Row style={{ marginRight: "80%" }}>
            <Divider
              style={{
                marginTop: 3,
                marginBottom: 10,
                border: "1px solid #5ddfa7",
              }}
            />
          </Row>
          <Row>
            <Text strong>Julia Akahori</Text>
          </Row>
          <Row>
            <Text strong>Ignacy Bok</Text>
          </Row>
          <Row>
            <Text strong>Weronika Smardz</Text>
          </Row>
        </Col>
        <Col span={4}>
          <Row>
            <Text
              strong
              style={{
                fontFamily: "Barlow Condensed, sans-serif",
                fontSize: "15px",
              }}
            >
              STUDENT NUMBERS
            </Text>
          </Row>
          <Row style={{ marginRight: "70%" }}>
            <Divider
              style={{
                marginTop: 3,
                marginBottom: 10,
                border: "1px solid #5ddfa7",
              }}
            />
          </Row>
          <Row>
            <Text strong>30012965</Text>
          </Row>
          <Row>
            <Text strong>30012964</Text>
          </Row>
          <Row>
            <Text strong>30012958</Text>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
