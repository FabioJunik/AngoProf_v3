import styled from 'styled-components';

export const Container = styled.div`

`;

export const Content = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 10rem 5rem;

    background-color: var(--gray-100);

    display: grid;
    grid-template-rows: 5rem auto;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: "title title title"
                         "column1 column2 column3";

    .column1{
        grid-area: column1;
    }
    .column2{
        grid-area: column2;

    }
    .column3{
        grid-area: column3;
    }
`;

export const Card = styled.form`
    width: 35rem;
    padding: 2rem;
    margin-bottom: 2rem;

    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

    display: flex;
    flex-direction: column;

    background-color: var(--white);
    
    text-align: center;
    font-size: 1.4rem;
    h2{
        text-align: left;
        font-size: 1.8rem;
        font-weight: 500;
        color: var(--blue-300);
        margin-bottom: 1rem;
    }

    select{
        width: 100%;
        border-radius:.5rem;
        border: 1px solid #eee;
        padding: 1.5rem;
        margin-bottom: 1rem;
        font-size: 1.4rem;
    }

    input[type="file"] {
        display: none;
    }
`;

export const PicContainer =styled.label`
    width: 20rem;
    height: 20rem;
    margin: 0 auto;
    margin-bottom: 1rem;
    
    border: 2px solid var(--blue-500);

    background-size: cover;
    background-image: url(${props=>props.color});
    border-radius: 50%;
    cursor: pointer;

    /* &.identityPic{background-image: url('https://cdn-icons.flaticon.com/png/512/3160/premium/3160461.png?token=exp=1658435201~hmac=1c4bc9435b89a5351ca26f0d4beff336');} */
    /* &.diplomaPic{background-image: url('https://cdn-icons-png.flaticon.com/512/2490/2490354.png');} */

    

`;

export const Input = styled.input`
    width: 100%;
    border-radius:.5rem;
    border: 1px solid #eee;
    padding: 1.5rem;
    margin-bottom: 1rem;
    font-size: 1.4rem;

`;

export const Button = styled.button`
    width: 50%;
    height: 4rem;
    margin: 0 auto;

    background-color: var(--blue-300);
    color: var(--white);
    font-size: 1.5rem;

    border:none;
    border-radius: 0.5rem;
`;