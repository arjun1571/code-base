import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";
import { ENV } from "./env.config";

/**
 * Public API instance - no authentication required
 */
const instance: AxiosInstance = axios.create({
  baseURL: ENV.ApiEndpoint as string,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 10000, // 10 seconds timeout
});

// Response interceptor
instance.interceptors.response.use(
  (response: AxiosResponse) => response.data, // Directly return the data
  (error: AxiosError) => {
    // Handle errors
    if (error.response) {
      // Server responded with error status (4xx, 5xx)
      return Promise.reject({
        status: error.response.status,
        message: error.message,
        data: error.response.data,
      });
    } else if (error.request) {
      // Request was made but no response received
      return Promise.reject({
        status: 503,
        message: "Service unavailable",
      });
    } else {
      // Something happened in setting up the request
      return Promise.reject({
        status: 500,
        message: "Request setup error",
      });
    }
  }
);

export const apiIns = instance;
