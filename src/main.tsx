import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import React from 'react'

const App = React.lazy(() => import('./App'))
const AboutPage = React.lazy(() => import('./pages/AboutPage'))
const AcademicsPage = React.lazy(() => import('./pages/AcademicsPage'))
const AdmissionPage = React.lazy(() => import('./pages/AdmissionPage'))
const StudentLifePage = React.lazy(() => import('./pages/StudentLifePage'))
const ContactPage = React.lazy(() => import('./pages/ContactPage'))
const ErrorPage = React.lazy(() => import('./pages/ErrorPage'))
const LayoutProvider = React.lazy(() => import('./layout/LayoutProvider'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutProvider />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <App /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/academics', element: <AcademicsPage /> },
      { path: '/admission', element: <AdmissionPage /> },
      { path: '/student-life', element: <StudentLifePage /> },
      { path: '/contact', element: <ContactPage /> }
    ]
  },
])

createRoot(document.getElementById('root')!).render(
  <>
    <RouterProvider router={router} />
  </>
)
