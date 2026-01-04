import { io } from "socket.io-client";

const SOCKET_URL =
  import.meta.env.VITE_SOCKET_URL ||
  "https://wwl38t1g0ci6tp4hk9jv7by2f5sx8da7zq9b5vn0.ujiyalafoundation.org";

export const socket = io(SOCKET_URL, {
  withCredentials: true,
});
