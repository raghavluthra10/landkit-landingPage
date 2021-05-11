import React, { useState } from 'react';
import './Navbar.css';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';


const Navbar = () => {
    
    const [ showSlide, setShowSlide ] = useState(false);

    return (
        <div  className='navbar'>
            <span className='navbar__landkit' >
                LandKit.
            </span>

            <ul className={!showSlide ? 'navbar__listItems' : 'navbar__listItems active'}>
                <li>
                    Landings
                </li>

                <li>
                    Pages
                </li>

                <li>
                    Account
                </li>

                <li>
                    Documentation
                </li>
            </ul>

            <Button className={!showSlide ? 'navbar__btn' : 'navbar__btn active'} >
                Buy now
            </Button>

            <MenuIcon  className='navbar__menuIcon' onClick={() => setShowSlide(!showSlide)} />
        </div>
    )
}

export default Navbar
// #335EEA