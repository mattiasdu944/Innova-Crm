import { FC } from 'react'

import { Avatar, Box, Button, Card, Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const CardQuote: FC = () => {
    const navigate = useNavigate();

    const handleNavigation = ( term: string ) => {
        navigate(`${ term }`);

    }

    return (
        <Grid item xs={ 12 } md={ 6 } lg={ 4 }>
            <Card sx={{ padding:'1rem 2rem' }}>
                <Box display='flex' gap={1} alignItems='center' mb={2}>
                    <Avatar/>
                    <Typography>Mattias Duarte</Typography>
                </Box>
            
                
                <Typography sx={{ color:'#f9f9f0' }}>12 Feb de 2023</Typography>
                <Typography variant='subtitle1' sx={{ fontSize:'1.25rem', mb:'1rem' }}>Cirugia para dientes del juicio</Typography>
                
                
                <Button 
                    variant='outlined'
                    onClick={() => handleNavigation(`/quotes/1`)}
                >
                    Ver consulta
                </Button>
            </Card>
        </Grid>    

    )
}
