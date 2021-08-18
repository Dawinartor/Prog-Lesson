import React from 'react';
import './MyHeader.css'; 

const Header = () => {
    return (
        <div className="myHeader">
            <div className="header-left-part">
                <div className="spacer spacer-left"></div>
                <p className="header-text-left"> Ich bin eine Überschrift & stehe LINKS</p>
            </div>
            <div className="header-right-part">
                <p className="header-text-right"> Text & RECHTS</p>
                <div className="spacer spacer-right"></div>
            </div>
        </div>
    );
}

export default Header;

