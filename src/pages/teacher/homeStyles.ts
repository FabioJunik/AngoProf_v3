import styled from "styled-components";
import ButtonDefault from "./components/Button"
import ContentDefault from "./components/Content"


export const Container = styled.div`

`;

export const Content = styled(ContentDefault)`
    
`;

export const Card = styled.div`
    width: 30%;
    max-width: 35rem;
    min-width: 30rem;
    height: 25rem;
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
        justify-content: start;
        align-items: center;
        gap: 3rem;

        h2{
            font-size: 1.8rem;
            color: var(--blue-500);

        }

        h3{
            font-size: 1.5rem;
            font-weight: 400;
            color: var(--blue-300);
        }

        .pic{
            width: 7.5rem;
            height: 7.5rem;

            border-radius: 50%;
            background-color: var(--blue-300);
        }
    }

    .midiumCard{
        font-size: 1.4rem;
        flex-wrap: wrap;
        gap: 1rem;
    }

`;

export const Button = styled(ButtonDefault)`
`;