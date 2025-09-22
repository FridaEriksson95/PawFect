import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createHashRouter, RouterProvider } from 'react-router'
import AboutPage from './components/AboutPage.jsx'
import DogsPage from './components/DogsPage.jsx'
import DogDetailPage from './components/DogDetailPage.jsx'
import RootLayout from './components/RootLayout.jsx'

const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
  {
    index: true,
    element: <AboutPage />
  }, 
  {
    path: "/DogsPage",
    element: <DogsPage />
  },
  {
    path: "/DogDetailPage",
    element: <DogDetailPage />
  }
]
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
