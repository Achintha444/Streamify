// vite.config.js
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
    // This ensures proper handling of static assets
    assetsInclude: [ "**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.gif", "**/*.svg" ],
    plugins: [ react() ],
    resolve: {
        alias: {
            "@": "/src"
        }
    }
});
