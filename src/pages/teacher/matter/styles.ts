import styled from "styled-components";
import ButtonDefault from "../components/Button"
import ContentDefault from "../components/Content"

export const Container = styled.div`

`;

export const Content = styled(ContentDefault)`
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

export const Button = styled(ButtonDefault)`

`;