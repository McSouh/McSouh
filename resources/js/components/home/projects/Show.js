import axios from 'axios'
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Show extends Component {
    constructor(){
        super()
        this.state = {
            project: {},
            skills: []
        }
    }
    componentDidMount(){
        window.scrollTo(0, 0);
        const projectId = this.props.match.params.id
        axios.get(`/api/projects/${projectId}`).then(response => {
            this.setState({
                project: response.data
            })
        })
        axios.get(`/api/skills/${projectId}`).then(response => {
            this.setState({
                skills: response.data
            })
        })
    }


    render() {
        let { project, skills } = this.state
        if(project.skills = []){
            console.log(project.skills);
            
            return (
                <div id="project" className="section-2">
                    <div className="container py-5">
                        <div className="col-md-10 mx-auto mt-5">
                            <div className="bg-dark border border-success text-success">
                                <img style={{width: '100%', height: '250px', backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'top'}} className="card-img-top mx-auto border border-success" alt={project.name}/>
                                <div className="card-body">
                                    { skills.map(skill =>(
                                    <span key={skill.id} className="badge badge-secondary mr-2 px-2">{skill.name}</span> 
                                    ))}
                                    <h3 className="card-text mt-2 text-light">{project.title}</h3>
                                    <p className="card-text">{project.description}</p>
                                    <div className="d-flex flex-column align-items-center">
                                        <a style={{overflowWrap: 'break-word'}} href={project.github} className="h3 text-center mw-100"><i className="fab fa-github mr-2 my-2"></i>{project.github}</a>
                                        <Link className="py-2 px-3 my-1 border border-success" to="/projects">Back to all Projects</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div>Loading...</div>
            )
        }
    }
}

export default Show
