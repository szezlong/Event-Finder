import React, { useState } from "react";
import MapComponent from "../components/map/map-component";
import {
  Button,
  Modal,
  Form,
  Input,
  DatePicker,
  message,
  Typography,
} from "antd";
import { ReloadOutlined } from "@ant-design/icons";
import { Loader } from "@googlemaps/js-api-loader";
//import { GoogleMap, LoadScript, Marker } from "@vis.gl/react-google-maps";
import {
  setKey,
  setDefaults,
  setLanguage,
  setRegion,
  fromAddress,
  fromLatLng,
  fromPlaceId,
  setLocationType,
  geocode,
  RequestType,
} from "react-geocode";
import { addEvent } from "../services/events";
import { useAsyncFn } from "../hooks/useAsync";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
const { Title, Text } = Typography;

setDefaults({
  key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, // Your API key here.
  language: "en", // Default language for responses.
  region: "es", // Default region for responses.
});

//const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

export default function MapWindow() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { auth } = useAuth();

  const navigate = useNavigate();

    function isLoggedIn() {
      if (auth.userId) {
        return true;
      } else {
        return false;
      }
    }

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const { loading, error, execute: addEventFn } = useAsyncFn(addEvent);

  const onFinish = async (values) => {
    console.log("Received values:", values);

    // Construct the address string
    const address = `${values.street} ${values.number}, ${values.postCode} ${values.city}, ${values.country}`;
    fromAddress(address)
      .then(({ results }) => {
        const { lat, lng } = results[0].geometry.location;
        return addEventFn({
          name: values.name,
          description: values.description,
          street: values.street,
          number: values.number,
          postCode: values.postCode,
          city: values.city,
          country: values.country,
          lat,
          lng,
          date: values.dateTime.format("YYYY-MM-DDTHH:mm:ss"),
        })
          .then((res) => {
            message.success({
              content: "Successfully added your event!",
              duration: 5,
            });
            setIsModalVisible(false);
          })
          .catch(() => {
            console.log("ERROR");
          });
      })
      .catch(() => {
        message.error({
          content:
            "Oops! It seems there's an issue with the provided address. Please double-check and try again.",
          duration: 5,
        });
      });
  };

  const [refresh, setRefresh] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingInline: 120,
        paddingBottom: 100,
      }}
    >
      <Title
        level={3}
        style={{
          marginBottom: 5,
          display: "flex",
          fontFamily: "Barlow Condensed, sans-serif",
          //color: "#fff",
          //textShadow:"2px 2px 2px #000, -2px -2px 2px #000, 2px -2px 2px #000, -2px 2px 2px #000",
          fontSize: "30px",
        }}
      >
        Discover Events Near You!
      </Title>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: 750,
          marginTop: 10,
        }}
      >
        <Text style={{ textAlign: "justify" }}>
          Navigate the map to find events worldwide. Click on pins to discover
          event details, including name, date, and description. Interested in
          attending? Save events for later. Plan your itinerary, and share
          exciting finds with friends!
        </Text>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: 20,
          }}
        >
          <div style={{ marginRight: 40, marginTop: 5 }}>
            <Text strong>Can't find what you are looking for?</Text>
          </div>
          <Button
            type="primary"
            onClick={(e) => {
              auth.userId ?
              showModal()
              :
              navigate('/login')
            }}
            style={{
              background: "linear-gradient(to right, #1677fe, #5ddfa7)",
              border: "none",
              width: 200,
            }}
          >
            {auth.userId ? "Create New Event!" : "Log in to create your Event!"}
          </Button>
          <div style={{marginLeft: 10}}>
          <Button
            style={{ marginRight: "10px" }}
            type="primary"
            icon={<ReloadOutlined />}
            onClick={() => {
              setRefresh(!refresh);
            }}
          ></Button>

          </div>
        </div>
      </div>

      <div style={{ height: "70vh", width: "100%", marginTop: 30 }}>
        <MapComponent refresh={refresh} />
      </div>

      <Modal
        title="Create a new event!"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          onFinish={onFinish}
          labelCol={{ span: 6 }} // Długość etykiety dla większości pól
          wrapperCol={{ span: 16 }} // Długość pola formularza
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Field required" }]}
          >
            <Input placeholder="Name of the event" />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: "Field required" }]}
          >
            <Input.TextArea placeholder="Description of the event" />
          </Form.Item>
          <Form.Item
            label="Street"
            name="street"
            rules={[{ required: true, message: "Field required" }]}
          >
            <Input placeholder="Street name" />
          </Form.Item>
          <Form.Item
            label="Street number"
            name="number"
            rules={[{ required: true, message: "Field required" }]}
          >
            <Input placeholder="Street number" />
          </Form.Item>
          <Form.Item
            label="Post code"
            name="postCode"
            rules={[{ required: true, message: "Field required" }]}
          >
            <Input placeholder="Post code" />
          </Form.Item>
          <Form.Item
            label="City"
            name="city"
            rules={[{ required: true, message: "Field required" }]}
          >
            <Input placeholder="City" />
          </Form.Item>
          <Form.Item
            label="Country"
            name="country"
            rules={[{ required: true, message: "Field required" }]}
          >
            <Input placeholder="Country" />
          </Form.Item>
          <Form.Item
            label="Date and time"
            name="dateTime"
            rules={[{ required: true, message: "Field required" }]}
          >
            <DatePicker showTime format="YYYY-MM-DD HH:mm" />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <Button
              type="primary"
              block
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
              ADD
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
