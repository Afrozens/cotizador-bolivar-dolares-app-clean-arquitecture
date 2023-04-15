import { Header } from '@/components'
import { CalculatorPage, ErrorPage, HomePage } from '@/pages'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/calculator',
        element: <CalculatorPage />,
      },
    ],
  },
])
