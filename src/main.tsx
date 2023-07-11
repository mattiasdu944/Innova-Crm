import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AuthProvider, QuotesProvider, UsersProvider } from './context/index.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <QuotesProvider>
        <UsersProvider>
          <App/>
        </UsersProvider>
      </QuotesProvider>
    </AuthProvider>
  </React.StrictMode>,
)
