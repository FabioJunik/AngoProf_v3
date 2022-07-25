import styled from "styled-components";
import * as sc from "../../components/styledComponents";
import {IoMdClose} from "react-icons/io";

export const Container = styled.div`
`;

export const Content = styled(sc.Content)`
`;

export const MatterCard = styled(sc.Card)`
    height: 22rem;

    .topCard{
        justify-content: space-between;
        h2{
            color: var(--blue-500);
            font-size: 2rem;
        }
        span{
            font-size: 1.2rem;
            color: var(--blue-300);
        }
    }   
`;

export const  AddMatterCard = styled(sc.Card)`
    height: 22rem;
    align-items: center;
    justify-content: center;
    
    background-color: var(--white);

    opacity: 0.8;
    cursor: pointer;
    transition: all 0.2s;

    :hover {
        opacity: 1;
    }

    span{
        width: 7.5rem;
        height: 7.5rem;
        font-size: 4rem;

        display:flex;
        justify-content: center;
        align-items: center;

        background-color: var(--blue-300);
        color: var(--gray-100);
        border-radius: 50%;
    }
`;


export const Button = styled(sc.Button)`

`;

export const CloseIcon = styled(IoMdClose)`
    position: absolute;
    top: 1rem;
    right: 1.5rem;

    color: #aaa; 
    font-size:3rem;
    cursor: pointer;
    transform: scale(0.9);

    transition: .2s;


    &:hover{
        filter: brightness(0.8);
        transform: scale(1);
    }
`;