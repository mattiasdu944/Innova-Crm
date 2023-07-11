import { ChangeEvent, FC, FormEvent, useContext, useState } from 'react'

import { Box, Button, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context'

export const FormRegister: FC = () => {

    const { register } = useContext(AuthContext);

    const [registerForm, setRegisterForm] = useState({
        name:'',
        lastname:'',
        date:'',
        email:'',
        password:'',
    })

    const handleRegisterForm = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setRegisterForm({...registerForm, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        register(registerForm);

    }

    return (
        <>
            <Box component='form' onSubmit={handleSubmit} sx={{ display:'flex', flexDirection:'column' }}>
                <TextField sx={{ mb:'1rem' }} 
                    onChange={handleRegisterForm}
                    name='name'
                    label='Nombre'
                />
                <TextField sx={{ mb:'1rem' }} 
                    onChange={handleRegisterForm}
                    label='Apellidos'
                    name='lastname'        
                />
                <TextField sx={{ mb:'1rem' }} 
                    onChange={handleRegisterForm}
                    name='date'
                    label='Fecha de nacimiento' type='date'
                />
                <TextField sx={{ mb:'1rem' }} 
                    onChange={handleRegisterForm}
                    name='email'
                    label='Correo electronico' 
                    type='email'
                />
                <TextField sx={{ mb:'1rem' }} 
                    onChange={handleRegisterForm}
                    label='Contraseña' type='password'
                    name='password'    
                />
                <Button type='submit' sx={{ mb:3 }}>Iniciar Sesion</Button>
                
                <Link to='/auth/login'>
                    <Typography color='primary.main'>Ya tienes cuenta? Inicia sesion</Typography>
                </Link>
            </Box>
        </>
    )
}
