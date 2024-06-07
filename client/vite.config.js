import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // 이 줄을 추가하여 외부에서 접근 가능하도록 설정
    port: 5173,
  },
  preview: {
    host: "0.0.0.0",
    port: 5173,
  },
});
