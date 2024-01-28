import { makeRequest } from "./makeRequest"

export function getEvents() {
    return makeRequest(`events`,{
      method: "GET",
      // headers: {
      //   Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJvbGFrQGdhbWlsLmNvbSIsImlhdCI6MTcwNjI4NjE4NCwiZXhwIjoxNzA2Mzg2MTg0fQ.mPGP4KsuG077IhZBc2PlqSDmk9bbTjPZS7EhjgBcKQk'
      // }
    })
  }

export function addEvent({name, description, street, number, postCode, city, country, lat, lng, date}){
  console.log("Adding event")
  return makeRequest(`events`,{
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      name:name,
      description:description,
      address: {
        street:street,
        number: number,
        postCode: postCode,
        city: city,
        country:country,
        latitude:lat.toString(),
        longitude:lng.toString()
      },
      date: date
    },
  })
}

export function attendEvent({userId, eventId}){
  console.log("Attending event")
  console.log(localStorage.getItem('token'))
  return makeRequest(`events/register`,{
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    },
    data: {
      userId: userId,
      eventId: eventId
    },
  })
}
