import { FC, useState, useEffect } from 'react';
import { UsersContext } from '.';
import { supabase } from '../../supabase';
import { IUser } from '../../interfaces';


interface PropsProvider{
    children : JSX.Element;
}

export const UsersProvider:FC<PropsProvider> = ({ children }) => {

    // ESTADOS GLOBALES
    const [clients, setClients] = useState<IUser[]>([]);
    const [employees, setEmployees] = useState<IUser[]>([]);

    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false)


    // OBTENER A LOS CLIENTES
    const getAllClients = async () => {
        try {
            setIsLoading( true );
            const  { data } = await supabase.from('users').select().eq('role', '3');
            setClients( data as IUser[] );
            setIsLoading( false );

        } catch (error) {
            setError(true);

        }finally{
            setIsLoading( false );
        }
    }

    // OBTENER LOS EMPLEADOS
    const getAllEmployees = async () => {
        try {
            setIsLoading( true );
            const { data } = await supabase.from('users').select().eq('role', '2');
            setEmployees( data as IUser[] );
            setIsLoading( false );

        } catch (error) {
            setError(true);

        }finally{
            setIsLoading( false );
        }
    }

    
    // EJECUTA CUANDO SE CARGA LA APP
    useEffect(() => {
        getAllClients();
        getAllEmployees();
    }, [])
    
    // ELIMINAR UN USUARIO SEGUN EL TIPO DE ROL
    const deleteUser = async ( id: number ) => {
        try {
            const { error } = await supabase
                .from('users')
                .delete()
                .eq('id', id)
            
            if( error ){
                throw new Error;
            }

            const newClients = clients.filter((cliente) => cliente.id != id);
            setClients(newClients)

        } catch (error) {
            console.log(error);
            setError(true);
        }
    } 
    


    
    return (

        <UsersContext.Provider value={{
            clients,
            employees,
            error,
            isLoading,
            deleteUser
        }}>
            { children }
        </UsersContext.Provider>
    )
}