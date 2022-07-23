import {ReactNode, createContext, useState, useContext} from "react";

interface pageProps{
    children: ReactNode
}

interface userProps {
    id: string;
    name: string;
    lastname: string;
    email: string;
    password: string;
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
          console.log(localStorage.getItem('user'))
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