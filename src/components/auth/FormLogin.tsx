import { FC } from 'react'
import { Link } from 'react-router-dom'

import { Box, Button, TextField, Typography } from '@mui/material';

export const FormLogin: FC = () => {
    return (
        <>
            <Box component='form' sx={{ display:'flex', flexDirection:'column' }}>
                <TextField sx={{ mb:'1rem' }} label='Correo electronico' type='email'/>
                <TextField sx={{ mb:'1rem' }} label='Contraseña' type='password'/>
                <Button type='submit' sx={{ mb:2 }}>Iniciar Sesion</Button>

                <Link to='/auth/register'>
                    <Typography color='primary.main'>No tienes cuenta? Registrate</Typography>
                </Link>
            </Box>
        </>
    )
}
