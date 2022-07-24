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
    height: 7.5rem;    
    padding: 2rem;
    
    border-radius: 1rem;
    background-color: var(--white);

    display:flex;
    justify-content: space-between;
    align-items: center;

    div:first-child{
        display: flex;
        gap: 2rem;
    }

    .pic{
        width:5rem;
        height:5rem;

        border-radius: 50%;
        background-color: var(--blue-300);
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

