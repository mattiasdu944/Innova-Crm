import { FC, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Box, Button, Grid, Typography } from '@mui/material'
import { QuotesContext } from '../../context';


export const QuotePage:FC = () => {
    const { getQuoteById, isLoading, quote } = useContext( QuotesContext );
    
    const { id } = useParams();
    
    useEffect(() => {
        getQuoteById( id! );
    }, [])
    
    
    if( isLoading ){
        return(
            <>Cargango...</>
        )
    }
    
    const { user } = quote;

    return (
        <Box>

            <Typography variant='h1' mb={2}>Consulta</Typography>

            <Grid container sx={{ backgroundColor: 'secondary.main', padding: '2rem', borderRadius: '1.5rem' }}>
                <Grid item sm={ 12 } md={ 12 } lg={ 5 }>
                    <Box  sx={{ textAlign:'center' }}>
                        <Box 
                            component='img' 
                            src='https://cdn-icons-png.flaticon.com/512/149/149071.png'
                            sx={{ maxWidth:'300px', mb:5  }}    
                        />
                        <Box>
                            <Typography variant='h1' mb={2}>{`${ user?.name } ${ user?.lastname }`}</Typography>
                            <Typography variant='h2' mb={2}>{ user?.email }</Typography>
                            <Typography variant='subtitle1' mb={2}>+591 { user?.phone }</Typography>
                        </Box>
                    </Box>
                </Grid>

                <Grid item sm={ 12 } md={ 12 } lg={ 7 } sx={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
                    <Box mb={ 3 }>
                        <Typography variant='h2' mb={2}>Tipo de procedimiento: { quote.name }</Typography>
                        <Typography variant='subtitle1' mb={2}>
                           Fecha de consulta: { quote.date }
                        </Typography>
                    </Box>
                    <Box sx={{ display:'flex', gap:'1rem' }}>
                        <Button>
                            Concluir consulta
                        </Button>
                        <Button color='error'>
                            Eliminar consulta
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
