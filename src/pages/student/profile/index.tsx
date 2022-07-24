import type {NextPage} from 'next';
import {useState} from 'react';
import { database } from '../../../services/firebase';
import { useUser } from '../../hooks/useUser';
import Header from '../../components/Header';
import {Title} from "../../components/styledComponents";
import {Container, Content, Card, PicContainer, Input, Button} from './styles';


const Profile:NextPage = ()=>{
    return (
        <Container>
            <Header/>
            <Content>
                <Title>Meu perfil</Title>
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
                        <select>
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>
                        </select>
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
                        <Input type='password'placeholder='Antiga senha' />
                        <Input placeholder='Nova senha'/>
                        <Input placeholder='Confirmar senha'/>
                        <Button>Salvar</Button>
                    </Card>
                </div>
            </Content>
        </Container>
    )
};

export default Profile;