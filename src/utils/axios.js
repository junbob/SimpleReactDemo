import axios from "axios";

export const backendUrl = "https://localhost:44387/";

const instance = axios.create({
  baseURL: backendUrl + "apis/",
});

export default instance;

instance.interceptors.request.use(
  (config) => {
    console.log("Config: ", config);
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => {
    console.log("Response: ", response);
    return response;
  },
  (error) => Promise.reject(error)
);
