import { FC, useContext } from 'react'
import { Link } from 'react-router-dom'

import { Grid, Typography } from '@mui/material'
import { CardQuote } from '../../components'
import { QuotesContext } from '../../context'

export const QuotesPage: FC = () => {

    const { quotes } = useContext( QuotesContext );


    return (
        <>
            <Typography variant='h1' mb={2}>Tus consultas</Typography>
            <Link to='/quotes/new'>
                <Typography mb={4} color='primary.main'>Agregar consulta</Typography>
            </Link>
            <Grid container spacing={3}>
                {
                    quotes.map( (quote, index) => (
                        <CardQuote  quote={ quote } key={ quote.id }/>
                    ))
                }
            </Grid>
        
        </>
    )
}
