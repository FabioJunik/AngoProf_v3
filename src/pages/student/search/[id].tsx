import { NextPage } from "next";
import Link from 'next/link';
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import { database } from "../../../services/firebase";
import { useUser } from "../../hooks/useUser";

import Header from "../../components/Header";
import {Loader} from "../../components/Loader";
import { Container, TeacherCard, StarIcon} from "./styles";
import { Content, Title, Button, Pic } from "../../components/styledComponents";


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
    imgURL: string;
    typeUser: string;
}

interface StudentMatterProps{
    studentId: string;
    studentName: string;
    matterName: string;
    imgURL: string;
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
    imgURL: string;
    orderReceived?: StudentMatterProps[];
    typeUser: string;
}

const Search:NextPage = () => {
    const {user} = useUser();
    const {query} = useRouter();
    const [matterSearch, setMatterSearch] = useState<string>('');
    const [teacher, setTeacher] = useState<UserProps[]>([]);
    const [teacherFind, setTeacherFind] = useState<UserProps[]>([]);

    useEffect(()=>setMatterSearch(query.id?.toString() || ''),[query.id]);

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
                    'imgURL': value.imgURL
                }
            });
            setTeacher(userResult.filter(element=>element.typeUser === 'teacher'));
        })
    },[]);

    useEffect(()=>{
        setTeacherFind([])
        teacher.map(e=> e?.matter?.filter(element=>{
            if(element.name.toLowerCase() === matterSearch.toLowerCase()){
                setTeacherFind(preTeacher=>[...preTeacher,e]);
            }
        }))
    },[matterSearch]);


    function sendClassOrder(teacherId:string,
        teacherName:string, teacherLastname:string,
        imgURL: string, matterName: string
    ){
        const ref = database.ref('users/');

        const matterData ={
            teacherId,
            teacherName: teacherName+' '+teacherLastname,
            matterName,
            imgURL
        }

        const orderData = {
            'studentId': user.id,
            'studentName': user.name +' '+user.lastname,
            'matterName': matterName,
            'imgURL': user.imgURL || ''
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
                        'gender': value.gender || '',
                        'phone1' : value.phone1 || '',
                        'phone2' : value.phone2 || '',
                        'email': value.email,
                        'password': value.password,
                        'typeUser': value.typeUser,
                        'matter' : value.matter,
                        'orderReceived': value?.orderReceived,
                        'imgURL': value.imgURL || ''
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
                {!teacherFind && <Loader/>}
                {teacherFind &&
                    teacherFind.map(({id,imgURL, matter, name, lastname})=>(
                        <TeacherCard key={id}>
                            <div className='topCard'>
                                <Pic color={imgURL}></Pic>
                                <div>
                                    <h2>{name} {lastname}</h2>
                                    <h3>{matter?.map(matter=>matter.name +' | ')}</h3>
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
                                    onClick={()=>sendClassOrder(id,name,lastname,imgURL,query.id+'')}
                                >Adicionar</Button>
                                <Link href={`http://localhost:3000/student/teacherprofile/${id}`}>
                                    <Button color='var(--blue-500)'>Perfil</Button>
                                </Link>
                            </div>                    
                        </TeacherCard>
                    ))
                }
            </Content>
        </Container>
    )
}

export default Search;