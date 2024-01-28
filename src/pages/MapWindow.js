import React, {useState} from "react";
import MapComponent from "../components/map/map-component";
import { Button, Modal, Form, Input, DatePicker, message } from "antd";
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

setDefaults({
  key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, // Your API key here.
  language: "en", // Default language for responses.
  region: "es", // Default region for responses.
});

//const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

export default function MapWindow() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const { loading, error, execute: addEventFn } = useAsyncFn(addEvent)

  const onFinish = async (values) => {
    console.log("Received values:", values);
  
    // Construct the address string
    const address = `${values.street} ${values.number}, ${values.postCode} ${values.city}, ${values.country}`;
    fromAddress(address)
    .then(({ results }) => {
      const { lat, lng } = results[0].geometry.location;
      return addEventFn({
        name:values.name,
        description: values.description,
        street:values.street,
        number:values.number,
        postCode:values.postCode,
        city:values.city,
        country:values.country,
        lat,
        lng,
        date: values.dateTime.format('YYYY-MM-DDTHH:mm:ss')
      })
        .then(res => {
          message.success({
            content: "Successfully added your event!",
            duration: 5,
          })
          setIsModalVisible(false);
        }).catch(() => {
          console.log("ERROR")
        })
    })
    .catch(() => {
      message.error({
        content: "Oops! It seems there's an issue with the provided address. Please double-check and try again.",
        duration: 5,
      });
    });
    
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>Mapa</h1>
      <div style={{ alignSelf: "flex-end", marginBottom: "10px", marginRight: "10px" }}>
        <Button type="primary" onClick={showModal}>
          ADD EVENT
        </Button>
      </div>
      <div style={{ height: "70vh", width: "100%" }}>
        <MapComponent />
      </div>

      <Modal
        title="Add event"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          onFinish={onFinish}
          labelCol={{ span: 6 }}  // Długość etykiety dla większości pól
          wrapperCol={{ span: 16 }}  // Długość pola formularza
        >
          <Form.Item label="Name" name="name" rules={[{ required: true, message: "Field required" }]}>
            <Input placeholder="Name of the event" />
          </Form.Item>
          <Form.Item label="Description" name="description" rules={[{ required: true, message: "Field required" }]} >
            <Input.TextArea placeholder="Description of the event" />
          </Form.Item>
          <Form.Item label="Street" name='street' rules={[{ required: true, message: "Field required" }]} >
            <Input placeholder="Street name" />
          </Form.Item>
          <Form.Item label="Street number" name='number' rules={[{ required: true, message: "Field required" }]} >
            <Input placeholder="Street number" />
          </Form.Item>
          <Form.Item label="Post code" name='postCode' rules={[{ required: true, message: "Field required" }]}>
            <Input placeholder="Post code" />
          </Form.Item>
          <Form.Item label="City" name='city' rules={[{ required: true, message: "Field required" }]} >
            <Input placeholder="City" />
          </Form.Item>
          <Form.Item label="Country" name='country' rules={[{ required: true, message: "Field required" }]} >
            <Input placeholder="Country" />
          </Form.Item>
          <Form.Item label="Date and time" name="dateTime" rules={[{ required: true, message: "Field required" }]}>
            <DatePicker showTime format="YYYY-MM-DD HH:mm" />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Add
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
