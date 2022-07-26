import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import { database } from "../../../services/firebase";

import { Container, TeacherCard, StarIcon} from "./styles";
import Header from "../../components/Header";
import { Content, Title, Button } from "../../components/styledComponents";


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

interface UserProps {
    id: string;
    name: string;
    lastname: string;
    gender: string;
    email: string;
    password: string;
    typeUser?: string;
    phone1: string;
    phone2: string;
    matter?: MatterProps[];
}

const Search:NextPage = () => {
    const {query} = useRouter();
    const [teacher, setTeacher] = useState<UserProps[]>([]);
    const [teacherFind, setTeacherFind] = useState<UserProps[]>([]);

    useEffect(()=>{
        const userRef = database.ref('users');

        userRef.on('value', result =>{
            const userResult = Object.entries<UserProps>(result.val()??{}).map(([key,value])=>{
                return {
                    'id': key,
                    'name': value.name,
                    'lastname': value.lastname,
                    'gender': value.gender,
                    'email': value.email,
                    'password': value.password,
                    'typeUser': value.typeUser,
                    'phone1': value.phone1,
                    'phone2': value.phone2,
                    'matter': value?.matter,
                }
            });
            setTeacher(userResult.filter(element=>element.typeUser === 'teacher'));
        })
    },[]);

    useEffect(()=>{searchTeacher()},[query.id])

    function searchTeacher(){
        setTeacherFind([])
        return teacher.map(e=> e?.matter?.filter(element=>{
            
            if(element.name.toLowerCase() === query.id?.toString().toLowerCase()){
                setTeacherFind(preTeacher=>[...preTeacher,e]);
            }
        }))
    }


    return (
        
        <Container>
            <Header/>
            <Content>
                <Title>Professores de : {query.id}</Title>
                {teacherFind &&
                    teacherFind.map(teacher=>(
                        <TeacherCard key={teacher.id}>
                        <div className='topCard'>
                            <div className='pic'></div>
                            <div>
                                <h2>{teacher.name} {teacher.lastname}</h2>
                                <h3>{teacher.matter?.map(matter=>matter.name +' | ')}</h3>
                                <div>
                                    <StarIcon/>
                                    <StarIcon/><StarIcon/>
                                    <StarIcon/><StarIcon/>
                                </div>
                            </div>
                        </div>
                        <div className='bottomCard'>
                            <Button color='var(--blue-500)'>Adicionar</Button>
                            <Button color='var(--blue-500)'>Perfil</Button>
                        </div>                    
                    </TeacherCard>
                    ))
                }
            </Content>
        </Container>
    )
}

export default Search;