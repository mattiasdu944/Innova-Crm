import { FC } from 'react'

import { Box, Typography } from '@mui/material';
import { FormLogin } from '../../components/auth/FormLogin';

export const LoginPage: FC = () => {
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
            <FormLogin/>
        </Box>
    )
}
