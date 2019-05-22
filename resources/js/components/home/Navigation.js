import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navigation = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 fixed-top">
        <div className="container">
            <Link to="/" className="navbar-brand text-light">Herbiet Maxime</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <NavLink activeClassName='active' exact to="/" className="nav-link">Home</NavLink>
                    <NavLink activeClassName='active' to="/about" className="nav-link">About</NavLink>
                    <NavLink activeClassName='active' to="/projects" className="nav-link">Projects</NavLink>
                </ul>
            </div>
        </div>
    </nav>
)

export default Navigation