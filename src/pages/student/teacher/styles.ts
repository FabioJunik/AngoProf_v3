import styled from "styled-components";
import {FaStar} from "react-icons/fa";
import { Card } from "../../components/styledComponents";

export const Container = styled.div`

`;

export const TeacherCard = styled(Card)`
    height: 23rem;
`;


export const StarIcon = styled(FaStar)`
    margin-top: 1rem;
    margin-right: 0.5rem;
    font-size: 1.6rem;
    color: var(--blue-300);
`