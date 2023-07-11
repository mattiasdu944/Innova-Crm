import { createContext } from 'react';


interface ContextProps{
    user: any;
    status: any;
    
    login:  (email: string,password:string) => Promise<void>;
    register: (newUser: { name: string; lastname: string; date: string; email: string; password: string }) => Promise<void>;
}

export const AuthContext = createContext({} as ContextProps);