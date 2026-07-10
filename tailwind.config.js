import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", ...defaultTheme.fontFamily.sans],
                mono: ["IBM Plex Mono", ...defaultTheme.fontFamily.mono],
            },
            colors: {
                primary: {
                    DEFAULT: "#5847D6",
                    dark: "#4636B8",
                    tint: "#EEECFC",
                },
                secondary: {
                    DEFAULT: "#1E1B4B",
                    deep: "#151330",
                },
                accent: {
                    DEFAULT: "#A78BFA",
                },
                success: {
                    DEFAULT: "#15A35B",
                    tint: "#E3F8EC",
                },
                danger: {
                    DEFAULT: "#DC3B3B",
                    tint: "#FCE9E9",
                },
                warning: {
                    tint: "#FDF6DE",
                    line: "#F0DFA0",
                },
                ink: "#15172B",
                gray: {
                    300: "#DCDEE7",
                    500: "#7C8092",
                    700: "#454A5B",
                },
                border: "#E7E8F0",
                bg: "#F7F7FB",
            },
        },
    },

    plugins: [forms],
};
