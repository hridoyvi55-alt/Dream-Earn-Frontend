import type { AcceptedPlugin } from "postcss";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

const config: { plugins: AcceptedPlugin[] } = {
  plugins: [
    tailwindcss(),
    autoprefixer(),
  ],
};

export default config;
