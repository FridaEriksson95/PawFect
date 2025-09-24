import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router'
import AboutPage from './components/AboutPage.jsx'
import DogsPage from './components/DogsPage.jsx'
import DogDetailPage from './components/DogDetailPage.jsx'
import RootLayout from './components/RootLayout.jsx'
import { SearchProvider } from './components/SearchContext.jsx'
import ContactPage from './components/ContactPage.jsx'
import ServicesPage from './components/ServicesPage.jsx'
import TeamsPage from './components/TeamsPage.jsx'
import { DogProvider } from './components/DogContext.jsx'

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
    path: "/DogDetailPage/:chipNumber",
    element: <DogDetailPage />
  },
  {
    path: "/ContactPage",
    element: <ContactPage />
  },
  {
    path: "/ServicesPage",
    element: <ServicesPage />
  },
  {
    path: "/TeamsPage",
    element: <TeamsPage />
  }
]
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DogProvider>
    <SearchProvider>
    <RouterProvider router={router} />
    </SearchProvider>
    </DogProvider>
  </StrictMode>,
)
