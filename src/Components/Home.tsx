import React from 'react'
import "./Home.css"
import Navbar from './Navbar'

const Home = () => {
    return (
        <div>

            <section className="Hero-section">

                <div className="hero-section-overlay">

                    <Navbar />

                    <div className="hero-container">

                        <div className="hero-section-content">

                            <h1 className="hero-content-heading">
                                Experience Freshness, Variety, and Quality at Azimah Cold Food Store.
                            </h1>

                            <div className="hero-content-subheading">
                                Your one-stop shop for premium frozen chicken, seafood, fish, and more!
                            </div>

                            <button className="hero-cta">
                                explore
                            </button>


                        </div>

                        <div className="hero-section-image-container">


                            <div className="hero-section-image">

                                <div className="img-content">

                                </div>

                                <div className="img-content-two">

                                </div>
                            </div>
                        </div>


                    </div>





                </div>


            </section>



        </div>
    )
}

export default Home