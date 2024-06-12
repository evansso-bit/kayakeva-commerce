import { Playfair_Display } from "next/font/google";
import { Urbanist } from "next/font/google";

export const playFair = Playfair_Display({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-playfair",
});

export const urbanist = Urbanist({
    subsets: ["latin"],
    variable: "--font-urbanist",
});
