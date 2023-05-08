import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { IQuote } from '../../interfaces'
import { Avatar, Box, Button, Card, Grid, Typography } from '@mui/material'

interface Props{
    quote: IQuote; 
}

export const CardQuote: FC<Props> = ({ quote }) => {
    const { user } = quote;

    const navigate = useNavigate();

    const handleNavigation = ( term: string ) => {
        navigate(`${ term }`);
    }

    return (
        <Grid item xs={ 12 } md={ 6 } lg={ 4 }>
            <Card sx={{ padding:'1rem 2rem' }}>
                <Box display='flex' gap={1} alignItems='center' mb={2}>
                    <Avatar/>
                    <Typography>{`${ user.name } ${ user.lastname }`}</Typography>
                </Box>
            
                
                <Typography sx={{ color:'#f9f9f0' }}>{ quote.date }</Typography>
                <Typography variant='subtitle1' sx={{ fontSize:'1.25rem', mb:'1rem' }}>
                    { quote.name }
                </Typography>
                
                
                <Button 
                    variant='outlined'
                    onClick={() => handleNavigation(`/quotes/${ quote.id }`)}
                >
                    Ver consulta
                </Button>
            </Card>
        </Grid>    

    )
}
