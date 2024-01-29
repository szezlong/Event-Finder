import React, { useState, useEffect, useRef } from "react";
import { APIProvider, Map, useMap } from "@vis.gl/react-google-maps";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import { Pin } from "@vis.gl/react-google-maps";
import useFetchEvents from "../../helpers/functions/useFetchEvents.js";
import EventPin from "./event-pin.js";

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const MAP_KEY = process.env.REACT_APP_GOOGLE_MAPS_MAP_KEY;

const MapComponent = (refresh) => {
  const [markers, setMarkers] = useState({});
  const [openPinKey, setOpenPinKey] = useState(null);

  const { events, loading } = useFetchEvents(refresh);

  const setMarkerRef = (marker, key) => {
    if (marker && markers[key]) return;
    if (!marker && !markers[key]) return;

    setMarkers((prev) => {
      if (marker) {
        return { ...prev, [key]: marker };
      } else {
        const newMarkers = { ...prev };
        delete newMarkers[key];
        return newMarkers;
      }
    });
  };

  const handlePinClick = (key) => {
    setOpenPinKey(key);
  };

  return (
    !loading && (
      <APIProvider apiKey={API_KEY}>
        <Map mapId={MAP_KEY} center={{ lat: 38.73, lng: -9.17 }} zoom={13}>
          <Markers
            points={events}
            setMarkerRef={setMarkerRef}
            onPinClick={handlePinClick}
            openPinKey={openPinKey}
          />
        </Map>
      </APIProvider>
    )
  );
};

const Markers = ({ points }) => {
  const map = useMap();
  const [markers, setMarkers] = useState({});
  const clusterer = useRef(null);

  // Initialize MarkerClusterer
  useEffect(() => {
    if (!map) return;
    if (!clusterer.current) {
      clusterer.current = new MarkerClusterer({ map });
    }
  }, [map]);

  // Update markers
  useEffect(() => {
    clusterer.current?.clearMarkers();
    clusterer.current?.addMarkers(Object.values(markers));
  }, [markers]);

  const setMarkerRef = (marker, key) => {
    if (marker && markers[key]) return;
    if (!marker && !markers[key]) return;

    setMarkers((prev) => {
      if (marker) {
        return { ...prev, [key]: marker };
      } else {
        const newMarkers = { ...prev };
        delete newMarkers[key];
        return newMarkers;
      }
    });
  };

  const [selectedPoint, setSelectedPoint] = useState(false);
  const [attending, setAttending] = useState(false);

  return (
    <>
      {points.map((point) => (
        <EventPin
          key={point.id}
          point={point}
          position={{
            lat: parseFloat(point.address.latitude),
            lng: parseFloat(point.address.longitude),
          }}
          setSelectedPoint={setSelectedPoint}
          onClick={() => {
            setSelectedPoint(point);
          }}
          isSelected={selectedPoint == point}
          ref={(marker) => setMarkerRef(marker, point.id)}
        >
          <Pin background={"purple"} borderColor={"red"} glyphColor={"red"} />
        </EventPin>
      ))}
    </>
  );
};

export default MapComponent;
