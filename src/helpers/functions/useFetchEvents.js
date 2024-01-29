import { useReducer, useEffect } from "react";
import axios from "axios";

const ACTIONS = {
  MAKE_REQUEST: "make-request",
  GET_DATA: "get-data",
  ERROR: "error",
};

const BASE_URL = "http://localhost:8080/events";

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { loading: true, events: [] };
    case ACTIONS.GET_DATA:
      return { ...state, loading: false, events: action.payload.events };
    case ACTIONS.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        events: [],
      };
    default:
      return state;
  }
}

export default function useFetchEvents(params) {
  const [state, dispatch] = useReducer(reducer, { events: [], loading: true });

  useEffect(() => {
    dispatch({ type: ACTIONS.MAKE_REQUEST });
    fetch(BASE_URL, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: ACTIONS.GET_DATA, payload: { events: data } });
      })
      .catch((e) => {
        console.error("Error fetching events:", e);
        if (axios.isCancel(e)) return;
        dispatch({ type: ACTIONS.ERROR, payload: { error: e } });
      });

    return () => {};
  }, [params]);

  return state;
}
