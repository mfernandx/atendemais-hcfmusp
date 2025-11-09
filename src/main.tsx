import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Funcionalidades from './routes/funcionalidades/Funcionalidades.tsx'
import Erro from './routes/error/Erro.tsx'
import Home from './routes/home/Home.tsx'
import Contato from './routes/contato/Contato.tsx'
import Faq from './routes/faq/Faq.tsx'
import Prototipo from './routes/prototipo/Prototipo.tsx'
import Sobre from './routes/criadores/Sobre.tsx'

import useAuth from './hooks/useAuth.ts'
import { AuthProvider } from './context/auth.tsx'
import Login from './routes/login/Login.tsx'
import Cadastro from './routes/cadastro/Cadastro.tsx'
import Usuario from './routes/usuario/Usuario.tsx'

type PrivateProps = {
  Item: React.ComponentType
}

const Private = ({Item}:PrivateProps)=>{
  const signed = useAuth().signed
  return signed ? <Item/> : <Navigate to='/login'/>
}


const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Erro/>,
    children:[
      {
        path:"/",
        element:<Login/>
      },
      
      {
        path:"/home",
        element: <Private Item={Home}/>
      },
      {
        path: '/login', 
        element: <Login/>},
      {
        path: '/cadastro', 
        element: <Cadastro/>},
      
      {
        path:"/funcionalidades",
        element:<Funcionalidades/>
      },
      {
        path:"/prototipo",
        element:<Prototipo/>
      },
      {
        path:"/faq",
        element:<Faq/>
      },
      {
        path:"/sobrenos",
        element:<Sobre/>
      },
      {
        path:"/contato",
        element:<Contato/>
      },
      {
        path:"/usuario",
        element:<Usuario/>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
