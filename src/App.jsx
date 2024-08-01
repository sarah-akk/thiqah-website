import NavBar from './components/NavBar'
import Home from './layouts/Home'
import AboutAs from './layouts/AboutAs';
import { Video } from './layouts/Video';
import Sections from './layouts/Sections';
import Locations from './layouts/Locations';
import Description from './layouts/Description';
import Features from './layouts/Features';
import Application from './layouts/Application';
import Owner from './layouts/Owner';
import Contact from './layouts/Contact';
import Footer from './layouts/Footer';

function App() {
  return (
    <>
    <NavBar/>
    <Home/>
    <AboutAs/>
    <Video/>
    <Sections/>
    <Locations/>
    <Description/>
    <Features/>
    <Application/>
    <Owner/>
    <Contact/>
    <Footer/> 
    </>
  )
}

export default App
