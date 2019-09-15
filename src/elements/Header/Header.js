import React from 'react';
import './Header.css';

const Header = () => {
    return(
        <div>
        <div className="series-header">
            <div className="series-header-content">
                <img className="series-logo" src="./images/logo.png" alt="series-logo" />
            </div>
        </div>
        <div className="loc1">Madrid</div><div className="loc2">Dallas</div>
        </div>
    )
}

export default Header;
