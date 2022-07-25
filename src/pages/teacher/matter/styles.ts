import styled from "styled-components";
import * as sc from "../../components/styledComponents"

export const Container = styled.div`

`;

export const Content = styled(sc.Content)`
`;

export const MatterCard = styled(sc.Card)`
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

export const  AddMatterCard = styled(sc.Card)`
    height: 22rem;
    align-items: center;
    justify-content: center;
    
    background-color: var(--white);

    opacity: 0.8;
    cursor: pointer;
    transition: all 0.2s;

    :hover {
        opacity: 1;
    }

    span{
        width: 7.5rem;
        height: 7.5rem;
        font-size: 4rem;

        display:flex;
        justify-content: center;
        align-items: center;

        background-color: var(--blue-300);
        color: var(--gray-100);
        border-radius: 50%;
    }
`;

export const MatterModal = styled.div`
    width: 50rem;
    padding: 3rem;
    display: none;

    position: fixed;
    top:8rem;
    left: calc(50% - 25rem);

    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    border-radius:1rem;

    h2{
        margin-bottom: 2rem;
        font-size:2rem;
        font-weight:500;
        color: var(--blue-500);
    }
    form{
        display:flex;
        flex-wrap: wrap;
        justify-content: space-between;

        p{
            width:100%;
            font-size:1.4rem;
            margin-top: 2rem;
            margin-bottom: 0.5rem;
        }

        input{
            width:100%;
            padding:1rem;

            background-color: var(--gray-100);
            border:none;
            border-radius:0.5rem;
            border:1px solid #eee;

            font-size:1.4rem;
        }   

        input[type="number"] {width:45%;}
        button{margin: 4rem auto 0 auto;}
    }
    
`;

export const Button = styled(sc.Button)`

`;