import { makeRequest } from "./makeRequest";

export function getUser(uId) {

  return makeRequest(`users/${uId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
}
