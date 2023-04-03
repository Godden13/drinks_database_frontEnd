import axios from "axios";
import { readToken } from "../utils";

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    'x-api-key': process.env.REACT_APP_API_KEY
  },
})

httpClient.interceptors.request.use(function (config) {
  config.headers['Authorization'] = `Bearer: ${readToken()}`
  return config;
}, function (error){
  return Promise.reject(error);
});

export { httpClient };