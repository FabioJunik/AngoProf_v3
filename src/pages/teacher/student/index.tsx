import { NextPage } from "next";
import Header from "../components/Header";
import Title from "../components/Title";
import { Button, Container, Content, StudentCard } from "./styles";


const Studant:NextPage = () =>{
    return(
        <Container>
            <Header/>
            <Content>
                <Title>Meus alunos</Title>
                <StudentCard>
                    <div>
                        <div className="pic"></div>
                        <div className="info">
                            <h2>Carlos Gonga</h2>
                            <h3>Matemática | Física</h3>
                        </div>
                    </div>
                    <div>
                        <Button color="var(--blue-500)">Mensagem</Button>
                        <Button color="var(--red-500)">Bloquear</Button>
                    </div>
                    
                </StudentCard>
                <StudentCard>
                    <div>
                        <div className="pic"></div>
                        <div className="info">
                            <h2>Carlos Gonga</h2>
                            <h3>Matemática | Física</h3>
                        </div>
                    </div>
                    <div>
                        <Button color="var(--blue-500)">Mensagem</Button>
                        <Button color="var(--red-500)">Bloquear</Button>
                    </div>
                    
                </StudentCard>
                <StudentCard>
                    <div>
                        <div className="pic"></div>
                        <div className="info">
                            <h2>Carlos Gonga</h2>
                            <h3>Matemática | Física</h3>
                        </div>
                    </div>
                    <div>
                        <Button color="var(--blue-500)">Mensagem</Button>
                        <Button color="var(--red-500)">Bloquear</Button>
                    </div>
                    
                </StudentCard>
                <StudentCard>
                    <div>
                        <div className="pic"></div>
                        <div className="info">
                            <h2>Carlos Gonga</h2>
                            <h3>Matemática | Física</h3>
                        </div>
                    </div>
                    <div>
                        <Button color="var(--blue-500)">Mensagem</Button>
                        <Button color="var(--red-500)">Bloquear</Button>
                    </div>
                    
                </StudentCard>
                <StudentCard>
                    <div>
                        <div className="pic"></div>
                        <div className="info">
                            <h2>Carlos Gonga</h2>
                            <h3>Matemática | Física</h3>
                        </div>
                    </div>
                    <div>
                        <Button color="var(--blue-500)">Mensagem</Button>
                        <Button color="var(--red-500)">Bloquear</Button>
                    </div>
                    
                </StudentCard>
                <StudentCard>
                    <div>
                        <div className="pic"></div>
                        <div className="info">
                            <h2>Carlos Gonga</h2>
                            <h3>Matemática | Física</h3>
                        </div>
                    </div>
                    <div>
                        <Button color="var(--blue-500)">Mensagem</Button>
                        <Button color="var(--red-500)">Bloquear</Button>
                    </div>
                    
                </StudentCard>
                <StudentCard>
                    <div>
                        <div className="pic"></div>
                        <div className="info">
                            <h2>Carlos Gonga</h2>
                            <h3>Matemática | Física</h3>
                        </div>
                    </div>
                    <div>
                        <Button color="var(--blue-500)">Mensagem</Button>
                        <Button color="var(--red-500)">Bloquear</Button>
                    </div>
                    
                </StudentCard>
                
            </Content>
        </Container>
    )
}

export default Studant;