import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => {
  if (command === 'serve') {
    // 👉 Dev mode: use playground in example/
    return {
      plugins: [react()],
      root: 'example',
    }
  } else {
    // 👉 Build mode: build the library
    return {
      plugins: [react()],
      build: {
        lib: {
          entry: "src/MySlider.jsx",
          name: "MyAwesomeSlider",
          fileName: (format) => `my-awesome-slider.${format}.js`,
        },
        rollupOptions: {
          external: ["react", "react-dom"],
          output: {
            globals: {
              react: "React",
              "react-dom": "ReactDOM",
            },
          },
        },
      },
    };
  }
});
