
import './App.css'
import {House} from 'lucide-react';
import Main from './components/Main';
import Navbar from './utils/Navbar';
import Clients from './components/Clients';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {

  return (
    <>
    <Navbar/>
       <Main/>
       <About/>
       <Services/>
       <Clients/>
       <Footer />
  
    </>
  )
}

export default App
