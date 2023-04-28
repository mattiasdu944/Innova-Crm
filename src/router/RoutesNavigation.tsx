import { FC } from 'react';

import { Routes, Route } from 'react-router-dom'
import { DashboardPage, EmployeesPage, LoginPage, PatientsPage, QuotesPage, RegisterPage } from '../pages';

export const RoutesNavigation: FC = () => {
    return (
        <>
            <Routes>
                <Route path='/auth'>
                    <Route index path='login'   element={ <LoginPage/> } />
                    <Route path='register'      element={ <RegisterPage/> }/>
                </Route>
                <Route path='/'>
                    <Route index            element={ <DashboardPage/> } />
                    <Route path='patients'  element={ <PatientsPage/> } />
                    <Route path='employees' element={ <EmployeesPage/> } />
                    <Route path='quotes'    element={ <QuotesPage/> } />
                </Route>
            </Routes>
        </>
    )
}
