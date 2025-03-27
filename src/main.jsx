import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import Layout from './components/Layout'
import NuevoCliente, {action as nuevoClienteAction} from './pages/NuevoCliente'
import Index, {loader as clientesLoader} from './pages/Index'
import EditarCliente,{loader as EditarClientesLoader,action as editarClienteAction} from './pages/EditarCliente'
import ErrorPage from './components/ErrorPage'



const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout />,
    children:[
      {
        index: true,
        element: <Index />,
        loader: clientesLoader,
        errorElement: <ErrorPage />
      },
      {
      path: '/clientes/nuevo',
      element: <NuevoCliente />,
      action: nuevoClienteAction,
      errorElement:  <ErrorPage />
    },
    {
      path: '/clientes/:clienteId/editar',
      element: <EditarCliente />,
      loader : EditarClientesLoader,
      action: editarClienteAction,
      errorElement:  <ErrorPage />
    }
  ]
  },
  
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
