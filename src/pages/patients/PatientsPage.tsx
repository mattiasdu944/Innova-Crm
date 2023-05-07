import { FC } from 'react'

import { Typography } from '@mui/material'
import { ListUsers } from '../../components'
import { Link } from 'react-router-dom'

export const PatientsPage: FC = () => {
    return (
        <>
            <Typography variant='h1'>Gestiona tus pacientes</Typography>
            <Link to='/patients/new'>
                <Typography mb={5} color='primary.main'>Agregar paciente</Typography>
            </Link>
            
            <ListUsers/>
        </>
    )
}
