import React, { useState, useEffect } from "react";
import { Typography } from "antd";
import SearchBar from "../components/search_bar";

const { Title, Text } = Typography;

const images = [
  "https://images.pexels.com/photos/3394225/pexels-photo-3394225.jpeg",
  "https://images.pexels.com/photos/2897462/pexels-photo-2897462.jpeg",
  "https://images.pexels.com/photos/1652353/pexels-photo-1652353.jpeg",
];

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const backgroundImageStyle = {
    backgroundImage: `url(${images[currentImage]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "10vw",
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
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
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

const absoluteStyle = {
  backgroundColor: "white",
  position: "absolute",
  bottom: "200px",
  left: "50%",
  transform: "translateX(-50%)",
  width: "40vw",
  padding: "25px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  boxSizing: "border-box",
};

export default function Home() {
  return (
    <div>
      <Banner />
      <div style={absoluteStyle}>
        <SearchBar />
      </div>
    </div>
  );
}
