import { NextPage } from "next";
import Link from "next/link";
import Router from "next/router";
import { FormEvent, useEffect, useState } from "react";

import { useUser } from "../hooks/useUser";
import { database } from "../../services/firebase";

import Logo from "../components/Logo";
import {Loader} from "../components/Loader";
import { Button, Container, FacebookIcon, GoogleIcon, 
        Input, LoginForm, SocialMidiaCard } 
        from "./styles";

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

interface TeacherMatterProps{
    teacherId: string;
    teacherName: string;
    matterName: string;
}

interface StudentMatterProps{
    studentId: string;
    studentName: string;
    matterName: string;
}

interface TeacherOfStudentProps{
    teacherId: string;
    teacherName: string;
    matterName: string[];
}

interface StudentOfTeacherProps{
    studentId: string;
    studentName: string;
    matterName: string[];
}

interface userProps {
    id: string;
    name: string;
    lastname: string;
    email: string;
    password: string;
    gender?: string;
    phone1?: string;
    phone2?: string;
    matter?: Array <MatterProps>;
    teacher?: TeacherOfStudentProps[];
    student?: StudentOfTeacherProps[];
    orderReceived?: StudentMatterProps[];
    orderSent?: TeacherMatterProps[];
    imgURL?: string;
    typeUser: string;
}

const Login:NextPage = () => {

    const {setUser:provideUser} = useUser();
    
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [user, setUser] = useState<userProps[]>([]);
    const [loader , setLoader] = useState(false);

    useEffect(()=>{
        const userRef = database.ref('users');

        userRef.on('value', result =>{
            const userResult = Object.entries<userProps>(result.val()??{}).map(([key,value])=>{
                return {
                    'id': key,
                    'name': value.name,
                    'lastname': value.lastname,
                    'gender': value.gender,
                    'phone1' : value.phone1,
                    'phone2' : value.phone2,
                    'email': value.email,
                    'password': value.password,
                    'imgURL' : value.imgURL,
                    'typeUser': value.typeUser,
                    'matter' : value?.matter,
                    'teacher' : value?.teacher,
                    'orderSent' : value?.orderSent,
                    'orderReceived': value?.orderReceived,
                }
            });
            setUser(userResult);
        })
    },[]);

    function handleLogin(e:FormEvent){
        e.preventDefault();

        user.map((user)=>{
            if(user.email === email && user.password === password) {
                const daseData = {
                    'id': user.id,
                    'name': user.name,
                    'lastname': user.lastname,
                    'gender': user.gender || '',
                    'phone1' : user.phone1 || '',
                    'phone2' : user.phone2 || '',
                    'email': user.email,
                    'password': user.password,
                    'imgURL': user.imgURL || '',
                    'typeUser': user.typeUser,
                }
                const studentData = {
                    ...daseData,
                    'teacher': user.teacher || [],
                    'orderSent' : user.orderSent || [],
                }
                const teacherData = {
                    ...daseData,
                    'matter' : user.matter || [],
                    'student': user.student || [],
                    'orderReceived': user.orderReceived || [],
                }
               
                if(user.typeUser === 'teacher'){
                    setLoader(true);
                    provideUser(teacherData);
                    localStorage.setItem('user', JSON.stringify(teacherData));
                    Router.push('/teacher');
                }else{
                    setLoader(true);
                    provideUser(studentData);
                    localStorage.setItem('user', JSON.stringify(studentData));
                    Router.push('/student');
                }
            }
        })
    }

    return(
        <Container>
            <Logo/>
            <LoginForm onSubmit={handleLogin}>
                <h2>Conectar-se</h2>
                <Input 
                    placeholder="Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <Input 
                    placeholder="Senha"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <Button>Entrar</Button>
                <div className="socialMedia">
                    <SocialMidiaCard color="#3b5998">
                        <FacebookIcon/>
                        <span>Facebook</span>
                    </SocialMidiaCard>
                    <SocialMidiaCard color="#fff">
                        <GoogleIcon/>
                        <span>Google</span>
                    </SocialMidiaCard>
                </div>
                <div className="info">
                    <p>Você ainda não possui um cadastro ?</p>
                    <Link href='/register'>Cadastrar-se</Link>
                </div>
            </LoginForm>
            {loader && <Loader/>}
        </Container>
    )
}



export default Login;