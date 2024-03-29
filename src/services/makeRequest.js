import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080/",
});

export async function makeRequest(url, options) {

  return api(url, options)
    .then((res) => {
      return res.data;
    })
    .catch(async (error) => {
      if (error.response?.status === 401) {
        throw error;
      } else if (error.response?.status === 400) {
        throw error;
      } else if (error.response?.status === 403) {
        throw error;
      } else {
        Promise.reject(error ?? "Error");
      }
    });
}
