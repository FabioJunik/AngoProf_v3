import { TailSpin, Puff, Bars, Circles, Grid, Hearts, Oval, Rings, BallTriangle, ThreeDots } from  'react-loader-spinner';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top:0;
    left:0;
    background:var(--gray-100);
    opacity: 0.9;

    display:flex;
    justify-content:center;
    align-items: center;

`;

export const Loader = ()=>{
    return (
        <Container>
            <Rings 
                ariaLabel = 'loading'
                color="var(--blue-500)" 
                height={200} 
                width={200} 
                /> 
        </Container>
    )    
}