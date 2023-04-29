import { FC } from 'react'
import { IMenu } from '../../interfaces'

import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useNavigate } from 'react-router-dom';

interface Props{
    options: IMenu[];
}

export const MenuOptions: FC<Props> = ({ options }) => {


    const navigate = useNavigate();

    const handleNavigation = ( term: string ) => {
        navigate(`${ term }`);

    }


    return (
        <List>
            {options.map( item  => (
                <ListItem key={ item.path } onClick={ () => handleNavigation( item.path ) } disablePadding>
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
