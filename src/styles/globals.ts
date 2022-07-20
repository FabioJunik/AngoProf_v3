import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style: none;
    outline: none;
  }

  html,
  body {
    font-family: 'Poppins', sans-serif;
  }

  a {
    color: inherit;
  }

  button{
    cursor: pointer;
  }
`;