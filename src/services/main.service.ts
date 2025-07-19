import axios from "axios";

const baseURL =
  import.meta.env.VITE_API_BASE_URL ||
  "https://687b2ad4b4bc7cfbda84d3b7.mockapi.io/api/v1";
const timeout = parseInt(import.meta.env.VITE_API_TIMEOUT || "5000", 10);

export const axiosInstance = axios.create({
  baseURL,
  timeout,
  headers: {
    "Content-Type": "application/json",
  },
});
