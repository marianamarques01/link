import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repoBase = "/link/";

export default defineConfig({
  base: process.env.GITHUB_PAGES === "true" ? repoBase : "/",
  plugins: [react()],
});
