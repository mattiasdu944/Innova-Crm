import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { Box } from '@mui/material'

export const AuthLayout: FC = () => {
    return (
        <Box component='main'>
            <Outlet/>
        </Box>
    )
}
