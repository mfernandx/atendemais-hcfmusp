import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Funcionalidades from './routes/funcionalidades/Funcionalidades.tsx'
import Erro from './routes/error/Erro.tsx'
import Home from './routes/home/Home.tsx'
import Contato from './routes/contato/Contato.tsx'
import Faq from './routes/faq/Faq.tsx'
import Prototipo from './routes/prototipo/Prototipo.tsx'
import Sobre from './routes/criadores/Sobre.tsx'


import { AuthProvider } from './context/auth.tsx'
import Login from './routes/login/Login.tsx'
import Cadastro from './routes/cadastro/Cadastro.tsx'
import Usuario from './routes/usuario/Usuario.tsx'
import Alteracao from './routes/alteracao/Alteracao.tsx'




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
        element: <Home/>
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
      },
      {
        path:"/teste",
        element:<Alteracao/>
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
