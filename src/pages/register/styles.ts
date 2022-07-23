import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    background-color: #168492;
    display: flex;
    padding: 10rem 3rem;
    justify-content: space-around;
    gap: 2rem;
    flex-wrap: wrap;

    h1{
        position: absolute;
        top: 2rem;
        right: 7rem;
        span{
            text-decoration: none;
            font-size: 2.5rem;
        }
    }
    .content{
        width: 60rem;
        padding-top: 5rem;
        color: #fff;

        h2{
            font-size: 4rem;
            margin-bottom: 3rem;
            font-weight: 500;
        }

        p{
            margin-bottom: 10px;
            font-size: 18px;
            text-align: justify;
        }
    }
`;

export const RegisterForm = styled.form`
    width: 45rem;
    background-color: #fff;
    padding: 4rem;
    border-radius: 3rem;

    h2{
        font-weight: 500;
        text-align: left;
        color: var(--blue-500);
        font-size: 28px;
        margin-bottom: 1rem;
    }

    div{
        font-size: 1.5rem;
        padding: 1rem 0.5rem;
        
        div{
            display: inline-block;
            margin-right: 1rem;
            height: 4rem;

            span{
                margin-right: 0.5rem;
            }
        }
    }
`;

export const Input = styled.input`
    width: 100%;
    padding: 0rem 2rem;
    height: 5rem;
    border-radius: 1rem;
    border: none;
    margin-bottom: 1rem;
    background-color: var(--gray-100);
    font-size: 1.7rem;
`;


export const Button = styled.button`
    width: 100%;
    height: 4rem;
    margin: 0 auto;
    margin-top: 1rem;
    
    background-color: #51B4F7;
    color: #fff;
    border-radius: 1rem;
    font-size: 1.7rem;
    border: none;
`;