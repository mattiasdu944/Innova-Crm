import { FC } from 'react'
import { Link } from 'react-router-dom'

import { Grid, Typography } from '@mui/material'
import { CardQuote } from '../../components'

export const QuotesPage: FC = () => {
    return (
        <>
            <Typography variant='h1' mb={2}>Tus consultas</Typography>
            <Link to='/quotes/new'>
                <Typography mb={4} color='primary.main'>Agregar consulta</Typography>
            </Link>
            <Grid container spacing={3}>
                {
                    [1,2,3,4,5,6].map( () => (
                        <CardQuote/>
                    ))
                }
            </Grid>
        
        </>
    )
}
