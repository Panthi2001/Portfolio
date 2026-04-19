import './App.css'
import About from './components/About/about'
import ContactForm  from './components/Contact/contactform.tsx'
import Experience from './components/Experience/experience'
import InfoCard from './components/infocard/infocard'
import Navbar from './components/navbar/navbar'
import Projects from './components/Project/project'

function App() {
  return (
    <>
     <div className="app-container">
   
    <Navbar/>
    <InfoCard/>
    <About/>
    <Experience/>
    <Projects/>
    <ContactForm/>
    </div>
    </>
  )
}

export default App
