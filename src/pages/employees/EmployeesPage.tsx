import { FC, useContext } from 'react'

import { Typography } from '@mui/material'
import { ListUsers } from '../../components'
import { UsersContext } from '../../context'

export const EmployeesPage: FC = () => {

    const { employees } = useContext( UsersContext );

    return (
        <>
            <Typography variant='h1' mb={5}>Gestiona tus empleados</Typography>
            
            <ListUsers users={ employees }/>
        </>
    )
}
