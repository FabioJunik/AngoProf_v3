import styled from 'styled-components';
import * as sc from  '../../components/styledComponents';
import {FaStar} from 'react-icons/fa';


export const Container = styled.div``;

export const Content = styled.div`
    width:100%;
    min-height: 100vh;
    padding: 10rem 5rem;
    background-color: var(--gray-100);

    display: grid;
    grid-template-columns: 40rem auto;
    grid-template-areas: 'column2 column1';

    .column1 {
        grid-area: column1;
        color: var(--black-500);

        .bio{
            background-color:#fff;
            padding: 3rem;
            border-radius: 2rem;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

            p{
                font-size:1.4rem;
                line-height:1.7;
            }
        }

        .moreInfo{

            display: flex;
            justify-content:space-between;
            flex-wrap: wrap;
            align-items:start;
            
            div{
                width: 45%;
                max-width:40rem;
                min-width: 25rem;
                padding: 3rem 2rem;
                margin-top: 2rem;

                border-radius: 2rem;
                background-color: #fff;
                box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

                li{
                    font-size:1.6rem;
                }
            }
        }
    }

    .column2 {
        grid-area: column2;
    }
`;

export const SubTitle = styled.h2`
    font-size: 2.5rem;
    color: var(--blue-500);
    margin-bottom:1rem;
`

export const TeacherCard = styled.div`
    width:30rem;
    padding: 3rem 2rem;

    border-radius: 2rem;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

    display: flex;
    flex-direction: column;
    align-items: center;

    h2{
        font-size: 2rem;
        color:var(--blue-500);
        margin-top:2rem;
    }

    .moreInfo{
        font-size:1.4rem;
        text-align:center;
        line-height: 1.8;
        
        span{
            color:var(--blue-500);
            font-size:1.5rem;
            margin-left: 0.5rem;
        }
        p{
            
        }
    }

    button{
        margin-top: 2rem;
        width:100%;
    }
`;

export const PicContainer = styled.div`
    width: 12.5rem;
    height: 12.5rem;

    background-color: var(--blue-300);
    background-image: url(${props=>props.color});
    background-size: cover;
    border-radius: 50%;
`;

export const StarIcon = styled(FaStar)`
    margin-top: 1rem;
    margin-right: 0.5rem;
    font-size: 1.8rem;
    color: var(--blue-300);
`