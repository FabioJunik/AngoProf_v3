import type {NextPage} from 'next';
import Header from '../components/Header';
import {Container, Content, Card, PicContainer, Input, Button} from './styles';

const Profile:NextPage = ()=>{
    return (
        <Container>
            <Header/>
            <Content>
                <h1>Meu perfil</h1>
                <div className='column1'>
                    <Card>
                        <h2>Foto de perfil</h2>
                        <PicContainer className='perfilPic'/>
                        <p>Carregar foto</p>
                    </Card>
                    <Card>
                        <h2>Contacto</h2>
                        <Input placeholder='Telefone 1'/>
                        <Input placeholder='Telefone 2'/>
                        <Input placeholder='E-mail'/>
                        <Button>Salvar</Button>
                    </Card>
                </div>
                <div className='column2'>
                    <Card>
                        <h2>Informações gerais</h2>
                        <Input placeholder='Nome'/>
                        <Input placeholder='Sobrenome'/>
                        <Input placeholder='Genero'/>
                        <Input placeholder='Data de nascimento'/>
                        <Button>Salvar</Button>
                    </Card>
                    <Card>
                        <h2>Identidade</h2>
                        <PicContainer className='identityPic'/>
                        <Button>Enviar</Button>
                    </Card>

                </div>
                <div className='column3'>
                    <Card>
                        <h2>Senha</h2>
                        <Input placeholder='Antiga senha'/>
                        <Input placeholder='Nova senha'/>
                        <Input placeholder='Confirmar senha'/>
                        <Button>Salvar</Button>
                    </Card>
                    <Card >
                        <h2>Diploma</h2>
                        <PicContainer className='diplomaPic'/>
                        <Button>Enviar</Button>
                    </Card>
                </div>
            </Content>
        </Container>
    )
};

export default Profile;