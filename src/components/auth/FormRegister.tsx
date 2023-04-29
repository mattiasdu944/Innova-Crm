import { FC } from 'react'

import { Box, Button, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export const FormRegister: FC = () => {
    return (
        <>
            <Box component='form' sx={{ display:'flex', flexDirection:'column' }}>
                <TextField sx={{ mb:'1rem' }} label='Nombre'/>
                <TextField sx={{ mb:'1rem' }} label='Apellidos'/>
                <TextField sx={{ mb:'1rem' }} label='Fecha de nacimiento' type='date'/>
                <TextField sx={{ mb:'1rem' }} label='Correo electronico' type='email'/>
                <TextField sx={{ mb:'1rem' }} label='Contraseña' type='password'/>
                <Button type='submit' sx={{ mb:3 }}>Iniciar Sesion</Button>
                
                <Link to='/auth/login'>
                    <Typography color='primary.main'>Ya tienes cuenta? Inicia sesion</Typography>
                </Link>
            </Box>
        </>
    )
}
