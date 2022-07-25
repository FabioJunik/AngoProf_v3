import { NextPage } from "next";
import Link from "next/link";
import Router from "next/router";
import { FormEvent, useEffect, useState } from "react";
import { database } from "../../services/firebase";
import Logo from "../components/Logo";
import { useUser } from "../hooks/useUser";
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

interface userProps {
    id: string;
    name: string;
    lastname: string;
    email: string;
    password: string;
    typeUser: string;
    matter?: MatterProps[];
}

const Login:NextPage = () => {

    const {setUser:provideUser} = useUser();
    
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [user, setUser] = useState<userProps[]>([]);

    useEffect(()=>{
        const userRef = database.ref('users');

        userRef.on('value', result =>{
            const userResult = Object.entries<userProps>(result.val()??{}).map(([key,value])=>{
                return {
                    'id': key,
                    'name': value.name,
                    'lastname': value.lastname,
                    'email': value.email,
                    'password': value.password,
                    'typeUser': value.typeUser,
                    'matter' : value?.matter,
                }
            });
            setUser(userResult);
        })
    },[]);

    function handleLogin(e:FormEvent){
        e.preventDefault();

        user.map((user)=>{
            if(user.email === email && user.password === password) {
                if(user.typeUser === 'teacher'){
                    Router.push('/teacher');
                    provideUser(user);
                    localStorage.setItem('user', JSON.stringify(user));
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
        </Container>
    )
}



export default Login;