import styled from "styled-components";
import {FaFacebookF} from "react-icons/fa";
import {FcGoogle} from "react-icons/fc";

export const Container = styled.div`
    background-color: #168492;
    height: 100vh;
    padding:2rem;

    h1{
        position: absolute;
        top: 2rem;
        left: 2rem;
        
        span{
            text-decoration: none;
            font-size: 2.5rem;
        }
    }
`;

export const LoginForm = styled.form`
    width: 40rem;
    padding: 4rem;
    margin: auto;
    margin-top: 10rem;	

    border-radius: 3rem;
    background-color: #fff;
    
    h2{
        font-weight: 500;
        text-align: left;
        color: var(--blue-500);
        font-size: 2.8rem;
        margin-bottom: 1rem;
    }

    div:first-child{color: #fff;}

    .socialMedia{
        width: 100%;
        margin-top:2rem ;

        display: flex;
        justify-content: space-between;

        font-size: 1.4rem;
    }

    .info{
        margin-top: 2rem;
        text-align: center;
        font-size: 1.4rem;
        color: gray;

        a{color: var(--blue-300);}
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

export const SocialMidiaCard = styled.div`
    width: 45%;
    height: 4rem;
    padding: 0 1rem;

    border-radius: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    background-color: ${props=> props.color};
    border: 1px solid #ccc;


    svg{
        font-size: 2rem ;
    }
`;

export const FacebookIcon = styled(FaFacebookF)``;

export const GoogleIcon = styled(FcGoogle)``;