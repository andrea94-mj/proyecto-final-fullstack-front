import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from '@/lib/routes'
import { UserProvider } from '@/hooks/usoUsuario'
import { MockUser } from './lib/constants'
import './css/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router}/>
    </UserProvider>
  </React.StrictMode>,
)
