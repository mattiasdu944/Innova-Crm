import { FC } from 'react'
import { HashRouter } from 'react-router-dom'
import { lightTheme } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { RoutesNavigation } from './router'


const App: FC = () => {
    return (
        <ThemeProvider theme={ lightTheme } > 
            <HashRouter>
                <CssBaseline/>
                <RoutesNavigation/>
            </HashRouter>
        </ThemeProvider>
    )
}

export default App