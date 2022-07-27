import { NextPage } from "next";
import { useUser } from '../hooks/useUser';

import Header from "../components/Header";
import { Content, Title, Button} from "../components/styledComponents";
import { Container, StarIcon, OrderCard} from "./homeStyles";


const HomeStudent:NextPage = ()=>{
    const {user} = useUser();
    return (
        <Container>
            <Header/>
            <Content>
                <Title>Pedidos de aulas enviados</Title>
                {user.orderSent && 
                    user.orderSent.map(order=>(
                        <OrderCard key={order.teacherId}>
                            <div className='topCard'>
                                <div className='pic'></div>
                                <div>
                                    <h2>{order.teacherName}</h2>
                                    <h3>{order.matterName}</h3>
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
                    ))}
                
            </Content>
        </Container>
    )
}

export default HomeStudent;