import type { NextPage } from 'next'
import { useUser } from '../hooks/useUser';

import Header from '../components/Header';
import {Title} from "../components/styledComponents";
import {Container, Content, OrderCard, Button} from './homeStyles';

const TeacherHome:NextPage = () =>{
    const {user} = useUser();

    return (
        <Container>
            <Header/>
            <Content>
                <Title>Pedidos de aulas</Title>
                {user.orderReceived &&
                    user?.orderReceived?.map(order=>(
                        <OrderCard key={order.studentId}>
                            <div className='topCard'>
                                <div className='pic'></div>
                                <div>
                                    <h2>{order.studentName}</h2>
                                    <h3>{order.matterName}</h3>
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
                        </OrderCard>
                    ))
                }
            </Content>
        </Container>
    )
}

export default TeacherHome;