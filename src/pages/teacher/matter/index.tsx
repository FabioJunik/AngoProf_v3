import type { NextPage } from "next";
import Header from "../../components/Header";
import {Title} from "../../components/styledComponents";
import { Container, Content, MatterCard, Button } from "./styles";

const Matter:NextPage = () =>{
    return(
        <Container>
            <Header/>
            <Content>
                <Title>Materias Lecionadas</Title>
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
        </Container>
    )
}

export default Matter;