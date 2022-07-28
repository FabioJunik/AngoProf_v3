import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import { database } from "../../../services/firebase";
import { useUser } from "../../hooks/useUser";

import { Container, TeacherCard, StarIcon} from "./styles";
import Header from "../../components/Header";
import { Content, Title, Button } from "../../components/styledComponents";
import Teacher from "../teacher";


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
    matter?: MatterProps[];
    typeUser: string;
}

interface StudentMatterProps{
    studentId: string;
    studentName: string;
    matterName: string; 
}

interface TeacherProps  {
    id: string;
    name: string;
    lastname: string;
    email: string;
    password: string;
    gender?: string;
    phone1?: string;
    phone2?: string;
    matter?: Array <MatterProps>;
    orderReceived?: StudentMatterProps[];
    typeUser: string;
}

const Search:NextPage = () => {
    const {user} = useUser();
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
                    'typeUser': value.typeUser,
                    'matter': value?.matter,
                }
            });
            setTeacher(userResult.filter(element=>element.typeUser === 'teacher'));
        })
    },[]);

    useEffect(()=>{searchTeacher()},[query.id]);

    function searchTeacher(){
        setTeacherFind([])
        return teacher.map(e=> e?.matter?.filter(element=>{
            
            if(element.name.toLowerCase() === query.id?.toString().toLowerCase()){
                setTeacherFind(preTeacher=>[...preTeacher,e]);
            }
        }))
    }

    function sendClassOrder(teacherId:string,teacherName:string, matterName: string){
        const ref = database.ref('users/');

        const matterData ={
            teacherId,
            teacherName,
            matterName,
        }

        const orderData = {
            'studentId': user.id,
            'studentName': user.name +' '+user.lastname,
            'matterName': matterName
        }

        user.orderSent = user.orderSent ? [... user.orderSent,matterData] : [matterData];
        localStorage.setItem('user', JSON.stringify(user));
        
        ref.child(user.id).update(user);

        const userRef = database.ref('users');

        let userResult = {} as TeacherProps;
        userRef.on('value', result =>{
            Object.entries<TeacherProps>(result.val()??{}).forEach(([key,value])=>{
                if(key == teacherId){
                    userResult = {
                        'id': key,
                        'name': value.name,
                        'lastname': value.lastname,
                        'gender': value.gender,
                        'phone1' : value.phone1,
                        'phone2' : value.phone2,
                        'email': value.email,
                        'password': value.password,
                        'typeUser': value.typeUser,
                        'matter' : value?.matter,
                        'orderReceived': value?.orderReceived
                    }
                    return
                }
            });
        })

        userResult.orderReceived = userResult.orderReceived ? 
        [...userResult.orderReceived, orderData] : [orderData];
                
        ref.child(userResult.id).update(userResult);            
        console.log(userResult)
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
                                <Button 
                                    color='var(--blue-500)'
                                    onClick={()=>sendClassOrder(teacher.id,teacher.name,query.id+'')}
                                >Adicionar</Button>
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