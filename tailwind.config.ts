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
        maroon: {
          50: "#FAF0F2",
          100: "#F5DFE4",
          200: "#E8BFC9",
          300: "#D394A4",
          400: "#B85F75",
          500: "#8B2440",
          600: "#6A142D",
          700: "#551024",
          800: "#4A1020", // Primary Deep Maroon
          900: "#360A16",
          950: "#22050D",
        },
        gold: {
          50: "#FAF7EE",
          100: "#F4ECD6",
          200: "#EAD7AC",
          300: "#DFC181",
          400: "#D5AD5B",
          500: "#C9A45C", // Accent Antique Gold
          600: "#B18943",
          700: "#8D6B32",
          800: "#6B5027",
          900: "#4B381C",
        },
        cream: {
          50: "#FFFFFF",
          100: "#FFFDF9",
          200: "#FFF8EF", // Secondary Warm Cream
          300: "#F7EEDF",
          400: "#EDE0CB",
          500: "#DECDB5",
          600: "#C7B295",
        },
        charcoal: {
          50: "#F6F5F5",
          100: "#ECEAE9",
          200: "#D4D0CE",
          300: "#B4ADA9",
          400: "#8B827D",
          500: "#645B56",
          600: "#49423D",
          700: "#37312D",
          800: "#25201D", // Text Dark Charcoal
          900: "#1A1715",
          950: "#100E0D",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gold-shimmer": "linear-gradient(135deg, #E2BA6D 0%, #C9A45C 50%, #A27E38 100%)",
        "maroon-velvet": "linear-gradient(180deg, #4A1020 0%, #2A0812 100%)",
      },
      boxShadow: {
        luxury: "0 20px 40px -15px rgba(74, 16, 32, 0.12)",
        "luxury-hover": "0 30px 60px -15px rgba(74, 16, 32, 0.22)",
        gold: "0 10px 25px -5px rgba(201, 164, 92, 0.3)",
      },
    },
  },
  plugins: [],
};
export default config;

