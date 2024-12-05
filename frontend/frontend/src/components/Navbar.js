import { Link } from 'react-router-dom';
import React, { useState } from 'react'

const Navbar = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    }


    return(
        <header>
            <div className='Container'>
                <Link to='/'>
                    <h1>Top Speed OBD</h1>
                </Link>

                <button className='MenuButton' onClick={toggleMenu}>
                Place Holder
                </button>

                <ul className={`Menu ${menuVisible ? 'Show' : ''}`}>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link>
                        <li>OBD Library</li>
                    </Link>
                </ul>
            </div>
        </header>
    )
}


export default Navbar;