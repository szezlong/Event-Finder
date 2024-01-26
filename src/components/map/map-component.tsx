// import React, {useEffect, useState, useRef} from 'react';

// import {
//   APIProvider,
//   Map,
//   useMap,
//   AdvancedMarker,
//   Pin,
//   InfoWindow
// } from '@vis.gl/react-google-maps';
// import {MarkerClusterer} from '@googlemaps/markerclusterer';
// import type {Marker} from '@googlemaps/markerclusterer';
// import trees from './trees.ts';
// import EventPin from './event-pin.tsx';
// import { Button } from 'antd';

// const API_KEY =
//   globalThis.REACT_APP_GOOGLE_MAPS_API_KEY ?? (process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string);
// const MAP_KEY =
//   globalThis.REACT_APP_GOOGLE_MAPS_MAP_KEY ?? (process.env.REACT_APP_GOOGLE_MAPS_MAP_KEY as string);

// const MapComponent = () => {
//   const [markers, setMarkers] = useState<{ [key: string]: Marker }>({});
//   const clusterer = useRef<MarkerClusterer | null>(null);

//   const setMarkerRef = (marker: Marker | null, key: string) => {
//     if (marker && markers[key]) return;
//     if (!marker && !markers[key]) return;

//     setMarkers(prev => {
//       if (marker) {
//         return {...prev, [key]: marker};
//       } else {
//         const newMarkers = {...prev};
//         delete newMarkers[key];
//         return newMarkers;
//       }
//     });
//   };
  
//   return(
//   <APIProvider apiKey={API_KEY}>
//     <Map
//       mapId={MAP_KEY}
//       center={{lat: 38.73, lng: -9.17}}
//       zoom={13}>
//       <Markers points={trees} />
//     </Map>
//   </APIProvider>
//   );
//   };

// type Point = google.maps.LatLngLiteral & {key: string} & {name: string};
// type Props = {points: Point[]};

// const Markers = ({points}: Props) => {
//   const map = useMap();
//   const [markers, setMarkers] = useState<{[key: string]: Marker}>({});
//   const clusterer = useRef<MarkerClusterer | null>(null);

//   // Initialize MarkerClusterer
//   useEffect(() => {
//     if (!map) return;
//     if (!clusterer.current) {
//       clusterer.current = new MarkerClusterer({map});
//     }
//   }, [map]);

//   // Update markers
//   useEffect(() => {
//     clusterer.current?.clearMarkers();
//     clusterer.current?.addMarkers(Object.values(markers));
//   }, [markers]);

//   const setMarkerRef = (marker: Marker | null, key: string) => {
//     if (marker && markers[key]) return;
//     if (!marker && !markers[key]) return;

//     setMarkers(prev => {
//       if (marker) {
//         return {...prev, [key]: marker};
//       } else {
//         const newMarkers = {...prev};
//         delete newMarkers[key];
//         return newMarkers;
//       }
//     });
//   };

//   const [selectedPoint, setSelectedPoint] = useState(null);

//   return (
//     <>
//       {points.map(point => (
//         <AdvancedMarker
//         position={point}
//         key={point.key}
//         onClick={() => {
//           setSelectedPoint(null)
//         }}
//         ref={(marker) => setMarkerRef(marker, point.key)}
//       >
//         <Pin background={"purple"} borderColor={"red"} glyphColor={"red"} />
//       </AdvancedMarker>
//       ))}
//     </>
//   );
// };

// export default MapComponent;

// // import React, { useState, useEffect, useRef } from 'react';
// // import { APIProvider, Map, useMap } from '@vis.gl/react-google-maps';
// // import type { Marker } from '@googlemaps/markerclusterer';
// // import trees from './trees.ts';
// // import EventPin from './event-pin.tsx';
// // import { MarkerClusterer } from '@googlemaps/markerclusterer';

// // const API_KEY = globalThis.REACT_APP_GOOGLE_MAPS_API_KEY ?? (process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string);
// // const MAP_KEY = globalThis.REACT_APP_GOOGLE_MAPS_MAP_KEY ?? (process.env.REACT_APP_GOOGLE_MAPS_MAP_KEY as string);

// // const MapComponent = () => {
// //   const [markers, setMarkers] = useState<{ [key: string]: Marker }>({});
// //   const [openPinKey, setOpenPinKey] = useState<string | null>(null);
// //   const clusterer = useRef<MarkerClusterer | null>(null);

// //   const setMarkerRef = (marker: Marker | null, key: string) => {
// //     if (marker && markers[key]) return;
// //     if (!marker && !markers[key]) return;

// //     setMarkers((prev) => {
// //       if (marker) {
// //         return { ...prev, [key]: marker };
// //       } else {
// //         const newMarkers = { ...prev };
// //         delete newMarkers[key];
// //         return newMarkers;
// //       }
// //     });
// //   };

// //   const handlePinClick = (key: string) => {
// //     setOpenPinKey(key);
// //   };

// //   return (
// //     <APIProvider apiKey={API_KEY}>
// //       <Map mapId={MAP_KEY} center={{ lat: 38.73, lng: -9.17 }} zoom={13}>
// //         <Markers points={trees} setMarkerRef={setMarkerRef} onPinClick={handlePinClick} openPinKey={openPinKey} />
// //       </Map>
// //     </APIProvider>
// //   );
// // };

// // type Point = google.maps.LatLngLiteral & { key: string } & { name: string };
// // type Props = {
// //   points: Point[];
// //   setMarkerRef: (marker: Marker | null, key: string) => void;
// //   onPinClick: (key: string) => void;
// //   openPinKey: string | null;
// // };

// // const Markers: React.FC<Props> = ({ points, onPinClick, openPinKey }) => {
// //   const map = useMap();
// //   const [markers, setMarkers] = useState<{[key: string]: Marker}>({});
// //   const clusterer = useRef<MarkerClusterer | null>(null);

// //   // Initialize MarkerClusterer
// //   useEffect(() => {
// //     if (!map) return;
// //     if (!clusterer.current) {
// //       clusterer.current = new MarkerClusterer({map});
// //     }
// //   }, [map]);

// //   // Update markers
// //   useEffect(() => {
// //     clusterer.current?.clearMarkers();
// //     clusterer.current?.addMarkers(Object.values(markers));
// //   }, [markers]);

// //   const setMarkerRef = (marker: Marker | null, key: string) => {
// //     if (marker && markers[key]) return;
// //     if (!marker && !markers[key]) return;

// //     setMarkers(prev => {
// //       if (marker) {
// //         return {...prev, [key]: marker};
// //       } else {
// //         const newMarkers = {...prev};
// //         delete newMarkers[key];
// //         return newMarkers;
// //       }
// //     });
// //   };

// //   const [isOpen, setIsOpen] = useState(false)

// //   return (
// //     <>
// //       {points.map((point) => (
// //         <EventPin
// //           key={point.key}
// //           point={point}
// //           setMarkerRef={setMarkerRef}
// //           onPinClick={onPinClick}
// //           isOpen={openPinKey === point.key}
// //           setIsOpen={setIsOpen}
// //         />
// //       ))}
// //     </>
// //   );
// // };

// // export default MapComponent;