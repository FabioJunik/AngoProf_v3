import styled from "styled-components";

export const Container = styled.div`

`;

export const Content = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 10rem 5rem;

    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-wrap: wrap;
    gap: 5rem;

    background-color: var(--gray-100);

    h1{
        width: 100%;
        color: var(--blue-500);
        font-size: 2.3rem;
        font-weight: 500;
    }
`;

export const MatterCard = styled.div`
    width: 30%;
    max-width: 35rem;
    min-width: 30rem;
    height: 22.5rem;
    padding: 3rem;

    display: flex;
    justify-content: space-between;
    flex-direction: column;

    background-color: #fff;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

    & > div{
        display: flex;
        justify-content: space-between;
    }

    .topCard{
        h2{
            color: var(--blue-500);
            font-size: 2rem;
        }
        span{
            font-size: 1.2rem;
            color: var(--blue-300);
        }
    }   
    .midiumCard{
        flex-direction: column;
        font-size: 1.4rem;
    }
`;

export const Button = styled.button`
    width: 45%;
    height: 4rem;

    border: none;
    border-radius: .5rem;

    background-color: ${props => props.color};
    color: var(--white);
    font-size: 1.5rem;  

`;