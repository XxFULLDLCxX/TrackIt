import { createGlobalStyle } from 'styled-components';

export const Normalize = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {

}

button {
  border: none;
  font-family: inherit;
}
`;
