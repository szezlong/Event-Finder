import React from "react";
import { Typography } from "antd";

const { Title, Text } = Typography;
const img_src =
  "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const Banner = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${img_src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "12vw",
    position: "relative",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0))", // Adjust the alpha channel for transparency
  };

  return (
    <div style={backgroundImageStyle}>
      <div style={overlayStyle}></div>
      <div style={{ position: "relative", zIndex: 1 }}>
        <Text
          style={{
            fontFamily: "Pattaya, sans-serif",
            color: "#ff0000",
            textShadow:
              "2px 2px 2px #000, -2px -2px 2px #000, 2px -2px 2px #000, -2px 2px 2px #000",
            fontSize: "30px",
          }}
        >
          Explore and stay updated on exciting happenings in Your area
        </Text>
        <br/>
        <Text
          style={{
            fontFamily: "Barlow Condensed, sans-serif",
            color: "#fff",
            textShadow:
              "2px 2px 2px #000, -2px -2px 2px #000, 2px -2px 2px #000, -2px 2px 2px #000",
            fontSize: "60px",
          }}
        >
          Discover an event near YOU!
        </Text>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <div className="titleheader">
        <Banner />
      </div>
    </div>
  );
}
