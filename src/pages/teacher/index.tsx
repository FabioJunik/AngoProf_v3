import type { NextPage } from 'next'
import Header from './components/Header';
import {Container} from './homeStyles';

const TeacherHome:NextPage = () =>{
    return (
        <Container>
            <Header/>
        </Container>
    )
}

export default TeacherHome;