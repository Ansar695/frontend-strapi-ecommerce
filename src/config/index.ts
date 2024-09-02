import axios from "axios";

// export const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;
// export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
export const API_BASE_URL = "http://localhost:1337/api";
export const IMAGE_BASE_URL = "http://localhost:1337";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Attach token or any other custom logic
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request errors here
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle response errors here (e.g., redirect to login on 401)
    if (error.response && error.response.status === 401) {
      console.log(error);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
