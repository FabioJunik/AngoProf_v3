import { NextPage } from "next";
import Link from "next/link";
import Logo from "../components/Logo";
import { Button, Container, FacebookIcon, GoogleIcon, Input, LoginForm, SocialMidiaCard } from "./styles";


const Login:NextPage = () => {

    return(
        <Container>
            <Logo/>
            <LoginForm>
                <h2>Conectar-se</h2>
                <Input placeholder="Email"/>
                <Input placeholder="Senha"/>
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