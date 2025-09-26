import React from 'react';
import './Header.css';

import AvatarGroup from '../../components/avatar/Avatar';

const Header = () => {
    return (
        <header className="header">
                <img src="iim.png" className="header-logo" alt="logo" />
                <div className='header-center'>
                    <h1>B.E.D.A.V.E.</h1>
                    <div className="header-subtitle">
                        <hr />
                        <p> HH:MM </p>
                        <hr />
                    </div>
                </div>
                <div className="header-user">
                    <AvatarGroup />
                </div>
        </header>
    );
}

export default Header;
