import React from 'react';
import './Header.css';

function Header() {
    return(
        <div className='header'>
            <h1>Unreal</h1>
            <div className='list'>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Blog</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;