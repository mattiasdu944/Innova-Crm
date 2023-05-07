import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { lightTheme } from './theme'
import { RoutesNavigation } from './router'
import { CssBaseline, ThemeProvider } from '@mui/material'

const App: FC = () => {

    return (
        <ThemeProvider theme={ lightTheme } > 
            <BrowserRouter>
                <CssBaseline/>
                <RoutesNavigation/>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App