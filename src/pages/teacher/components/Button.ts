import styled from "styled-components";


const Button = styled.button`
    width: 45%;
    height: 4rem;

    border: none;
    border-radius: .5rem;

    background-color: ${props => props.color};
    color: var(--white);
    font-size: 1.5rem;  

`;

export default Button;