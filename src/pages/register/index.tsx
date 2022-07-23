import { NextPage } from "next";
import { FormEvent, useState } from "react";
import { database } from "../../services/firebase";

import Logo from "../components/Logo";
import { Button, Container, Input, RegisterForm } from "./styles";

interface baseDataUserProps {
    name: string;
    lastname: string;
    email: string;
    password: string;
    typeUser: string;
}

const Register:NextPage = () =>{

    const [name, setName] = useState<string>('');
    const [lastname, setLastname] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPass, setConfirmPass] = useState<string>('');
    const [typeUser, setTypeUser] = useState<string>("teacher");

    function writeDataInDatabase(e:FormEvent){
        e.preventDefault();

        const ref = database.ref('users');

        const baseDataUser:baseDataUserProps ={
            name,
            lastname,
            email,
            password,
            typeUser
        }   

        ref.push(baseDataUser);
    }

    return(
        <Container>
            <Logo/>
            <RegisterForm onSubmit={writeDataInDatabase}>
                <h2>Crie sua conta</h2>
                <Input 
                    placeholder="Nome"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
                <Input 
                    placeholder="Sobrenome"
                    value={lastname}
                    onChange={(e)=>setLastname(e.target.value)}
                />
                <Input 
                    placeholder="E-mail"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <div>
                    <p>O que pretendes ser </p>
                    <div>
                        <span>Professor</span>
                        <input 
                            type="radio" 
                            name="type" 
                            value='teacher'
                            checked={'teacher' === typeUser}    
                            onChange={(e)=>setTypeUser(e.target.value)}
                        />
                    </div>
                    <div>
                        <span>Aluno</span>
                        <input 
                            type="radio" 
                            name="type"
                            value="student"
                            checked={'student' === typeUser}    
                            onChange={(e)=>setTypeUser(e.target.value)}
                        />
                    </div>
                </div>
                <Input 
                    placeholder="Senha"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <Input 
                    placeholder="Confirmar senha"
                    value={confirmPass}
                    onChange={(e)=>setConfirmPass(e.target.value)}
                />
                <Button type="submit">Criar conta</Button>
            </RegisterForm>
            <div className="content">
                <h2>Seja um Professor ou Aluno</h2>
                <p>Facil e eficaz! Facilite a tua busca por professores e aluno por todo país.</p>
                <p>
                    Professores, estudantes, autodidatas, apaixonados, graduados, profissionais... 
                    Junte-se à nossa comunidade onde iras encontrar grandes experiencias! Estamos te esperando.
                </p>
            </div>
        </Container>
    )
};

export default Register;