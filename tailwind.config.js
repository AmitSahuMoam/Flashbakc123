/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
const flowbitePlugin = require('flowbite/plugin');
const aspectRatio = require('@tailwindcss/aspect-ratio');

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", 'node_modules/flowbite-react/lib/esm/**/*.js', "./node_modules/flowbite/**/*.js", flowbite.content()],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('https://cdn.sanity.io/images/u8qx4arf/production/5d37592aceb7275dcc399f7cb7f8191b106e2e33-2560x1305.jpg')",
        "testimonials":
          "url('https://cdn.sanity.io/images/u8qx4arf/production/06fd4545d5cc02f008913c2084d6e4fb6b4de601-2560x7394.png')",
        newCollection:
          "url('https://cdn.sanity.io/images/u8qx4arf/production/80af94f7be49cf9b3ee4ecd8020cc5591e0895f0-2560x1067.png')",
        aboutbrand:
          "url('/src/assets/images/about.svg')",
        "texture":
          "url('https://cdn.sanity.io/images/u8qx4arf/production/d718ac34b04dcb168e25501072a0ca5aa1baa1d8-5120x2194.png')",
        "footertext":
          "url('https://cdn.sanity.io/images/u8qx4arf/production/d718ac34b04dcb168e25501072a0ca5aa1baa1d8-5120x2194.png')",
        "mywed":
          "url('/src/assets/images/mywed.png')",
        dustTexture:
          "url('/src/assets/images/aboutus/dust scratches light@2x.png')"

      },
      theme: {
        fontFamily: {
          boldy: ["boldy", "sans-serif"],
          oswald: ["Oswald", "sans-serif"],
        },
        colors: {
          transparent: 'transparent',
        }
      },
    },

  },
  plugins: [
    flowbitePlugin,
    flowbite.plugin(),
    aspectRatio,
  ],
};
