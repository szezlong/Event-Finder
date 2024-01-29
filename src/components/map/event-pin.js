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

const padZeroIfNeeded = (eventDate) => {
  if (eventDate.length === 5) {
    eventDate.push(0);
  }
  return eventDate.map((value, index) => (index === 1 ? value - 1 : value));
};

const calculateEventColor = (eventDate) => {
  const paddedEventDate = padZeroIfNeeded(eventDate);
  const currentDate = new Date();
  const eventDateTime = new Date(...paddedEventDate);
  const timeDifference = eventDateTime - currentDate;
  const timeDifferenceInDays = timeDifference / (1000 * 60 * 60 * 24);

  if (timeDifferenceInDays < 0) {
    return { background: "hsl(0, 0%, 75%)" };
  } else if (timeDifferenceInDays <= 3) {
    return { background: "red" };
  } else if (timeDifferenceInDays <= 7) {
    return { background: "orange" };
  } else if (timeDifferenceInDays <= 30) {
    return { background: "yellow" };
  } else {
    return { background: "hsl(120, 73%, 75%)" };
  }
};

const EventPin = React.forwardRef(
  ({ point, onClick, setSelectedPoint, isSelected }, ref) => {
    const [attending, setAttending] = useState(false);
    const { auth } = useAuth();
    const { background } = calculateEventColor(point.date);

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
          <Pin
            background={background}
            borderColor={"grey"}
            glyphColor={"black"}
          />
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
