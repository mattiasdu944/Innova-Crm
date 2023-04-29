import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { SideMenu } from '../components'
import { Box } from '@mui/material'

export const MainLayout: FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                minHeight: '100vh',
                width: '100%',
                padding: '1.5rem',
                gap: '2rem'
            }}
        >
            {/* Sidemenu */}
            <SideMenu/>

            {/* Pages */}
            <Box component='main' width='100%'>
                <Outlet/>
            </Box>
        </Box>
    )
}
