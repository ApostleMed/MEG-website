/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sofia: ["Sofia Pro"],
        opensan: ["Open Sans"],
        playfair: ["Play Fair"],
        sourcesan: ["Souce Sans 3"],
      },
      fontSize: {
        header: ["28px"],
        body: ["18px"],
        cardheader: ["22px"],
        cardbody: ["14px"],
      },
      colors: {
        primary: "#DAA520",
        accent: "#003366",
        body: "#63666A",
        pridark: "#1A4F1E",
        bglight: "#F6F6F6",
        background: "#E6E1E1", // Custom primary color
        secondary: "#FFFFFF", // Custom secondary color
        hihglight: "#154119",
        sub: "#C3EAC6",
        footer: "#1C1C1C",
        // Add more custom colors as needed
      },
    },

    // screens: {
    //   sm: "576px",
    //   // => @media (min-width: 576px) { ... }

    //   md: "960px",
    //   // => @media (min-width: 960px) { ... }

    //   lg: "1440px",
    //   // => @media (min-width: 1440px) { ... }
    // },
  },
  plugins: [],
};
