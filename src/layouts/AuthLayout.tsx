import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { Box } from '@mui/material'

export const AuthLayout: FC = () => {
    return (
        <Box component='main' sx={{ display:'flex', width:'100%', minHeight:'100vh', justifyContent:'center', alignItems:'center', flexDirection:'column' }}>
            <Outlet/>
        </Box>
    )
}
