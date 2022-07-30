import {NextPage} from 'next';
import { useRouter } from "next/router";
import {useState, useEffect} from "react";

import { database } from "../../../services/firebase";

import Header from '../../components/Header';
import {Loader} from '../../components/Loader';
import {Button} from '../../components/styledComponents';
import {Container, Content, 
        TeacherCard, PicContainer, StarIcon, SubTitle
    } from './styles';


interface MatterProps{
    id: number;
    name: string;
    basicPrice?: { 
        online: string,
        presential: string
    };
    intermediaryPrice?: { 
        online: string,
        presential: string
    };
    advancedPrice?: { 
        online: string,
        presential: string
    };
}

interface StudentOfTeacherProps{
    studentId: string;
    studentName: string;
    matterName: string[];
}

interface TeacherProps  {
    id: string;
    name: string;
    lastname: string;
    email: string;
    phone1: string;
    phone2: string;
    matter: Array <MatterProps>;
    student: StudentOfTeacherProps[];
    imgURL: string;
    bio: string;
}

const TeacherProfile:NextPage = ()=>{
    const {query} = useRouter();
    const [teacher, setTeacher] = useState<TeacherProps>();

    useEffect(()=>{
        const userRef = database.ref('users');

        userRef.on('value', async function (result) {
            const userResult = await Object.entries<TeacherProps>(result.val()??{}).map(([key,value])=>{
                return {
                    'id': key,
                    'name': value.name,
                    'lastname': value.lastname,
                    'email' : value.email, 
                    'phone1' : value.phone1 || '',
                    'phone2' : value.phone2 || '',
                    'bio' : value.bio || '',
                    'imgURL': value.imgURL,
                    'matter' : value.matter || [],
                    'student': value.student || [],
                }
            });
            setTeacher(userResult.filter(element=>element.id === query.id)[0]);
        })
    },[query.id]);
    console.log(teacher)
    return (
        <Container>
            <Header/>
            {!teacher && <Loader/>}
            {teacher &&
            <Content>
                <div className="column1">
                    <div className="bio">
                        <SubTitle>Mais sobre {teacher.name+' '+teacher.lastname}  👨🏽‍🏫</SubTitle>
                        <p>{teacher.bio}</p>
                    </div>
                    <div className="moreInfo">
                        <div className="matter">
                            <SubTitle>Mateias 📚</SubTitle>
                            <ul>
                                {teacher.matter.map(matter=><li key={matter.id}>{matter.name}</li>)}
                            </ul>
                        </div>
                        <div className="contacts">
                            <SubTitle>Contactos 📱</SubTitle>
                            <ul>
                                <li>{teacher.email}</li>
                                <li>{teacher.phone1}</li>
                                <li>{teacher.phone2}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="column2">
                    <TeacherCard>
                        <PicContainer color={teacher.imgURL}/>
                        <h2>{teacher.name+' '+teacher.lastname}</h2>
                        <div>
                            <StarIcon/>
                            <StarIcon/><StarIcon/>
                            <StarIcon/><StarIcon/>
                        </div>
                        <div className='moreInfo'>
                            <p>Niveis de aula </p>
                            <p>Básico | Intermedia | Avançado</p>
                            <p>Número de aluno <span>{teacher.student.length}</span></p>
                        </div>
                        <Button color="var(--blue-500)">Pedir aular</Button>
                    </TeacherCard>
                </div>
            </Content>
            }
        </Container>
    )
}

export default TeacherProfile;