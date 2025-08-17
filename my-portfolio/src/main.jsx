import './index.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import OnePage from './pages/OnePage.jsx'
import Home from './sections/Home.jsx'
import About from './sections/About.jsx'
import Projects from './sections/Projects.jsx'
import Contact from './sections/Contact.jsx'
import Experiences from './sections/Experiences.jsx'


const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/projects', element: <Projects /> },
  { path: '/experiences', element: <Experiences /> },
  { path: '/contact', element: <Contact /> },
])

createRoot(document.getElementById('root')).render(<OnePage />)

/*createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)*/