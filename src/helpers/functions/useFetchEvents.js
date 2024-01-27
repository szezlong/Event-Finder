import { useReducer, useEffect } from "react"
import axios from 'axios'

const ACTIONS = {
    MAKE_REQUEST: 'make-request',
    GET_DATA: 'get-data',
    ERROR: 'error'
}

const BASE_URL = 'http://localhost:8080/events'


function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.MAKE_REQUEST:
            return { loading: true, events: []}
        case ACTIONS.GET_DATA:
            return { ...state, loading: false, events: action.payload.events}
        case ACTIONS.ERROR:
            return { ...state, loading: false, error: action.payload.error, events: [] }
        default:
            return state
    }
}

export default function useFetchEvents(params) {
    const [state, dispatch] = useReducer(reducer, { events: [], loading: true })
    //console.log("Fetching events")

    useEffect(() => {
        //const cancelToken = axios.CancelToken.source()
        dispatch({type: ACTIONS.MAKE_REQUEST})
        fetch(BASE_URL, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJvbGFrQGdhbWlsLmNvbSIsImlhdCI6MTcwNjM2MDAxMCwiZXhwIjoxNzA2NDYwMDEwfQ.MPHKOX7VYxEA5jGkU3dfHgys_t-OI_U0WmtG0vumllg'
            }
        }).then(res => res.json())
        .then(data => {
            //console.log("Got those juicy events")
            dispatch({type: ACTIONS.GET_DATA, payload: {events: data}})
        }).catch(e => {
            console.error("Error fetching events:", e);
            if (axios.isCancel(e)) return
            dispatch({type: ACTIONS.ERROR, payload: {error: e}})
        });

        return () => {
            //cancelToken.cancel()
        }

    }, [params])

    return state
}