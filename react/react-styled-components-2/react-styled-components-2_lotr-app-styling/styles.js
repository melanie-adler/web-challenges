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

  body {
    font-family: ${lora.style.fontFamily}, serif;
    background-color: rgb(40,40,40); 
    color: rgb(212,209,205);
    padding: 1rem
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgb(212, 209, 205);

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledTitle = styled.h1`
  font-size: 68px;
  line-height: 1.1;
`;

export const StyledIntro = styled.p`
  font-size: 20px;
`;
