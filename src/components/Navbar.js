import React, {useState} from 'react';
import Logo from '../assets/missLimNewLogo.png';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';
import { Link } from 'react-router-dom';

function Navbar() {
    const[openLinks, setOpenLinks] = useState(false)

    const toggleNavbar = () => {
        setOpenLinks(!openLinks)
    }
    return(
        <div className="navbar">
            <div className="leftSide" id={openLinks ? "open" : "close"}>
                <img src={Logo} alt=""/>
            </div>
            <div className="hiddenLinks">
              <Link for="/">Home</Link>
              <Link for="/about">About</Link>
              <Link for="/contestants">Contestants</Link>
              <Link for="/contacts">Contact</Link>
            </div>
            <div className="rightSide">
              <Link to="/">Home</Link>
              <Link to="/About">About</Link>
              <Link to="/contestants">Contestants</Link>
              <Link to="/contact">Contact</Link>
              <button onClick= {toggleNavbar}>
                <ReorderIcon  />
              </button>
            </div>

        </div>
    )
}

export default Navbar;