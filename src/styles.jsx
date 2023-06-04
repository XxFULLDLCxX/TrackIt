import { createGlobalStyle } from 'styled-components';

export const Normalize = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  display: flex;
  justify-content: center;
  font-family: 'Lexend Deca', sans-serif;
  background: #E5E5E5;
}


button, input {
  border: none;
  outline: none;
  font-family: inherit;
  user-select: none;
}
main {
  padding: 70px 0;
  width: 375px;
  height: 100%;
  background-color: #f2f2f2;
}
`;
