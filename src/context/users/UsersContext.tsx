import { createContext } from 'react'
import { IUser } from '../../interfaces';

interface ContextProps {
    clients     : IUser[];
    employees   : IUser[];
    error       : boolean;
    isLoading   : boolean;
    deleteUser  : (id: number) => void;
}

export const UsersContext = createContext( {} as ContextProps );