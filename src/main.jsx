import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Skills from './components/Skills/Skills.jsx'
import Services from './components/Services/Services.jsx'
import Education from './components/Education/Education.jsx'
import Testimonials from './components/Testimonials/Testimonials.jsx'
import Contact from './components/Contact/Contact.jsx'
import Work from './components/Work/Work.jsx'
import ExAbout from './components/ExAbout/ExAbout.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'skill',
        element: <Skills />
      },
      {
        path: 'services',
        element: <Services />
      },
      {
        path: 'education',
        element: <Education />
      },
      {
        path: 'work',
        element: <Work />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'exabout',
        element: <ExAbout />
      }


    ]
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
