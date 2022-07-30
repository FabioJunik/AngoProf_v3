import { NextPage } from "next";
import {useUser} from "../../hooks/useUser";
import Header from "../../components/Header";
import {Title} from "../../components/styledComponents";
import { Button, Container, Content, StudentCard, Pic } from "./styles";


const Studant:NextPage = () =>{
    const {user}= useUser();
    return(
        <Container>
            <Header/>
            <Content>
                <Title>Meus alunos</Title>
                {user.student &&
                    user.student.map(({studentId, studentName, matterName, imgURL})=>(
                    <StudentCard key={studentId}>
                        <div>
                            <Pic color={imgURL}></Pic>
                            <div className="info">
                                <h2>{studentName}</h2>
                                <h3>{matterName.map(matter=> matter+' | ')}</h3>
                            </div>
                        </div>
                        <div>
                            <Button color="var(--blue-500)">Mensagem</Button>
                            <Button color="var(--red-500)">Bloquear</Button>
                        </div>
                </StudentCard>
                ))}
            </Content>
        </Container>
    )
}

export default Studant;