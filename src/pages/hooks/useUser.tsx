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

    const [user, setUser]= useState<userProps>({}as userProps);
    
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