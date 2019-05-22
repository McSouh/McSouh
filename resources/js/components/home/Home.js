import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ScrollToTopRoute from './ScrollToTopRoute'
import Navigation from './Navigation'
import Homepage from './homepage/Homepage'
import About from './about/About'
import Projects from './projects/Projects'
import Show from './projects/Show'
import Footer from './Footer';

export default class Home extends Component {
    render() {
        return (
            <BrowserRouter >
                <Navigation />
                <Switch>
                    <ScrollToTopRoute exact path='/' component={Homepage} />
                    <ScrollToTopRoute path='/about'  component={About} />
                    <ScrollToTopRoute path='/projects/skills'  component={Projects} />
                    <ScrollToTopRoute path='/projects/:id'  component={Show} />
                    <ScrollToTopRoute path='/projects'  component={Projects} />
                </Switch>
                <Footer />
            </BrowserRouter>
        );
    }
}

if (document.getElementById('home')) {
    ReactDOM.render(<Home />, document.getElementById('home'));
}
