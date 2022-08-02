import { NextPage } from "next";
import Router from "next/router";
import { FormEvent, useState } from "react";

import { database } from "../../services/firebase";

import Logo from "../components/Logo";
import { Button, Container, Input, RegisterForm} from "./styles";

interface baseDataUserProps {
    name: string;
    lastname: string;
    email: string;
    password: string;
    typeUser: string;
}

const Register:NextPage = () =>{

    const [messageError, setMessageError] = useState('');
    const [error, setError] = useState(false);
    const [typeUser, setTypeUser] = useState<string>("teacher");

    const [form, setForm] = useState<>({
        name: '',
        lastname: '',
        email: '',
        password: '',
        confirmPass:''
    });

    function handleChange(e: FormEvent){
        const {target} = e;
        let newProps = form;
        newProps[target.name] = target.value;

        setForm({...newProps});
    }

    function handleSubmit(e:FormEvent){
        e.preventDefault();
        setError(true);

        const lastNamePiece = form.lastname.trim().split(' ');
        let emptyValues = Object.values(form).some(obj => obj == '');
        
        if(emptyValues){
            setMessageError('Preencha todos os campos para continuar !');
        }else if(form.name.trim().includes(' ')){
            setMessageError('Nome invalido!');
        }else if(lastNamePiece.length > 1 && lastNamePiece[0].length > 3){
            setMessageError('Sobrenone invalido!');
        }
        else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email))
            setMessageError('E-mail invalido!');
        else if (form.password !== form.confirmPass)
            setMessageError('Verificar senha!');
        else{
            setError(false);
            writeDataInDatabase();
            Router.push('/login');
        }

    }

    function writeDataInDatabase(){
        const {name, lastname, email, password} = form;

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
            <RegisterForm onSubmit={handleSubmit}>
                <h2>Crie sua conta</h2>
                <Input 
                    placeholder="Nome"
                    name="name"
                    value={form.name}
                    onChange={(e)=>handleChange(e)}
                />
                <Input 
                    placeholder="Sobrenome"
                    name="lastname"
                    value={form.lastname}
                    onChange={(e)=>handleChange(e)}
                />
                <Input 
                    placeholder="E-mail"
                    name="email"
                    value={form.email}
                    onChange={(e)=>handleChange(e)}
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
                    type="password"
                    placeholder="Senha"
                    name="password"
                    value={form.password}
                    onChange={(e)=>handleChange(e)}
                />
                <Input 
                    type="password"
                    placeholder="Confirmar senha"
                    name="confirmPass"
                    value={form.confirmPass}
                    onChange={(e)=>handleChange(e)}
                />
                {error && <p className="error">{messageError}</p>}
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