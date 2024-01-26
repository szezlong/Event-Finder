//require('dotenv').config();
import React, { useState, useEffect, useRef } from 'react';
import { APIProvider, Map, useMap } from '@vis.gl/react-google-maps';
import trees from './trees.ts'; // Assuming 'trees' is a JavaScript file
// import EventPin from './event-pin.js';
import { MarkerClusterer } from '@googlemaps/markerclusterer';
import { AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps';
import { Button, Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const MAP_KEY = process.env.REACT_APP_GOOGLE_MAPS_MAP_KEY;

const MapComponent = () => {
  const [markers, setMarkers] = useState({});
  const [openPinKey, setOpenPinKey] = useState(null);
  const clusterer = useRef(null);

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
    <APIProvider apiKey={API_KEY}>
      <Map mapId={MAP_KEY} center={{ lat: 38.73, lng: -9.17 }} zoom={13}>
        <Markers points={trees} setMarkerRef={setMarkerRef} onPinClick={handlePinClick} openPinKey={openPinKey} />
      </Map>
    </APIProvider>
  );
};

const Markers = ({ points, onPinClick, openPinKey }) => {
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
      {points.map(point => (
        <AdvancedMarker
        position={point}
        key={point.key}
        onClick={() => {
          setSelectedPoint(point)
        }}
        ref={(marker) => setMarkerRef(marker, point.key)}
      >
        <Pin background={"purple"} borderColor={"red"} glyphColor={"red"} />
      </AdvancedMarker>
      ))}
        {
        selectedPoint &&
        <InfoWindow
            position={selectedPoint}
            minWidth={200}
            onCloseClick={() => {
                setSelectedPoint(null)
            }}
        >
            <div>
            <Tooltip
                title={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu ante vel 
                sapien pulvinar pretium eget ut urna. Pellentesque pharetra urna non urna blandit, 
                et tristique dolor euismod. Ut a commodo mi. Morbi condimentum augue eu nisi hendrerit 
                ullamcorper. Sed porta facilisis facilisis. Nam mollis metus quis egestas tincidunt. 
                Vestibulum suscipit sapien nec ligula consequat, accumsan sodales odio faucibus. Mauris 
                finibus, velit ac lobortis fermentum, tortor justo vulputate turpis, id malesuada massa 
                magna ac felis. Pellentesque pellentesque viverra massa vel ullamcorper. Praesent nec mollis 
                ante. Suspendisse facilisis sem vel tellus consectetur rhoncus. Fusce aliquet lacinia sapien, 
                finibus mollis enim luctus et. Nulla dapibus facilisis ultrices. Duis odio mi, commodo vel ante vel, 
                pellentesque varius risus. Integer lacinia tempor justo non egestas. Fusce malesuada, orci eu eleifend semper, 
                augue odio facilisis orci, vitae accumsan diam orci sed erat. Suspendisse lobortis risus.`}
                overlayStyle={{
                    maxWidth: '400px',
                    maxHeight: '200px',
                    overflow: 'auto'
                    }}
            >
                <QuestionCircleOutlined style={{ fontSize: '16px', color: '#1890ff', cursor: 'pointer' }} />
            </Tooltip>
                <h3>{selectedPoint.name}</h3>
                <Button onClick={() => {
                    setAttending(!attending)
                    }}
                >
                    {!attending ? 'Attend' : 'Attendn\'t'}
                </Button>
            </div>
        </InfoWindow>
        }
    </>
  );
};

export default MapComponent;