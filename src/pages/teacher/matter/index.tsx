import type { NextPage } from "next";
import Header from "../../components/Header";
import {Title} from "../../components/styledComponents";
import { Container, Content, MatterCard, AddMatterCard, Button, MatterModal } from "./styles";

const Matter:NextPage = () =>{
    return(
        <Container>
            <Header/>
            <Content>
                <Title>Materias Lecionadas</Title>
                <AddMatterCard>
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
            <MatterModal>
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
            </MatterModal>
        </Container>
    )
}

export default Matter;