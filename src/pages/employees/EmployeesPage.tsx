import { FC } from 'react'

import { Typography } from '@mui/material'
import { ListUsers } from '../../components'

export const EmployeesPage: FC = () => {
    return (
        <>
            <Typography variant='h1' mb={5}>Gestiona tus empleados</Typography>
            
            <ListUsers/>
        </>
    )
}
