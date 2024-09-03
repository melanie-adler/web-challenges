import { createGlobalStyle } from "styled-components";
import { Lora } from "next/font/google";

export const lora = Lora({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: ${lora.style.fontFamily}, serif;
    background-color: rgb(40,40,40);
    color: rgb(212,209,205);
  }
`;
