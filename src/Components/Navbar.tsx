import React from 'react'
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="navbar-container" >

            <div className="navbar-section-logo">
                LOGO
            </div>


            <div className="navbar-section-items">

                <div className="navbar-item">About</div>
                <div className="navbar-item">Categories</div>
                <div className="navbar-item">Products</div>
                <div className="navbar-item">Services</div>

            </div>

            <div className="navbar-item-contact">Contact us</div>

        </div>
    )
}

export default Navbar