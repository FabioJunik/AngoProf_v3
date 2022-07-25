import type { NextPage } from "next";
import { FormEvent, useState } from "react";
import { useUser } from "../../hooks/useUser";

import Modal from 'react-modal';

import Header from "../../components/Header";
import {Title} from "../../components/styledComponents";
import { Container, Content, MatterCard, AddMatterCard, Button,CloseIcon} from "./styles";
import { database } from "../../../services/firebase";

Modal.setAppElement('#modal-root');

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

const Matter:NextPage = () =>{
    const {user} = useUser();
    const [isOpen, setIsOpen] = useState(false);

    const [name, setName] = useState<string>('');
    const [onBasicPrice, setOnBasicPrice] = useState<string>('');
    const [preBasicPrice, setPreBasicPrice] = useState<string>('');
    const [onIntermediaryPrice, setOnIntermediaryPrice] = useState<string>('');
    const [preIntermediaryPrice, setPreIntermediaryPrice] = useState<string>('');
    const [onAdvancedPrice, setOnAdvancedPrice] = useState<string>('');
    const [preAdvancedPrice, setPreAdvancedPrice] = useState<string>('');

    const getMatterId =()=>user?.matter?.length ? user.matter.length + 1 : 1;

    function createNewMatter(e: FormEvent){
        e.preventDefault();
        const ref = database.ref('users/');

        const matterData:MatterProps ={
            id: getMatterId(),
            name,
            basicPrice: { 
                online: onBasicPrice,
                presential: preBasicPrice
            },
            intermediaryPrice: { 
                online: onIntermediaryPrice,
                presential: preIntermediaryPrice
            },
            advancedPrice: { 
                online: onAdvancedPrice,
                presential: preAdvancedPrice
            }   
        }

        user.matter = user.matter ? [... user.matter,matterData] : [matterData];
        localStorage.setItem('user', JSON.stringify(user));
        
        ref.child(user.id).update(user);
    }

    console.log(user)

    return(
        <Container>
            <Header/>
            <Content>
                <Title>Materias Lecionadas</Title>
                <AddMatterCard onClick={()=>setIsOpen(!isOpen)}>
                    <span>+</span>
                </AddMatterCard>
                {
                    user.matter &&
                    user.matter.map(matter =>(
                        <MatterCard key={matter.id}>
                            <div className="topCard">
                                <h2>{matter.name}</h2>
                                <span>Alunos : 00</span>
                            </div>
                            <div className="midiumCard">
                                <p>
                                    Presincial : 
                                    {matter?.basicPrice?.presential || '---'} | 
                                    {matter?.intermediaryPrice?.presential || '---'} |  
                                    {matter?.advancedPrice?.presential || '---'}   
                                </p>
                                <p>
                                    Online : 
                                    {matter?.basicPrice?.online || '---'} | 
                                    {matter?.intermediaryPrice?.online || '---'} |  
                                    {matter?.advancedPrice?.online || '---'}
                                </p>
                            </div>
                            <div className='bottomCard'>
                                <Button color='var(--blue-500)'>Editar</Button>
                                <Button color='var(--red-500)'>Eliminar</Button>
                            </div>  
                        </MatterCard>
                    ))                    
                }
            </Content>
            <Modal 
                isOpen={isOpen}
                overlayClassName='react-modal-overlay'
                className='MatterModal'
            >
                <CloseIcon onClick={()=>setIsOpen(false)}/>
                <h2>Adicionar uma nova materia</h2>
                <form>
                    <input 
                        type="text"
                        placeholder="Nome"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                    />
                    <p>Nivel Basico</p>
                    <input 
                        type="number"
                        placeholder="Preço online"
                        value={onBasicPrice}
                        onChange={(e)=>setOnBasicPrice(e.target.value)}
                    />
                    <input 
                        type="number"
                        placeholder="Preço presencial"
                        value={preBasicPrice}
                        onChange={(e)=>setPreBasicPrice(e.target.value)}
                    />
                    <p>Nivel Intermedirio</p>
                    <input 
                        type="number"
                        placeholder="Preço online"
                        value={onIntermediaryPrice}
                        onChange={(e)=>setOnIntermediaryPrice(e.target.value)}
                    />
                    <input 
                        type="number"
                        placeholder="Preço presencial"
                        value={preIntermediaryPrice}
                        onChange={(e)=>setPreIntermediaryPrice(e.target.value)}
                    />
                    <p>Nivel Avançado</p>
                    <input 
                        type="number"
                        placeholder="Preço online"
                        value={onAdvancedPrice}
                        onChange={(e)=>setOnAdvancedPrice(e.target.value)}
                    />
                    <input 
                        type="number"
                        placeholder="Preço presencial"
                        value={preAdvancedPrice}
                        onChange={(e)=>setPreAdvancedPrice(e.target.value)}
                    />
                    <Button 
                        type="submit"
                        color="var(--blue-500)"
                        onClick={createNewMatter}
                    >Salvar</Button>
                </form>
            </Modal>
        </Container>
    )
}

export default Matter;