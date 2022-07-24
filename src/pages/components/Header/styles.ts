import styled from "styled-components";
import {FaRegBell} from "react-icons/fa";
import {FiUser} from "react-icons/fi";
import {IoIosLogOut} from "react-icons/io";

export const Container = styled.header`
    width: 100%;
    height: 6rem;
    padding: 0 5rem;
    position: fixed;

    background-color: var(--blue-500);

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NavBar = styled.ul`
    a{
        font-size : 1.4rem;
        color: var(--black);
        color: var(--white);

        & + a{
            margin-left: 1.8rem;
        }
    }
`;

export const LeftSide = styled.div`
    display: flex;
    align-items: center;

    .pic{
        position: relative;
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        background-color: var(--blue-300);
        cursor: pointer;
    }
`;

export const BellIcon = styled(FaRegBell)`
    font-size: 2.5rem;
    color: var(--blue-300);
    margin-right: 2rem;
    cursor: pointer;
`;

export const SettingsModal = styled.div`
    width: 25rem;
    padding: 2rem 0;

    position: absolute;
    top: calc(100% + 1.2rem);
    right: 0;

    border-radius: 1rem;
    border: 1px solid var(--gray-100);
    background-color: var(--white);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    display: ${props=> props.className};

    cursor: default;
    .lineModal{
        height: 4rem;
        margin: 0 2rem;

        display: flex;
        align-items: center;

        cursor:pointer;

        & + .lineModal{
            border-top: 1px solid var(--blue-500);
        }

        &:hover{
            span{color: var(--blue-300 );}
        }

        span{
            font-size: 1.5rem;
            transition:color .2s;
        }
        
        svg{
            color: var(--blue-300);
            margin-right: 1rem;
            font-size: 2.5rem;
        }
    }

    &::after{
        content: "";
        position: absolute;
        top: -8px;
        right: 19px;
        width: 0px;
        height: 0px;
        border-style: solid;
        border-width: 0px 8px 8px;
        border-color: transparent transparent var(--white);

    }
`;

export const UserIcon = styled(FiUser)`
`;

export const ExitIcon = styled(IoIosLogOut)``;