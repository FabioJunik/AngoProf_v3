import {ReactNode, createContext, useState, useContext} from "react";

interface pageProps{
    children: ReactNode
}

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

interface StudentMatterProps{
    studentId: string;
    studentName: string;
    matterName: string;
}

interface userProps {
    id: string;
    name: string;
    lastname: string;
    email: string;
    password: string;
    gender?: string;
    phone1?: string;
    phone2?: string;
    matter?: Array <MatterProps>;
    teacher?: TeacherMatterProps[];
    orderReceived?: StudentMatterProps[];
    orderSent?: TeacherMatterProps[];
    typeUser: string;
}

interface userContextData {
    user: userProps;
    setUser: (user: userProps) => void;
}

const UserContext = createContext<userContextData>({}as userContextData);

export function UserProvider({children}:pageProps){
    
    let userLocal = {};
    

    if (typeof window !== 'undefined') {
        if(localStorage.getItem('user'))
          userLocal = JSON.parse(localStorage.getItem('user') || '');
          console.log(userLocal)
    }

    const [user, setUser]= useState<userProps>(userLocal as userProps);
    
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}   

export function useUser(){
    const context = useContext(UserContext);

    return context;
}