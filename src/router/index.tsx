import { Layout } from '@/components'
import { CalculatorPage, ErrorPage, HomePage } from '@/pages'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/calculadora',
        element: <CalculatorPage />,
      },
    ],
  },
])
