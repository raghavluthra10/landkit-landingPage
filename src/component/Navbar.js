import React from 'react';
import './Navbar.css';
import Button from '@material-ui/core/Button';


const Navbar = () => {
    return (
        <div  className='navbar'>
            <span className='navbar__landkit' >
                LandKit.
            </span>

            <ul className='navbar__listItems'>
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

            <Button className='navbar__btn' >
                Buy now
            </Button>
        </div>
    )
}

export default Navbar
// #335EEA