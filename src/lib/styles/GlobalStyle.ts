import { createGlobalStyle } from 'styled-components';

export interface DefaultTheme {
	background: string;
	text: string;
	element: string;
	input: string;
}

export const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  *, *::before, *::after {
    font-family: 'Nunito Sans', sans-serif;
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body, button, input, select {
    font-size: 1.4rem; 
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: background-color, color 0.2s ease-in-out;

    @media (min-width: 1024px) {
      font-size: 1.6rem;
    }
  }

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }
`;
