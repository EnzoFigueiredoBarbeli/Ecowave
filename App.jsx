import {} from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react';



function App() {
  useEffect(() => {
    document.title = "EcoWave";

    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      favicon.href = '../src/assets/Logo.png';
    }
  }, []);

  return (
    <>
    <Nav/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App