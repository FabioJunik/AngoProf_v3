import { NextPage } from "next";

import {useUser} from "../../hooks/useUser";

import Header from "../../components/Header";
import {Content, Title, Button, Pic} from "../../components/styledComponents";
import { Container, TeacherCard, StarIcon} from "./styles";


const Teacher:NextPage = ()=> {
    const {user} = useUser();
    return(
        <Container>
            <Header/>
            <Content>
                <Title>Meus professores</Title>
                {user.teacher &&
                    user.teacher.map(({teacherId, teacherName, imgURL, matterName})=>(
                        <TeacherCard key={teacherId}>
                            <div className='topCard'>
                                <Pic color={imgURL}></Pic>
                                <div>
                                    <h2>{teacherName}</h2>
                                    <h3>{matterName.map(matter=> matter+' | ')}</h3>
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
                    ))
                }
            </Content>
        </Container>
    )
}

export default Teacher;