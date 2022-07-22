import { NextPage } from "next";
import Logo from "../components/Logo";
import { Button, Container, Input, RegisterContainer } from "./styles";


const Register:NextPage = () =>{
    return(
        <Container>
            <Logo/>
            <RegisterContainer>
                <h2>Crie sua conta</h2>
                <Input placeholder="Nome"/>
                <Input placeholder="Sobrenome"/>
                <Input placeholder="E-mail"/>
                <Input placeholder="Senha"/>
                <Input placeholder="Confirmar senha"/>
                <Button>Criar conta</Button>
            </RegisterContainer>
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