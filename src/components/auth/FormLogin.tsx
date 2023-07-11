import { ChangeEvent, FC, FormEvent, useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import { Box, Button, TextField, Typography } from '@mui/material';
import { AuthContext } from '../../context';

export const FormLogin: FC = () => {

    const { login } = useContext( AuthContext );

    const [formLogin, setFormLogin] = useState({
        email:'',
        password:'',
    })


    const handleFormLogin = (e:ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setFormLogin({...formLogin, [e.target.name]:e.target.value })
    }

    const handleSubmit = async (e:FormEvent) => {
        e.preventDefault();

        login( formLogin.email, formLogin.password )

    }
    return (
        <>
            <Box component='form' onSubmit={ handleSubmit } sx={{ display:'flex', flexDirection:'column' }}>
                <TextField 
                    sx={{ mb:'1rem' }} 
                    label='Correo electronico' 
                    type='email'
                    name='email'
                    onChange={ e => handleFormLogin(e) }
                />
                <TextField 
                    sx={{ mb:'1rem' }} 
                    label='Contraseña' 
                    type='password'
                    name='password'
                    onChange={ e => handleFormLogin(e) }
                />
                <Button type='submit' sx={{ mb:2 }}>Iniciar Sesion</Button>

                <Link to='/auth/register'>
                    <Typography color='primary.main'>No tienes cuenta? Registrate</Typography>
                </Link>
            </Box>
        </>
    )
}
