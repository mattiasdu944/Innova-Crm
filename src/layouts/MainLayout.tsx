import { Box, Typography } from '@mui/material'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'

export const MainLayout: FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                minHeight: '100vh',
                width: '100%'
            }}
        >
            {/* Sidemenu */}
            <Typography>Sidemenu</Typography>

            {/* Pages */}
            <Box component='main' width='100%'>
                <Outlet/>
            </Box>
        </Box>
    )
}
