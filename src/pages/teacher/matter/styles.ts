import styled from "styled-components";
import * as cs from "../../components/styledComponents"

export const Container = styled.div`

`;

export const Content = styled(cs.Content)`
`;

export const MatterCard = styled(cs.Card)`
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

export const Button = styled(cs.Button)`

`;