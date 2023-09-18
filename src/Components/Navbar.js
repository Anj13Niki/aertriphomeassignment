import React, { useState ,useEffect } from 'react'
import Logo from '../Images/logo.jpg'
import {FiMoon, FiSun} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import './darkmode.css'

const Navbar = ({setActive,active}) => {
    const [theme, setTheme] = useState('white');
    const toggleTheme = () => {
      if (theme === 'white') {
        setTheme('black');
      } else {
        setTheme('white');
      }
    };
    useEffect(() => {
      document.body.style.backgroundColor = theme ;
      
    }, [theme]);
  return (
    <div className={`navbar ${theme}`}>
      <div className='logo'>
        <img src={Logo} alt='logo'/>
        <Link to="/" className='logo-text'>AERTRIP</Link>
      </div>
      <div className='nav-links'>
        <Link to='/'>
            <li className={`${active==="home"?"active":""}`}>Flight</li>
        </Link>
        <Link to='hotel'>
           <li className={`${active==="hotel"?"active":""}`}>Hotel</li>
        </Link>
        <Link to='visa'>
          <li className={`${active==="visa"?"active":""}`}>VISA</li>
        </Link>
        <Link to='/'>
            <li className={`${active==="aitrip"?"active":""}`}>AI Trip<sup>NEW</sup></li>
        </Link>
      </div>
      <div className='login'>
        <button onClick={toggleTheme}>{theme==='white'?<FiSun className='th'/>:<FiMoon className='th'/>}</button>
        <Link to='/'>LOGIN</Link>
      </div>
    </div>
  )
}

export default Navbar
