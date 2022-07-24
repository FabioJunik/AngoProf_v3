import { NextPage } from "next";
import Header from "../components/Header";
import { Content, Title, Button} from "../components/styledComponents";
import { Container, StarIcon, OrderCard} from "./homeStyles";


const HomeStudent:NextPage = ()=>{
    return (
        <Container>
            <Header/>
            <Content>
                <Title>Pedidos de aulas enviados</Title>
                <OrderCard>
                    <div className='topCard'>
                        <div className='pic'></div>
                        <div>
                            <h2>Fábio Dos Santos</h2>
                            <h3>Matemática</h3>
                            <div>
                                <StarIcon/>
                                <StarIcon/><StarIcon/>
                                <StarIcon/><StarIcon/>
                            </div>
                        </div>
                    </div>
                    <div className='midiumCard'>
                        <p>Modo: Presencial</p> |
                        <p>Nivel: Intermediario</p>
                    </div>
                    <div className='bottomCard'>
                        <Button color='var(--blue-500)'>Ver mais</Button>
                        <Button color='var(--red-500)'>Cancelar</Button>
                    </div>                    
                </OrderCard>
                <OrderCard>
                    <div className='topCard'>
                        <div className='pic'></div>
                        <div>
                            <h2>Fábio Dos Santos</h2>
                            <h3>Matemática</h3>
                            <div>
                                <StarIcon/>
                                <StarIcon/><StarIcon/>
                                <StarIcon/><StarIcon/>
                            </div>
                        </div>
                    </div>
                    <div className='midiumCard'>
                        <p>Modo: Presencial</p> |
                        <p>Nivel: Intermediario</p>
                    </div>
                    <div className='bottomCard'>
                        <Button color='var(--blue-500)'>Ver mais</Button>
                        <Button color='var(--red-500)'>Cancelar</Button>
                    </div>                    
                </OrderCard>
                <OrderCard>
                    <div className='topCard'>
                        <div className='pic'></div>
                        <div>
                            <h2>Fábio Dos Santos</h2>
                            <h3>Matemática</h3>
                            <div>
                                <StarIcon/>
                                <StarIcon/><StarIcon/>
                                <StarIcon/><StarIcon/>
                            </div>
                        </div>
                    </div>
                    <div className='midiumCard'>
                        <p>Modo: Presencial</p> |
                        <p>Nivel: Intermediario</p>
                    </div>
                    <div className='bottomCard'>
                        <Button color='var(--blue-500)'>Ver mais</Button>
                        <Button color='var(--red-500)'>Cancelar</Button>
                    </div>                    
                </OrderCard>
                <OrderCard>
                    <div className='topCard'>
                        <div className='pic'></div>
                        <div>
                            <h2>Fábio Dos Santos</h2>
                            <h3>Matemática</h3>
                            <div>
                                <StarIcon/>
                                <StarIcon/><StarIcon/>
                                <StarIcon/><StarIcon/>
                            </div>
                        </div>
                    </div>
                    <div className='midiumCard'>
                        <p>Modo: Presencial</p> |
                        <p>Nivel: Intermediario</p>
                    </div>
                    <div className='bottomCard'>
                        <Button color='var(--blue-500)'>Ver mais</Button>
                        <Button color='var(--red-500)'>Cancelar</Button>
                    </div>                    
                </OrderCard>
            </Content>
        </Container>
    )
}

export default HomeStudent;