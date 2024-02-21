import React, { useEffect, useState } from 'react';
import './Preloader.css'; // Import your preloader styles
import frost from "../assets/icons/frost.svg"

const Preloader: React.FC = () => {


    return (

        <div className='preloader' >

            <img className='frost' src={frost} alt="" />
            <h1 className="preloader-text">
                Loading ...
            </h1>


        </div>

    );
};

export default Preloader;
