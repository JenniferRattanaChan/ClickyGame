import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{backgroundColor:"#80c5de",color:"black"}}>
            <a className="navbar-brand" href="/">Clicky Game</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>   
        </nav>
    )
};

export default Navbar;