import axios from 'axios'
import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom'
import ScrollToTopRoute from '../ScrollToTopRoute'
import All from './All'
import Skills from './Skills'

class Projects extends Component {
    constructor(){
        super()
        this.state = {
            skills: []
        }
    }
    componentDidMount(){
        axios.get('/api/skills').then(response => {
            this.setState({
                skills: response.data
            })
        })
    }

    render() {
        return (
            <div className="section py-5" style={{flex: "1"}}>
                <div className="container">
                <h1 className="mt-5 mb-3 text-success border-bottom border-success">MY PROJECTS</h1>
                <div className="d-flex justify-content-md-between flex-wrap">
                    <NavLink activeClassName="bg-success text-light" exact to="/projects" className="py-2 px-3 my-1 border border-success mx-1">All</NavLink>
                {this.state.skills.map(skill => (
                    <NavLink activeClassName="bg-success text-light" to={`/projects/skills/${skill.id}`} key={skill.id} className="py-2 px-3 my-1 border border-success d-inline-block mx-1">{skill.name}</NavLink>
                ))}
                </div>
                
                <Switch>
                    <ScrollToTopRoute exact path='/projects' component={All} />
                    <ScrollToTopRoute path='/projects/skills/:id'  component={Skills} />
                </Switch>
                </div>
            </div>
        );
    }
}

export default Projects
