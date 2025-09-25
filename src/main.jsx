import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router'
import AboutPage from './components/AboutPage.jsx'
import DogsPage from './components/DogsPage.jsx'
import DogDetailPage from './components/DogDetailPage.jsx'
import RootLayout from './components/RootLayout.jsx'
import { SearchProvider } from './context/SearchContext.jsx'
import ContactPage from './components/ContactPage.jsx'
import ServicesPage from './components/ServicesPage.jsx'
import TeamsPage from './components/TeamsPage.jsx'
import { DogProvider } from './context/DogContext.jsx'
import AdvicesPage from './components/AdvicesPage.jsx'
import CollabsPage from './components/CollabsPage.jsx'

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
  },
  {
    path: "/AdvicesPage",
    element: <AdvicesPage />
  },
  {
    path: "/CollabsPage",
    element: <CollabsPage />
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
