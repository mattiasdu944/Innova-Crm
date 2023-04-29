import { FC } from 'react'
import { IUser } from '../../interfaces/user';

import { MdModeEditOutline, MdOutlineDeleteOutline } from "react-icons/md";
import { Box, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

interface Props{
    patients?: IUser[];
}

export const ListUsers: FC<Props> = ({ patients }) => {
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
                        {[1, 2, 3, 4, 5, 6, 6, 7, 7, 8, 8].map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{ 'td, th': { border: 0, padding: '1.5rem 1' } }}
                            >
                                <TableCell component="th" scope="row">
                                    Mattias Alexandre Duarte Aparicio
                                </TableCell>
                                <TableCell>mattias@correo.com</TableCell>
                                <TableCell>7653217</TableCell>
                                <TableCell>29 de Abril de 2000</TableCell>
                                <TableCell>
                                    <Box display='flex' alignItems='center' justifyContent='center'>
                                        <IconButton sx={{ fontSize: '1.25rem', color: 'primary.main' }}>
                                            <MdModeEditOutline />
                                        </IconButton>

                                        <IconButton sx={{ fontSize: '1.25rem', color: 'error.main' }}>
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
