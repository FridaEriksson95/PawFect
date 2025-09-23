import { useState } from 'react'
import './App.css'
import DogsPage from './components/DogsPage';
import DogDetailPage from './components/DogDetailPage';
import AboutPage from './components/AboutPage';

function App() {
  const ABOUT = 'about', DOGPAGE = 'dogpage', DOGDETAILS = 'dogdetails';
  const [currentScreen, setCurrentScreen] = useState();

  let content = null; 

  switch(currentScreen) {
    case DOGPAGE: 
    content = <DogsPage />;
    break;
    case DOGDETAILS: 
    content = <DogDetailPage />;
    break;
    default:
    content = <AboutPage />;
  }

  return (
    <>
    {content}
    </>
  )
}

export default App
