import styled from "styled-components";
import {FaStar} from "react-icons/fa";
import * as sc from "../components/styledComponents"

export const Container = styled.div``;

export const Content = styled(sc.Content)``;

export const OrderCard = styled(sc.Card)`
    .midiumCard{
        justify-content: start;
    }
`;

export const StarIcon = styled(FaStar)`
    margin-top: 1rem;
    margin-right: 0.5rem;
    font-size: 1.6rem;
    color: var(--blue-300);
`