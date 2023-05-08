import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QuotesProvider, UsersProvider } from './context/index.ts'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QuotesProvider>
      <UsersProvider>
        <App/>
      </UsersProvider>
    </QuotesProvider>
  </React.StrictMode>,
)
