import styled from "styled-components";

const LogoStyle = styled.h1`
    color: var(--white);
    font-size: 2.5rem;
    font-weight: 400;

    span{
        color: var(--blue-500);
        color: var(--black);
        font-size: 1.8rem;
        font-weight: 600;
        text-decoration: underline;
    }
`;

const Logo = () =>{
    return <LogoStyle>Ango<span>prof</span> </LogoStyle>
}

export default Logo;
