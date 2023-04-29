import { FC } from 'react'
import { ADMIN_MENU } from '../../constants'

import { MenuOptions } from '.'
import { HiOutlineLogin } from "react-icons/hi";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, } from '@mui/material'

export const SideMenu: FC = () => {
    return (
        <>
            <Box sx={{ 
                display:'flex',
                flexDirection:'column',
                width: 350, 
                bgcolor:'secondary.main', 
                minHeight:'100%',
                padding: '1rem ',
                borderRadius: '2rem',
                boxShadow: '0px 5px 15px rgba(0,0,0,0.05)',
            }}>
                <Box sx={{ padding:'2rem' }}>
                    <Typography variant='h2'>Mattias Duarte</Typography>
                    <Typography variant='subtitle2' color='primary.main'>Administrador</Typography>
                </Box>
                <MenuOptions options={ ADMIN_MENU }/>
                {/* <MenuOptions options={  }/> */}
                <Box flex={ 1 }/>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton
                            sx={{
                                mb:'.5rem',
                                padding: '.75rem 1.5rem',
                                borderRadius:'.75rem',
                                ':hover':{
                                    bgcolor:'secondary.dark',
                                }
                            }}
                        >
                            <ListItemIcon sx={{ minWidth:'auto', color:'text.primary', fontSize:'1.25rem' }}>
                                <HiOutlineLogin/>
                            </ListItemIcon>
                            <ListItemText primary={ 'Salir' } />
                        </ListItemButton>
                    </ListItem>
            
                </List>

            </Box>
        </>
    )
}
