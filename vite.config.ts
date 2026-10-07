import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";
import { defineConfig, type Plugin } from "vite";

const MEDIA_DIR = path.resolve(import.meta.dirname, "media");

// In dev, serve /manus-storage, /fonts and /blog-images from media/ (the build copies them into dist/public).
function serveLocalMedia(): Plugin {
  return {
    name: "serve-local-media",
    configureServer(server) {
      for (const section of ["manus-storage", "fonts", "blog-images"]) {
        server.middlewares.use(`/${section}`, (req, res, next) => {
          const file = path.join(MEDIA_DIR, section, decodeURIComponent((req.url ?? "").split("?")[0]));
          if (!file.startsWith(path.join(MEDIA_DIR, section)) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) return next();
          fs.createReadStream(file).pipe(res);
        });
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), serveLocalMedia()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    host: true,
    fs: { strict: true, deny: ["**/.*"] },
  },
});
