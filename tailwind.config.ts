import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        caterpillar: {
          green: "#6BAA5B",
          yellow: "#F6E96B",
          leaf: "#3A7D44",
          bark: "#5E4738",
          sky: "#E9F5FF",
          night: "#203040"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        "leaf-vein":
          "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.15), transparent 60%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.08), transparent 55%), radial-gradient(circle at 50% 80%, rgba(255,255,255,0.1), transparent 65%)"
      }
    }
  },
  plugins: []
};

export default config;
