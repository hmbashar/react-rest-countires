import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className='header-area'>
            <div className='primary-menu'>
                <ul>
                    <li><a href="#">Home 1</a></li>
                    <li><a href="#">Home 2</a></li>
                    <li><a href="#">Home 3</a></li>
                    <li><a href="#">Home 4</a></li>
                    <li><a href="#">Home 5</a></li>
                    <li><a href="#">Home 6</a></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;