import { FC, useContext } from 'react'
import { IUser } from '../../interfaces/user';

import { MdModeEditOutline, MdOutlineDeleteOutline } from "react-icons/md";
import { Box, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { UsersContext } from '../../context';

interface Props{
    users: IUser[];
}

export const ListUsers: FC<Props> = ({ users }) => {

    const { deleteUser } = useContext(UsersContext);

    return (
        <>
            <TableContainer sx={{ backgroundColor: 'secondary.main', padding: '1rem 2rem', borderRadius: '1.5rem' }}>
                <Table>
                    <TableHead>
                        <TableRow >
                            <TableCell align='left'>Nombre completo</TableCell>
                            <TableCell align='left'>Email</TableCell>
                            <TableCell align='left'>Telefono</TableCell>
                            <TableCell align='left'>Nacimiento</TableCell>
                            <TableCell align='center'>Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users?.map((user) => (
                            <TableRow
                                key={user.id}
                                sx={{ 'td, th': { border: 0, padding: '1.5rem 1' } }}
                            >
                                <TableCell component="th" scope="row">
                                    {`${ user.name } ${ user.lastname }  `}
                                </TableCell>
                                <TableCell>{ user.email }</TableCell>
                                <TableCell>{ user.phone }</TableCell>
                                <TableCell>{ user.bornDate }</TableCell>
                                <TableCell>
                                    <Box display='flex' alignItems='center' justifyContent='center'>
                                        <IconButton sx={{ fontSize: '1.25rem', color: 'primary.main' }}>
                                            <MdModeEditOutline />
                                        </IconButton>

                                        <IconButton 
                                            sx={{ fontSize: '1.25rem', color: 'error.main' }}
                                            onClick={ () => deleteUser(user.id!) }
                                        >
                                            <MdOutlineDeleteOutline />
                                        </IconButton>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
