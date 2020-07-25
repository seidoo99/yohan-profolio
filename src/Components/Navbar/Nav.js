import React from 'react'
import "./nav.css"

function Nav() {
    return (
        <div>

            <nav id="nav" className="navbar navbar-fixed-top" >
            <div className="container">
               <div className="navbar-header">
                <a className="navbar-brand">Yohannes Bogale</a>
                <form className="form-inline">
                    <a className="navbar-brand" href="#about">About</a>
                    <a className="navbar-brand" href="#works">Works</a>
                    <a className="navbar-brand" href="#contacts">Contact</a>
                </form>
                </div>
                </div>
            </nav>
        </div>

        
        )
}

export default Nav