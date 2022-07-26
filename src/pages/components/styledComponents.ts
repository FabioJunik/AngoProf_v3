import styled from "styled-components";


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

`;

export const Title = styled.h1`
    width: 100%;
    color: var(--blue-500);
    font-size: 2.3rem;
    font-weight: 500;
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

        
        h2, h3{
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        
        h2{
            font-size: 1.8rem;
            color: var(--blue-500);
            -webkit-line-clamp: 1;
        }

        h3{
            font-size: 1.5rem;
            font-weight: 400;
            color: var(--blue-300);
        }

        .pic{
            min-width: 7.5rem;
            min-height: 7.5rem;

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

