import type { NextPage } from 'next'
import { useUser } from '../hooks/useUser';
import { database } from '../../services/firebase';

import Header from '../components/Header';
import {Title} from "../components/styledComponents";
import {Container, Content, OrderCard, Button} from './homeStyles';


interface TeacherMatterProps{
    teacherId: string;
    teacherName: string;
    matterName: string;
}

interface TeacherOfStudentProps{
    teacherId: string;
    teacherName: string;
    matterName: string[];
}

interface StudentOfTeacherProps{
    studentId: string;
    studentName: string;
    matterName: string[];
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
    teacher?: TeacherOfStudentProps[];
    orderSent: Array <TeacherMatterProps>;
    typeUser: string;
}

const TeacherHome:NextPage = () =>{
    const {user} = useUser();

    function answerOrder(studentId:string, matterName: string, typeAnswer: 'accept'|'negate'){
        const ref = database.ref('users/');

        user.orderReceived = user?.orderReceived?.filter(order => order.studentId !== studentId || order.matterName !== matterName);
        
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
                        'orderSent': value.orderSent || []
                    }
                }
            });
            
            userResult.orderSent = userResult.orderSent.filter(order=> order.teacherId !== user.id || order.matterName !== matterName);
                               
        })

        if(typeAnswer === 'accept')
            linkUsers(userResult, matterName);
        else{
            localStorage.setItem('user', JSON.stringify(user));
            ref.child(userResult.id).update(userResult);
            ref.child(user.id).update(user);
        }
                
    }

    function linkUsers (student:StudentProps, matterName:string){        
        const ref = database.ref('users/');

        const studentData ={   
            studentId: student.id,
            studentName: student.name +' '+student.lastname,
            matterName: [matterName]
        }

        const teacherData = {
            teacherId: user.id,
            teacherName: user.name +' '+ user.lastname,
            matterName: [matterName]
        }

        const studentFound = user?.student?.find(element => element.studentId === student.id);

        if(studentFound){

            user?.student?.map(element=>{
                if(element.studentId === student.id){
                    element.matterName = [...element.matterName, matterName];
                }
            })

            console.log(student.teacher)

            student?.teacher?.map(element=>{
                console.log(element)
                if(element.teacherId === user.id){
                    element.matterName = [...element.matterName, matterName];
                }
            })
        }
        else{
            user.student = user.student ? [...user.student, studentData]: [studentData];  
            student.teacher = student.teacher ? [...student.teacher, teacherData]: [teacherData]; 
        }

        
        localStorage.setItem('user', JSON.stringify(user));
        ref.child(student.id).update(student);
        ref.child(user.id).update(user);

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
                                    onClick={()=>answerOrder(order.studentId,order.matterName, "negate")}
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