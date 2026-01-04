import axios from "axios";

const API_URL =
  import.meta.env.VITE_API_URL ||
  "https://wwl38t1g0ci6tp4hk9jv7by2f5sx8da7zq9b5vn0.ujiyalafoundation.org/api";

const adminApi = axios.create({
  baseURL: API_URL,
});

adminApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default adminApi;
