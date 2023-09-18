import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Flight from './Pages/Flight';
import Hotel from './Pages/Hotel';
import AITrip from './Pages/AITrip';
import Visa from './Pages/Visa';
import Home from './Pages/Home'
import Navbar from './Components/Navbar';
import { useState } from 'react';

function App() {
  const[active,setActive] = useState("home");
  return (
    <div className="App">
       <Navbar setActive={setActive} active={active}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/hotel' element={<Hotel/>}/>
        <Route path='/visa' element={<Visa/>}/>
        <Route path='/aitrip' element={<AITrip/>}/>
      </Routes>
    </div>
  );
}

export default App;
