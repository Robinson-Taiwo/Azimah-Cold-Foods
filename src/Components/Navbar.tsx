import { useState, FC } from "react";
import React from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import menu from "../assets/icons/menu.svg"
import "./Navbar.css";

interface NavbarProps {
    handleScrollToSection: (sectionId: string) => void;
}

const Navbar: FC<NavbarProps> = ({ handleScrollToSection }) => {
    const [activeItem, setActiveItem] = useState<string | null>(null);

    const handleItemClick: (sectionId: string) => void = (sectionId) => {
        handleScrollToSection(sectionId);
        setActiveItem(sectionId);
    };



    return (
        <div className="navbar-container" >

            <div className="navbar-section-logo">
                LOGO
            </div>

            <div className="ham-menu">
                <img src={menu} alt="" className="menu" />
            </div>


            <div className="navbar-section-links">
                <div className="navbar-section-items">
                    <div
                        onClick={() => handleItemClick('section1')}
                        className={`navbar-item ${activeItem === 'section1' ? 'active' : ''}`}
                    >
                        Categories
                        {activeItem === 'section1' && <div className="active-line"></div>}
                    </div>
                    <div
                        onClick={() => handleItemClick('about')}
                        className={`navbar-item ${activeItem === 'about' ? 'active' : ''}`}
                    >
                        About
                        {activeItem === 'about' && <div className="active-line"></div>}
                    </div>
                    <div
                        onClick={() => handleItemClick('products')}
                        className={`navbar-item ${activeItem === 'products' ? 'active' : ''}`}
                    >
                        Products
                        {activeItem === 'products' && <div className="active-line"></div>}
                    </div>
                    <div
                        onClick={() => handleItemClick('services')}
                        className={`navbar-item ${activeItem === 'services' ? 'active' : ''}`}
                    >

                        <p>                        Services
                        </p>

                        {activeItem === 'services' && <div className="active-line"></div>}
                    </div>
                </div>

                <div
                    onClick={() => handleItemClick('contact')}
                    className={`navbar-item-contact ${activeItem === 'contact' ? 'active' : ''}`}
                >
                    Contact us

                </div>
            </div>
        </div>
    )
}

export default Navbar;
