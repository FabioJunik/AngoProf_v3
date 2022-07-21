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

  :root{
    font-size: 62.5%;

    --white: #fff;
    --black: #1c1c1c;

    --gray-100: #f9f8fd;

    --blue-300: #51b4f7;
    --blue-500: #168492;

    --red-500: #d92323;
    
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
    transition: filter 0.1s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;