import { NextPage } from "next";
import Header from "../../components/Header";
import Content from "../../components/Content";
import Button from "../../components/Button";
import Title from "../../components/Title";
import { Container, TeacherCard, StarIcon} from "./styles";


const Teacher:NextPage = ()=> {
    return(
        <Container>
            <Header/>
            <Content>
                <Title>Meus professores</Title>
                <TeacherCard>
                    <div className='topCard'>
                        <div className='pic'></div>
                        <div>
                            <h2>Fábio Dos Santos</h2>
                            <h3>Matemática | Física</h3>
                            <div>
                                <StarIcon/>
                                <StarIcon/><StarIcon/>
                                <StarIcon/><StarIcon/>
                            </div>
                        </div>
                    </div>
                    <div className='bottomCard'>
                        <Button color='var(--blue-500)'>Perfil</Button>
                        <Button color='var(--blue-500)'>Chat</Button>
                    </div>                    
                </TeacherCard>
                <TeacherCard>
                    <div className='topCard'>
                        <div className='pic'></div>
                        <div>
                            <h2>Fábio Dos Santos</h2>
                            <h3>Matemática | Física</h3>
                            <div>
                                <StarIcon/>
                                <StarIcon/><StarIcon/>
                                <StarIcon/><StarIcon/>
                            </div>
                        </div>
                    </div>
                    <div className='bottomCard'>
                        <Button color='var(--blue-500)'>Perfil</Button>
                        <Button color='var(--blue-500)'>Chat</Button>
                    </div>                    
                </TeacherCard>
                <TeacherCard>
                    <div className='topCard'>
                        <div className='pic'></div>
                        <div>
                            <h2>Fábio Dos Santos</h2>
                            <h3>Matemática | Física</h3>
                            <div>
                                <StarIcon/>
                                <StarIcon/><StarIcon/>
                                <StarIcon/><StarIcon/>
                            </div>
                        </div>
                    </div>
                    <div className='bottomCard'>
                        <Button color='var(--blue-500)'>Perfil</Button>
                        <Button color='var(--blue-500)'>Chat</Button>
                    </div>                    
                </TeacherCard>
            </Content>
        </Container>
    )
}

export default Teacher;