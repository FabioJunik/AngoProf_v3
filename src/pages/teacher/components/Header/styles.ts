import styled from "styled-components";
import {FaRegBell} from "react-icons/fa";

export const Container = styled.header`
    width: 100%;
    height: 6rem;
    padding: 0 5rem;

    background-color: var(--blue-500);

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NavBar = styled.ul`
    a{
        font-size : 1.6rem;
        margin-left: 1.5rem;
        color: var(--black);
        color: var(--white);
    }
`;

export const LeftSide = styled.div`
    display: flex;
    align-items: center;

    div{
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        background-color: var(--blue-300);
    }
`;

export const BellIcon = styled(FaRegBell)`
    font-size: 2.5rem;
    color: var(--black);
    margin-right: 2rem;
    cursor: pointer;
`;