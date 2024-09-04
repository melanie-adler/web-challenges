import styled, { createGlobalStyle } from "styled-components";
import { Lora } from "next/font/google";
import Link from "next/link";

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

  :root {
  --color-earth: #282828;
  --color-clouds: #f1f1f1;
  --color-smoke: #d4d1cd;}

  body {
    font-family: ${lora.style.fontFamily}, serif;
    background-color: var(--color-earth); 
    color: var(--color-smoke);
    padding: 1rem;
    font-size: 18px
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--color-smoke);

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledTitle = styled.h1`
  font-size: 64px;
  line-height: 1.1;
`;
