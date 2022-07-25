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

  .MatterModal{
    width: 50rem;
    padding: 3rem;
    position: relative;
    
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    border-radius:1rem;

    h2{
        margin-bottom: 2rem;
        font-size:2rem;
        font-weight:500;
        color: var(--blue-500);
    }
    form{
        display:flex;
        flex-wrap: wrap;
        justify-content: space-between;

        p{
            width:100%;
            font-size:1.4rem;
            margin-top: 2rem;
            margin-bottom: 0.5rem;
        }

        input{
            width:100%;
            padding:1rem;

            background-color: var(--gray-100);
            border:none;
            border-radius:0.5rem;
            border:1px solid #eee;

            font-size:1.4rem;
        }   

        input[type="number"] {width:45%;}
        button{margin: 4rem auto 0 auto;}
    }
    
  }

  .react-modal-overlay{
        background-color:rgba(0,0,0,0.5);
        position:fixed;
        left:0;
        top:0;
        right:0;
        bottom:0;
        display:flex;
        align-items:center;
        justify-content:center;
    }
`;