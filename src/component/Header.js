import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">main</NavLink>
                </li>
                <li>
                    <NavLink to="/sub01">sub01</NavLink>
                </li>
                <li>
                    <NavLink to="/sub02">sub02</NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default Header