import React, { useEffect, useRef } from 'react';
import './Home.css';
import Navbar from './Navbar';
import chicken from '../assets/icons/chicken.svg';
import meat from '../assets/icons/meat.svg';
import fish from '../assets/icons/fish.svg';
import turkey from '../assets/icons/turkey.svg';

import fs from '../assets/images/fs.png';
import tfm from '../assets/images/tfm.png';
import appetite from '../assets/images/appetite.png';



import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import ScrollTo from "gsap/ScrollToPlugin"


interface HomeProps { }

const Home: React.FC<HomeProps> = () => {
    const sectionTargets = useRef<Record<string, HTMLElement>>({});

    useEffect(() => {
        sectionTargets.current = {
            section1: document.getElementById('section1')!,
        };
        gsap.registerPlugin(ScrollToPlugin); // Register ScrollToPlugin
    }, []);

    // const handleScrollToSection = (sectionId: string) => {
    //     const targetSection = sectionTargets.current[sectionId];
    //     if (targetSection) {
    //         gsap.to(window, {
    //             scrollTo: {
    //               y: targetSection?.offsetTop,
    //               scrollTo: {
    //                 duration: 1,
    //                 ease: 'power2.out',
    //                 behavior: 'smooth',
    //               },
    //             },
    //           });
    //     }
    // };

    const section1Ref = useRef<HTMLDivElement>(null); // Assuming section1 is a div


    const handleScrollToSection = (sectionId: string) => {
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' }); // Use scrollIntoView
        }
    };


    return (
        <div>
            <div className="navbar">

                <Navbar handleScrollToSection={handleScrollToSection} />
            </div>

            <section className="Hero-section">

                <div className="hero-section-overlay">


                    <div className="hero-container">

                        <div className="hero-section-content">

                            <h1 className="hero-content-heading">
                                Experience Freshness, Variety, and Quality at Azimah Cold Food Store.
                            </h1>

                            <div className="hero-content-subheading">
                                Delight your senses with an exquisite array of frozen treasures from succulent chicken to ocean-fresh seafood.
                            </div>

                            <button className="hero-cta">
                                Explore
                            </button>


                        </div>

                        <div className="hero-section-image-container">

                            {/* <img src={fs} alt="" className="image1" /> */}
                            <img src={tfm} alt="" className="image2" />
                            {/* <img src={appetite} alt="" className="image3" /> */}
                        </div>


                    </div>





                </div>


            </section>

            <div className="blur-blue">

            </div>


            <section id="section1" ref={section1Ref} className="categories-section">

                <img src={tfm} alt="" className="wm-image" />


                <img src={appetite} alt="" className="wm-image2" />

                <img src={fs} alt="" className="wm-image3" />




                <h1 className="cs-heading">
                    Frozen food Categories
                </h1>

                <h4 className="cs-subheading">

                    Indulge in a frosty feast with our curated selection of frozen delights. Dive into a world where freshness meets frozen perfection
                </h4>


                <ul className="frozen-food-categories">

                    <li className="ff-category">

                        <img src={chicken} alt="chicken-icon" className="ff-icon" />

                        <h2>
                            Chicken
                        </h2>

                        <p>Our chicken is always a delight</p>
                    </li>

                    <li className="ff-category">

                        <img src={meat} alt="chicken-icon" className="ff-icon" />

                        <h2>
                            Meat
                        </h2>

                        <p>fresh meat at your reach</p>
                    </li>

                    <li className="ff-category">

                        <img src={fish} alt="chicken-icon" className="ff-icon" />

                        <h2>
                            Fish
                        </h2>

                        <p>Feast on any kind of  fresh fish you need</p>

                    </li>

                    <li className="ff-category">

                        <img src={turkey} alt="chicken-icon" className="ff-icon" />

                        <h2>
                            Turkey
                        </h2>

                        <p>Owe sell frozen turkey too</p>
                    </li>


                </ul>




            </section>


            <section className="about-section">



                <div className="about-section-content">

                    <div className="asc-heading">
                        About Us
                    </div>

                    <div className="asc-subheading">
                        our Journey
                    </div>

                    <p className="asc-text">
                        Welcome to Azimah Cold Food Store Nigeria Limited, a culinary haven for frozen food enthusiasts. Our journey began in 2014 at the Mandate exit gate in Ilorin, Kwara State, Nigeria. From these roots, we have rapidly grown to become a key player in the vibrant frozen food market.
                    </p>

                    <button className="asc-cta">
                        learn more...
                    </button>

                </div>

                <div className="about-section-image">


                </div>



            </section>



        </div>
    )
}

export default Home