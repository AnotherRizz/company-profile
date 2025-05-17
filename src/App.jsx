
import './App.css'
import {House} from 'lucide-react';
import Main from './components/Main';
import Navbar from './utils/Navbar';
import Clients from './components/Clients';
import About from './components/About';
import Services from './components/Services';

function App() {

  return (
    <>
    <Navbar/>
       <Main/>
       <About/>
       <Services/>
       <Clients/>
  
    </>
  )
}

export default App
