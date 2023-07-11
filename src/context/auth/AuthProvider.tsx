import { FC, useState } from 'react';
import { AuthContext } from './AuthContext';
import { supabase } from '../../supabase';

interface PropsProvider{
    children : JSX.Element | JSX.Element[]
}

export const AuthProvider:FC<PropsProvider> = ({ children }) => {
    const [user, setUser] = useState();
    const [status, setStatus] = useState('');
    const [isError, setIsError] = useState({
        error: false,
        message:'',
    })


    const login = async (email: string,password:string): Promise<void> => {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password
            })
            console.log({error});
            const { user, session } = data;
            console.log({user, session});



        } catch (error) {
            setIsError({
                error:true,
                message:'Error en las credenciales'
            })
        }
    }

    const register = async (newUser: { name: string; lastname: string; date: string; email: string; password: string }) => {
        
        let { data, error } = await supabase.auth.signUp({
            email: newUser.email,
            password: newUser.password
        })
        if( error ){
            return;
        }
        
        const userResponse = await supabase
            .from('users')
            .insert([{ 
                name: newUser.name,
                lastname: newUser.lastname , 
                password: newUser.password,
                email: newUser.email ,
                phone: '7722333' ,
                bornDate: '1999-09-12' ,
                role: 2 ,
            }])
        if( userResponse.error){
            console.log(userResponse.error);
            return;
        }
    }

    return (
        <AuthContext.Provider value={{
            user,
            status,

            // Metodos
            login,
            register
        }}>
            { children }
        </AuthContext.Provider>
    )
}