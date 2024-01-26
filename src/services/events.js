import { makeRequest } from "./makeRequest"

export function getEvents() {
  console.log("Getting events")
    return makeRequest(`events`,{
      method: "GET",
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJvbGFrQGdhbWlsLmNvbSIsImlhdCI6MTcwNjI4NjE4NCwiZXhwIjoxNzA2Mzg2MTg0fQ.mPGP4KsuG077IhZBc2PlqSDmk9bbTjPZS7EhjgBcKQk'
      }
    })
  }