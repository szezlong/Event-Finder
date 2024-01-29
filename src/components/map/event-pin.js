import React from "react";
import { Pin, AdvancedMarker, InfoWindow } from "@vis.gl/react-google-maps";
import { Tooltip, Button } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import formatDateTime from "../../helpers/functions/formatDateTime";
import { useAsyncFn } from "../../hooks/useAsync";
import { message } from "antd";
import { attendEvent } from "../../services/events";
import useAuth from "../../hooks/useAuth";

const EventPin = React.forwardRef(
  ({ point, position, onClick, setSelectedPoint, isSelected }, ref) => {
    const [attending, setAttending] = useState(false);
    const { auth, setAuth } = useAuth();

    function isLoggedIn() {
      if (auth.userId) {
        return true;
      } else {
        return false;
      }
    }

    const { execute: attendEventFn } = useAsyncFn(attendEvent);

    function onEventAttend() {
      console.log(localStorage.getItem("userId"));
      console.log(point.id);
      return attendEventFn({
        userId: localStorage.getItem("userId"),
        eventId: point.id,
      })
        .then((res) => {
          console.log(res);
          message.success({
            content: "Yay! Attending event!",
            duration: 5,
          });
        })
        .catch((err) => {
          console.log(err);
          message.error({
            content: "Oops! Something went terribly wrong.",
            duration: 5,
          });
        });
    }

    return (
      <>
        <AdvancedMarker
          ref={ref}
          position={{
            lat: parseFloat(point.address.latitude),
            lng: parseFloat(point.address.longitude),
          }}
          onClick={onClick}
        >
          <Pin background={"purple"} borderColor={"red"} glyphColor={"red"} />
        </AdvancedMarker>
        {isSelected && (
          <InfoWindow
            position={{
              lat: parseFloat(point.address.latitude),
              lng: parseFloat(point.address.longitude),
            }}
            minWidth={200}
            onCloseClick={() => {
              setSelectedPoint(null);
            }}
          >
            <div>
              <Tooltip
                title={point.description}
                overlayStyle={{
                  maxWidth: "400px",
                  maxHeight: "200px",
                  overflow: "auto",
                }}
              >
                <QuestionCircleOutlined
                  style={{
                    fontSize: "16px",
                    color: "#1890ff",
                    cursor: "pointer",
                  }}
                />
              </Tooltip>
              <h3>{point.name}</h3>
              <p>{point.address.street + " " + point.address.number}</p>
              <p>{point.address.postCode + ", " + point.address.city}</p>
              <p>{formatDateTime(point.date)}</p>
              {isLoggedIn() && (
                <Button
                  onClick={() => {
                    onEventAttend();
                    setAttending(!attending);
                  }}
                  disabled={attending}
                >
                  {!attending ? "Attend" : "Attending!"}
                </Button>
              )}
            </div>
          </InfoWindow>
        )}
      </>
    );
  }
);

export default EventPin;
