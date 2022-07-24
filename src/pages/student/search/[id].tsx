import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import { database } from "../../../services/firebase";

import { Container, TeacherCard, StarIcon} from "./styles";
import Header from "../../components/Header";
import { Content, Title, Button } from "../../components/styledComponents";


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
}

const Search:NextPage = () => {
    const {query} = useRouter();
    const [searchText, setSearchText] = useState(query.id);
    const [teacher, setTeacher] = useState<UserProps[]>([]);

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
                }
            });
            setTeacher(userResult.filter(element=>element.typeUser === 'teacher'));
        })
    },[]);

    return (
        
        <Container>
            <Header/>
            <Content>
                <Title>Professores de : {searchText}</Title>
                {teacher &&
                    teacher.map(teacher=>(
                        <TeacherCard key={teacher.id}>
                        <div className='topCard'>
                            <div className='pic'></div>
                            <div>
                                <h2>{teacher.name} {teacher.lastname}</h2>
                                <h3>Materias</h3>
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

export default Search;