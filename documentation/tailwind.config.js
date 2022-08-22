const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    important: "#__docusaurus",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ["Montserrat", ...defaultTheme.fontFamily.serif],
            },
            boxShadow: {
                tile: "6px 8px 16px 0 rgba(42, 42, 66, 0.4)",
            },
        },
    },
    plugins: [],
    corePlugins: {
        preflight: false,
    },
};
