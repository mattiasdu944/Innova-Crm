import { FC } from 'react'
import { IMenu } from '../../interfaces'

import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

interface Props{
    options: IMenu[];
}

export const MenuOptions: FC<Props> = ({ options }) => {
    return (
        <List>
            {options.map( item  => (
                <ListItem key={ item.path } disablePadding>
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
                            { item.icon }
                        </ListItemIcon>
                        <ListItemText primary={ item.name } />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    )
}
