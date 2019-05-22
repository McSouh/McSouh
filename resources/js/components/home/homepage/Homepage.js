import React, { Component } from 'react';
import Banner from './Banner'
import Parallax from './Parallax'
import About from './About'
import Project from './Project'


class Homepage extends Component {
    render() {
        return (
            <div>
                <Banner />
                <Parallax url="/img/parallax.jpg" />
                <About />
                <Parallax url="/img/parallax.jpg" />
                <Project />
            </div>
        );
    }
}

export default Homepage
