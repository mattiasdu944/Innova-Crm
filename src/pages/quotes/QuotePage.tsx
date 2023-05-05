import { Box, Button, Grid, Typography } from '@mui/material'
import { FC } from 'react'

export const QuotePage:FC = () => {
    return (
        <Box>

            <Typography variant='h1' mb={2}>Consulta</Typography>

            <Grid container sx={{ backgroundColor: 'secondary.main', padding: '2rem', borderRadius: '1.5rem' }}>
                <Grid xs={ 12 } md={ 5 }>
                    <Box  sx={{ textAlign:'center' }}>
                        <Box 
                            component='img' 
                            src='https://cdn-icons-png.flaticon.com/512/149/149071.png'
                            sx={{ maxWidth:'300px' }}    
                        />
                        <Box>
                            <Typography variant='h2' mb={2}>Nombre de Usuario</Typography>
                            <Typography variant='subtitle1' mb={2}>nombre@correo.com</Typography>
                            <Typography variant='subtitle1' mb={2}>+591 000-000-0000</Typography>
                        </Box>
                    </Box>
                </Grid>

                <Grid xs={ 12 } md={ 7 } sx={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
                    <Box mb={ 3 }>
                        <Typography variant='h2' mb={2}>Tipo de procedimiento: procedimiento</Typography>
                        <Typography variant='subtitle1' mb={2}>
                            Fecha de consulta: 12-12-12
                        </Typography>
                    </Box>
                    <Box sx={{ display:'flex', gap:'1rem' }}>
                        <Button color='error'>
                            Concluir consulta
                        </Button>
                        <Button>
                            Eliminar consulta
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
