import styled from "styled-components"

const TitleStyled = styled.h1`
    width: 100%;
    color: var(--blue-500);
    font-size: 2.3rem;
    font-weight: 500;
`;

const Title = ({children}:any)=>{
    return (
        <TitleStyled>{children}</TitleStyled>
    )
}

export default Title;