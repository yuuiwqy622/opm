import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import ErrorPage from './ErrorPage'
import TaskList from './pages/TaskList'

const router = createBrowserRouter([
  {
    path: '/',
    element: <TaskList />,
    errorElement: <ErrorPage />,
  },
])

export const Router: React.FC = () => (
  <RouterProvider router={router} />
)
