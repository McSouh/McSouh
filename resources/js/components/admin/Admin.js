import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Navigation from './Navigation'


export default class Admin extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navigation />
            </BrowserRouter>
        );
    }
}

if (document.getElementById('admin')) {
    ReactDOM.render(<Admin />, document.getElementById('admin'));
}
