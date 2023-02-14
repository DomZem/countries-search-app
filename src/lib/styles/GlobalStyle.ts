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

  body, button {
    font-size: 1.4rem; 

    @media (min-width: 1024px) {
      font-size: 1.6rem;
    }
  }

  input, select, option {
    font-size: 1.4rem;
  }

  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }
`;
