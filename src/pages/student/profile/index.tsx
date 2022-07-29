import type {NextPage} from 'next';
import {useState, FormEvent} from 'react';

import { database, storage } from '../../../services/firebase';
import { useUser } from '../../hooks/useUser';

import Header from '../../components/Header';
import {Title} from "../../components/styledComponents";
import {Container, Content, Card, PicContainer, Input, Button} from './styles';

interface UserProps {
    name: string;
    lastname: string;
    gender: string;
    email: string;
    password: string;
    phone1: string;
    phone2: string;
    imgURL?: string;
}

const Profile:NextPage = ()=>{
    const {user}= useUser();
    
    const [name, setName] = useState<string>(user.name);
    const [lastname, setLastname] = useState<string>(user.lastname);
    const [email, setEmail] = useState<string>(user.email);
    const [password, setPassword] = useState<string>(user.password);
    const [gender, setGender] = useState<string>(user.gender || '');
    const [phone1, setPhone1] = useState<string>(user.phone1 || '');
    const [phone2, setPhone2] = useState<string>(user.phone2 || '');
    const [imgURL, setImgURL] = useState<string>(user.imgURL || '');

    const [imgProcess, setImgProcess] = useState<number>(0);

    function updateImage(event:FormEvent){
        event.preventDefault();

        const file = event.target[0]?.files[0];
        console.log(file)
        if(!file) return 

        const uploudTask = storage.ref(`images/${file.name}`).put(file);

        uploudTask.on(
            'state_changed', 
            snapshot =>{
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setImgProcess(progress);
            },
            error =>{
                alert(error)
            },
            () =>{
                storage.ref("images").child(file.name).getDownloadURL().then(url =>{
                    setImgURL(url);
                    console.log(url);
                    url && updateUserData();
                })
             }        
        )
    }
    function updateUserData(){
        const ref = database.ref('users/');
        console.log('entrou')
        const userData:UserProps ={
            name,
            lastname,
            gender,
            email,
            password,
            phone1,
            phone2,
            imgURL
        }

        console.log(userData)
        ref.child(user.id).update(userData);
        localStorage.setItem('user', JSON.stringify(userData));
   }
    return (
        <Container>
            <Header/>
            <Content>
                <Title>Meu perfil</Title>
                <div className='column1'>
                    <Card onSubmit={updateImage}>
                        <h2>Foto de perfil</h2>
                        {imgURL && <PicContainer color={imgURL} htmlFor="image"/>}
                        <input type="file" id='image'/>
                        <Button type='submit'>{imgProcess == 0 ? 'Processar imagem': 'Guardar'}</Button>
                    </Card>
                    <Card>
                        <h2>Contacto</h2>
                        <Input 
                            placeholder='Telefone 1'
                            value={phone1}
                            onChange={e=>setPhone1(e.target.value)}
                        />
                        <Input 
                            placeholder='Telefone 2'
                            value={phone2}
                            onChange={e=>setPhone2(e.target.value)}
                        />
                        <Input placeholder='E-mail' value={email}
                        onChange={e=>setEmail(e.target.value)}
                    />
                        <Button onClick={updateUserData}>Salvar</Button>
                    </Card>
                </div>
                <div className='column2'>
                    <Card>
                        <h2>Informações gerais</h2>
                        <Input 
                            placeholder='Nome' 
                            value={name}
                            onChange={e=>setName(e.target.value)}
                        />
                        <Input 
                            placeholder='Sobrenome' 
                            value={lastname}
                            onChange={e=>setLastname(e.target.value)}
                        />
                        <select value={gender} onChange={e=>{setGender(e.target.value)}}>
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>
                        </select>
                        <Input placeholder='Data de nascimento'/>
                        <Button onClick={updateUserData}>Salvar</Button>
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
                        <Input 
                            type='password'
                            placeholder='Antiga senha' 
                            value={password}
                            onChange={e=>setPassword(e.target.value)}
                        />
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