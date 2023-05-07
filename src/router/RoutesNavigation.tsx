import { FC } from 'react';
import { Routes, Route } from 'react-router-dom'

import { AuthLayout, MainLayout } from '../layouts';
import { DashboardPage, EmployeesPage, LoginPage, NewPatientPage, NewQuotePage, PatientsPage, QuotePage, QuotesPage, RegisterPage } from '../pages';

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
                    <Route path='employees' element={ <EmployeesPage/> } />

                    <Route path='patients' element={ <PatientsPage/> } />
                    <Route path='patients/new' element={ <NewPatientPage/> } />
                    
                    <Route path='quotes' element={ <QuotesPage/> } />
                    <Route path='quotes/new' element={ <NewQuotePage/> } />
                    <Route path='quotes/:id' element={ <QuotePage/> } />
                </Route>
            </Routes>
        </>
    )
}
