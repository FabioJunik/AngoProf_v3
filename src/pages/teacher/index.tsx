import type { NextPage } from 'next'
import Header from './components/Header';
import {Container, Content, Card, Button} from './homeStyles';

const TeacherHome:NextPage = () =>{
    return (
        <Container>
            <Header/>
            <Content>
                <h1>Pedidos de aulas</h1>
                <Card>
                    <div className='topCard'>
                        <div className='pic'></div>
                        <div>
                            <h2>Fábio Dos Santos</h2>
                            <h3>Matemática</h3>
                        </div>
                    </div>
                    <div className='midiumCard'>
                        <p>17/07/2022</p>
                        <p>Presencial</p>
                        <p>Intermediario</p>
                    </div>
                    <div className='bottomCard'>
                        <Button color='var(--blue-500)'>Aceitar</Button>
                        <Button color='var(--red-500)'>Negar</Button>
                    </div>                    
                </Card>
                <Card>
                    <div className='topCard'>
                        <div className='pic'></div>
                        <div>
                            <h2>Nome do aluno</h2>
                            <h3>Materia</h3>
                        </div>
                    </div>
                    <div className='midiumCard'>
                        <p>17/07/2022</p>
                        <p>Presencial</p>
                        <p>Intermediario</p>
                    </div>
                    <div className='bottomCard'>
                        <Button color='var(--blue-500)'>Aceitar</Button>
                        <Button color='var(--red-500)'>Negar</Button>
                    </div>                    
                </Card>
                <Card>
                    <div className='topCard'>
                        <div className='pic'></div>
                        <div>
                            <h2>Nome do aluno</h2>
                            <h3>Materia</h3>
                        </div>
                    </div>
                    <div className='midiumCard'>
                        <p>17/07/2022</p>
                        <p>Presencial</p>
                        <p>Intermediario</p>
                    </div>
                    <div className='bottomCard'>
                        <Button color='var(--blue-500)'>Aceitar</Button>
                        <Button color='var(--red-500)'>Negar</Button>
                    </div>                    
                </Card>
                <Card>
                    <div className='topCard'>
                        <div className='pic'></div>
                        <div>
                            <h2>Nome do aluno</h2>
                            <h3>Materia</h3>
                        </div>
                    </div>
                    <div className='midiumCard'>
                        <p>17/07/2022</p>
                        <p>Presencial</p>
                        <p>Intermediario</p>
                    </div>
                    <div className='bottomCard'>
                        <Button color='var(--blue-500)'>Aceitar</Button>
                        <Button color='var(--red-500)'>Negar</Button>
                    </div>                    
                </Card>
                <Card>
                    <div className='topCard'>
                        <div className='pic'></div>
                        <div>
                            <h2>Nome do aluno</h2>
                            <h3>Materia</h3>
                        </div>
                    </div>
                    <div className='midiumCard'>
                        <p>17/07/2022</p>
                        <p>Presencial</p>
                        <p>Intermediario</p>
                    </div>
                    <div className='bottomCard'>
                        <Button color='var(--blue-500)'>Aceitar</Button>
                        <Button color='var(--red-500)'>Negar</Button>
                    </div>                    
                </Card>
                <Card>
                    <div className='topCard'>
                        <div className='pic'></div>
                        <div>
                            <h2>Nome do aluno</h2>
                            <h3>Materia</h3>
                        </div>
                    </div>
                    <div className='midiumCard'>
                        <p>17/07/2022</p>
                        <p>Presencial</p>
                        <p>Intermediario</p>
                    </div>
                    <div className='bottomCard'>
                        <Button color='var(--blue-500)'>Aceitar</Button>
                        <Button color='var(--red-500)'>Negar</Button>
                    </div>                    
                </Card>
            </Content>
        </Container>
    )
}

export default TeacherHome;