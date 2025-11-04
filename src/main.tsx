import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Funcionalidades from './routes/funcionalidades/Funcionalidades.tsx'
import Erro from './routes/error/Erro.tsx'
import Home from './routes/home/Home.tsx'
import Contato from './routes/contato/Contato.tsx'
import Faq from './routes/faq/Faq.tsx'
import Prototipo from './routes/prototipo/Prototipo.tsx'
import Sobre from './routes/criadores/Sobre.tsx'


const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Erro/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
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
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
