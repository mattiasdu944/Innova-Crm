import { FC } from 'react'

import { Box, Typography } from '@mui/material'
import { FormRegister } from '../../components'

export const RegisterPage: FC = () => {
    return (
        <Box 
            sx={{
                bgcolor:'secondary.main',
                padding:'2rem',
                borderRadius: '1rem',
                width:{ xs:'80%', md:'50%' },
            }}
        >
            <Typography variant='h1' textAlign='center'>Inicia Sesion</Typography>
            <Typography textAlign='center' mb={ 3 }>Comienza a organizar tus consultas</Typography>
            <FormRegister/>
        </Box>
    )
}
