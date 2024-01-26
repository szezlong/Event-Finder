/*
// import React from 'react';
// import { AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps';
// import { Button } from 'antd';
// import type { Marker } from '@googlemaps/markerclusterer';

// type Point = google.maps.LatLngLiteral & { key: string } & { name: string };

// type EventPinProps = {
//   point: Point;
//   setMarkerRef: (marker: Marker | null, key: string) => void;
//   onPinClick: (key: string) => void;
//   isOpen: boolean;
// };

// const EventPin: React.FC<EventPinProps> = ({ point, setMarkerRef, onPinClick, isOpen }) => {
//   return (
//     <>
//       <AdvancedMarker
//         position={point}
//         key={point.key}
//         onClick={() => onPinClick(point.key)}
//         ref={(marker) => setMarkerRef(marker, point.key)}
//       >
//         <Pin background={"purple"} borderColor={"red"} glyphColor={"red"} />
//       </AdvancedMarker>

//       {isOpen && (
//         <InfoWindow
//           position={point}
//           minWidth={200}
//           onCloseClick={() => {
            
//           }}
//         >
//           <div>
//             <h3>{point.name}</h3>
//             <Button>ADD Event</Button>
//           </div>
//         </InfoWindow>
//       )}
//     </>
//   );
// };

// export default EventPin;


// // import { InfoWindow, Pin } from '@vis.gl/react-google-maps';

// // import React, { useState } from 'react';
// // import { AdvancedMarker, MarkerProps } from '@vis.gl/react-google-maps';
// // import type {Marker} from '@googlemaps/markerclusterer';
// // import { Button } from 'antd';


// // interface EventPinProps {
// //     point: {
// //       name: string;
// //       lat: number;
// //       lng: number;
// //       key: string;
// //     };
// //   }

// // const EventPin: React.FC<EventPinProps> = ({ point }) => {
// //   const [isFlagSet, setIsFlagSet] = useState(false);

// //   const [open, setOpen] = useState(false);

// //   return (
// //     <>
// //         <AdvancedMarker
// //             position={point}
// //             onClick={() => setOpen(true)}
// //             key={point.key}
// //             // ref={marker => setMarkerRef(marker, point.key)}
// //             >
// //             <Pin
// //                 background={"purple"}
// //                 borderColor={"red"}
// //                 glyphColor={"red"}
// //             />
// //         </AdvancedMarker>
// //         {
// //           open &&
// //             <InfoWindow
// //               position={point}
// //               minWidth={200}
// //             >
// //               <div>
// //                 <h3>{point.name}</h3>
// //                 <Button>
// //                   ADD Event
// //                 </Button>
// //               </div>
// //             </InfoWindow>
// //         }
// //     </>
// //   );
// // };

// // export default EventPin;

*/