import {NextPage} from 'next';

import Header from '../../components/Header';
import {Title, Button} from '../../components/styledComponents';
import {Container, Content, 
        TeacherCard, PicContainer, StarIcon, SubTitle
    } from './styles';

const TeacherProfile:NextPage = ()=>{
    return (
        <Container>
            <Header/>
            <Content>
                <div className="column1">
                    <div className="bio">
                        <SubTitle>Mais sobre Fábio dos Santos 👨🏽‍🏫</SubTitle>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic typesetting, 
                            remaining essentially unchanged.
                        </p>
                    </div>
                    <div className="moreInfo">
                        <div className="matter">
                            <SubTitle>Mateias 📚</SubTitle>
                            <ul>
                                <li>Programação</li>
                                <li>Matématica</li>
                                <li>Física</li>
                            </ul>
                        </div>
                        <div className="contacts">
                            <SubTitle>Contactos 📱</SubTitle>
                            <ul>
                                <li>fabiojunik@gmail.com</li>
                                <li>994032032</li>
                                <li>994032032</li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="column2">
                    <TeacherCard>
                        <PicContainer/>
                        <h2>Fábio dos Santos</h2>
                        <div>
                            <StarIcon/>
                            <StarIcon/><StarIcon/>
                            <StarIcon/><StarIcon/>
                            {/* <span>(10 avaliações)</span> */}
                        </div>
                        <div className='moreInfo'>
                            <p>Niveis de aula </p>
                            <p>Básico | Intermedia | Avançado</p>
                            <p>Número de aluno <span>25</span></p>
                        </div>
                        <Button color="var(--blue-500)">Pedir aular</Button>
                    </TeacherCard>
                </div>
            </Content>
        </Container>
    )
}

export default TeacherProfile;