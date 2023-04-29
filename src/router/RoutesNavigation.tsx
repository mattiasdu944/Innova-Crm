import { FC } from 'react';
import { Routes, Route } from 'react-router-dom'

import { AuthLayout, MainLayout } from '../layouts';
import { DashboardPage, EmployeesPage, LoginPage, PatientsPage, QuotesPage, RegisterPage } from '../pages';

export const RoutesNavigation: FC = () => {
    return (
        <>
            <Routes>
                {/* AUTH ROUTES  */}
                <Route path='/auth' element={ <AuthLayout/> } >
                    <Route index path='login' element={ <LoginPage/> } />
                    <Route path='register' element={ <RegisterPage/> }/>
                </Route>

                {/* APP ROUTES */}
                <Route path='/' element={ <MainLayout/> } >
                    <Route index element={ <DashboardPage/> } />
                    <Route path='patients' element={ <PatientsPage/> } />
                    <Route path='employees' element={ <EmployeesPage/> } />
                    <Route path='quotes' element={ <QuotesPage/> } />
                </Route>
            </Routes>
        </>
    )
}
