import { FC } from 'react'

import { Typography } from '@mui/material'
import { ListUsers } from '../../components'

export const PatientsPage: FC = () => {
    return (
        <>
            <Typography variant='h1' mb={5}>Gestiona tus pacientes</Typography>
            
            <ListUsers/>
        </>
    )
}
