import { createGlobalStyle } from 'styled-components';

export const Normalize = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: 'Lexend Deca', sans-serif;
}

button, input {
  border: none;
  font-family: inherit;
}
`;
