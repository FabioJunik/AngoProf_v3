import styled from "styled-components";
import * as sc from "../../components/styledComponents";

export const Container = styled.div``;

export const Content = styled(sc.Content)`
`;

export const Button = styled(sc.Button)`
    width: 10rem;
    height: 3.5rem;
    font-size: 1.4rem;
    margin-left: 1.5rem;
`;

export const StudentCard = styled.div`
    width: 45%;
    /* height: 8rem;     */
    padding: 1.8rem 2.5rem;
    
    border-radius: 1.5rem;
    background-color: var(--white);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

    display:flex;
    justify-content: space-between;
    align-items: center;

    div:first-child{
        display: flex;
        gap: 2rem;
    }

    h2{
        color: var(--blue-500);
        font-size: 1.8rem;
    }
    h3{
        color: var(--blue-300);
        font-size: 1.2rem;
        font-weight: 500;
    }
`;

export const Pic = styled(sc.Pic)`
    min-width:6rem;
    min-height:6rem;
`