import styled from "styled-components";
import ContentDefault from "../../components/Content";
import ButtonDefault from "../../components/Button";

export const Container = styled.div``;

export const Content = styled(ContentDefault)`
`;

export const Button = styled(ButtonDefault)`
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

    display:flex;
    justify-content: space-between;
    align-items: center;

    background-color: var(--white);

    div:first-child{
        /* background-color: red; */
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

