import daisyui from "daisyui";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f59e0b",
          secondary: "#67e8f9",
          accent: "#9f1239",
          neutral: "#231717",
          "base-100": "#fffcde", // Fixed this line
          info: "#fed7aa",
          success: "#2cff9c",
          warning: "#047857",
          error: "#ef4444",
        },
        body: {
          backgroundcolor: "#1c1917",
        },
      },
    ],
  },
  plugins: [daisyui],
};

export default config;
