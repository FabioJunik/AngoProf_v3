import styled from "styled-components";
import {FaStar} from "react-icons/fa"

export const Container = styled.div`

`;

export const TeacherCard = styled.div`
    width: 30%;
    max-width: 37rem;
    min-width: 33rem;
    height: 23rem;
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
`;


export const StarIcon = styled(FaStar)`
    margin-top: 1rem;
    margin-right: 0.5rem;
    font-size: 1.6rem;
    color: var(--blue-300);
`