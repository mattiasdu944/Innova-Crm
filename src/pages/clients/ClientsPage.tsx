import { FC, useContext } from 'react'

import { Typography } from '@mui/material'
import { ListUsers } from '../../components'
import { Link } from 'react-router-dom'
import { UsersContext } from '../../context'

export const ClientsPage: FC = () => {

    const { clients, isLoading } = useContext( UsersContext );

    if( isLoading ){
        return (
            <> Cargando... </>
        )
    }

    return (
        <>
            <Typography variant='h1'>Gestiona tus pacientes</Typography>
            <Link to='/clients/new'>
                <Typography mb={5} color='primary.main'>Agregar paciente</Typography>
            </Link>
            
            <ListUsers users={ clients }/>
        </>
    )
}
