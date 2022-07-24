import { NextPage } from "next";
import Header from "../components/Header";
import { Container } from "./homeStyles";


const HomeStudent:NextPage = ()=>{
    return (
        <Container>
            <Header/>
        </Container>
    )
}

export default HomeStudent;