import type { NextPage } from "next";
import { useState } from "react";
import Modal from 'react-modal';

import Header from "../../components/Header";
import {Title} from "../../components/styledComponents";
import { Container, Content, MatterCard, AddMatterCard, Button,CloseIcon} from "./styles";

Modal.setAppElement('#modal-root');

const Matter:NextPage = () =>{
    const [isOpen, setIsOpen] = useState(false);
    
    return(
        <Container>
            <Header/>
            <Content>
                <Title>Materias Lecionadas</Title>
                <AddMatterCard onClick={()=>setIsOpen(!isOpen)}>
                    <span>+</span>
                </AddMatterCard>
                <MatterCard>
                    <div className="topCard">
                        <h2>Matematica</h2>
                        <span>Alunos : 05</span>
                    </div>
                    <div className="midiumCard">
                        <p>Presincial 2000 kz | Online 1500kz</p>
                        <p>Basico | Intermediario | Avançado</p>
                    </div>
                    <div className='bottomCard'>
                        <Button color='var(--blue-500)'>Editar</Button>
                        <Button color='var(--red-500)'>Eliminar</Button>
                    </div>  
                </MatterCard>
                <MatterCard>
                    <div className="topCard">
                        <h2>Matematica</h2>
                        <span>Alunos : 05</span>
                    </div>
                    <div className="midiumCard">
                        <p>Presincial 2000 kz | Online 1500kz</p>
                        <p>Basico | Intermediario | Avançado</p>
                    </div>
                    <div className='bottomCard'>
                        <Button color='var(--blue-500)'>Editar</Button>
                        <Button color='var(--red-500)'>Eliminar</Button>
                    </div>  
                </MatterCard>
                <MatterCard>
                    <div className="topCard">
                        <h2>Matematica</h2>
                        <span>Alunos : 05</span>
                    </div>
                    <div className="midiumCard">
                        <p>Presincial 2000 kz | Online 1500kz</p>
                        <p>Basico | Intermediario | Avançado</p>
                    </div>
                    <div className='bottomCard'>
                        <Button color='var(--blue-500)'>Editar</Button>
                        <Button color='var(--red-500)'>Eliminar</Button>
                    </div>  
                </MatterCard>
                <MatterCard>
                    <div className="topCard">
                        <h2>Matematica</h2>
                        <span>Alunos : 05</span>
                    </div>
                    <div className="midiumCard">
                        <p>Presincial 2000 kz | Online 1500kz</p>
                        <p>Basico | Intermediario | Avançado</p>
                    </div>
                    <div className='bottomCard'>
                        <Button color='var(--blue-500)'>Editar</Button>
                        <Button color='var(--red-500)'>Eliminar</Button>
                    </div>  
                </MatterCard>                
            </Content>
            <Modal 
                isOpen={isOpen}
                overlayClassName='react-modal-overlay'
                className='MatterModal'
            >
                <CloseIcon onClick={()=>setIsOpen(false)}/>
                <h2>Adicionar uma nova materia</h2>
                <form>
                    <input type="text" placeholder="Nome"/>
                    <p>Nivel Basico</p>
                    <input type="number" placeholder="Preço online"/>
                    <input type="number" placeholder="Preço presencial"/>
                    <p>Nivel Intermedirio</p>
                    <input type="number" placeholder="Preço online"/>
                    <input type="number" placeholder="Preço presencial"/>
                    <p>Nivel Avançado</p>
                    <input type="number" placeholder="Preço online"/>
                    <input type="number" placeholder="Preço presencial"/>
                    <Button type="submit" color="var(--blue-500)">Salvar</Button>
                </form>
            </Modal>
        </Container>
    )
}

export default Matter;