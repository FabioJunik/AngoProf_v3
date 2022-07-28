import type { NextPage } from 'next'
import { useUser } from '../hooks/useUser';
import { database } from '../../services/firebase';

import Header from '../components/Header';
import {Title} from "../components/styledComponents";
import {Container, Content, OrderCard, Button} from './homeStyles';

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

interface TeacherMatterProps{
    teacherId: string;
    teacherName: string;
    matterName: string;
}
interface StudentProps  {
    id: string;
    name: string;
    lastname: string;
    email: string;
    password: string;
    gender?: string;
    phone1?: string;
    phone2?: string;
    teacher?: Array <MatterProps>;
    orderSent: Array <TeacherMatterProps>;
    typeUser: string;
}

const TeacherHome:NextPage = () =>{
    const {user} = useUser();

    function answerOrder(studentId:string, matterName: string, typeAnswer: 'accept'|'negate'){
        const ref = database.ref('users/');

        user.orderReceived = user?.orderReceived?.filter(order => order.studentId !== studentId || order.matterName !== matterName);
        
        localStorage.setItem('user', JSON.stringify(user));
        ref.child(user.id).update(user);
        console.log(user);
        
        const userRef = database.ref('users');

        let userResult = {} as StudentProps;
        userRef.on('value', result =>{
             Object.entries<StudentProps>(result.val()??{}).forEach(([key,value])=>{
                if(key === studentId){
                    userResult = {
                        'id': key,
                        'name': value.name,
                        'lastname': value.lastname,
                        'gender': value?.gender || '',
                        'phone1' : value?.phone1 || '',
                        'phone2' : value?.phone2 || '',
                        'email': value.email,
                        'password': value.password,
                        'typeUser': value.typeUser,
                        'teacher' : value?.teacher || [],
                        'orderSent': value.orderSent
                    }
                }
            });
            
            // userResult.orderSent =  Object.keys(userResult.orderSent).map(key=> userResult.orderSent[Number(key)] );
            userResult.orderSent = userResult.orderSent.filter(order=> order.teacherId !== user.id || order.matterName !== matterName);
            ref.child(userResult.id).update(userResult);            
            console.log(userResult.orderSent) 
                              
        })
                
    }

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
                                <Button 
                                    color='var(--blue-500)'
                                    onClick={()=>answerOrder(order.studentId,order.matterName, "accept")}
                                >
                                    Aceitar
                                </Button>
                                <Button 
                                    color='var(--red-500)'
                                    // onClick={}
                                >
                                    Negar
                                </Button>
                            </div>                    
                        </OrderCard>
                    ))
                }
            </Content>
        </Container>
    )
}

export default TeacherHome;