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
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                <path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"></path>
                </svg>  
                </button>

                <ul className={`Menu ${menuVisible ? 'Show' : ''}`}>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link to='/saved-lookups'>
                        <li>OBD Library</li>
                    </Link>
                </ul>
            </div>
        </header>
    )
}


export default Navbar;