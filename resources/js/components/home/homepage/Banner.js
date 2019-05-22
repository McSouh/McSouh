import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => (
    <section id="banner" className="section-2">
        <div className="container">
            <div className="text-success textbox">
                    <h3 className="border-bottom border-success">WEB <br/> DEVELOPER</h3>
                    <h2 className="typewriting" style={{fontSize: '2.2em'}}>HERBIET  MAXIME</h2>
            </div>
            <div id="green_block" className="d-none d-md-block bg-success">

            </div>
            <div className="social">
                    <a className="social-btn" target="_blank" href="https://www.facebook.com/maxime.herbiet"><i className="fab fa-facebook "></i></a>
                    <a className="social-btn" target="_blank" href="https://www.linkedin.com/in/maxime-herbiet-a27ba4177/"><i className="fab fa-linkedin "></i></a>
                    <a className="social-btn" target="_blank" href="https://www.pinterest.fr/maximeherbiet/"><i className="fab fa-pinterest "></i></a>
                    <a className="social-btn" target="_blank" href="https://github.com/McSouh"><i className="fab fa-github "></i></a>
            </div>

        </div>
        <img src="/img/leaf-left-green.png" className="leaf-bottom-left animated rotateInUpLeft" />
        <img src="/img/leaf-right-black.png" className="leaf-right animated rotateInDownRight" />
    </section>
)

export default Banner