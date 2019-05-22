import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Project extends Component {
    constructor () {
        super()
        this.state = {
            projects: [],
            visible: ''
        }
        this.excerpt = this.excerpt.bind(this)
    }

    componentDidMount(){
        axios.get('/api/projects3')
        .then(response => {
            this.setState({
                projects: response.data
            })
        })
        .catch(error => {
            console.log(error.response)
        })
    }
    
    excerpt(str, limit){
        var excerpt = new String(str);
        excerpt = excerpt.substr( 0, excerpt.lastIndexOf( ' ', limit ) ) + '...';
        return excerpt;
    }
      
    render(){
            return (
                <section id="projects" className="section-2">
                    <div className="container text-success py-3">
                        <h1 className="mt-5 text-uppercase border-bottom border-success">Some projects</h1>
                        
                        <div className="row">
                        {this.state.projects.map(project => (
                            <Link key={project.id} to={`/projects/${project.id}`} className="col-12 col-md-4 my-3">
                                <div className="card bg-dark border border-success" style={{height: '400px'}}>
                                    <img style={{width: '100%', height: '150px', backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center'}} className="card-img-top mx-auto border border-success" alt={project.name}/>
                                    <div className="card-body">
                                        <h3 className="card-text">{project.title}</h3>
                                        <p className="card-text">{this.excerpt(project.description, 200)}</p>
                                    </div>
                                    <div className="d-flex flex-wrap container my-1 justify-content-center">
                                    { project.skills.map(skill =>(
                                    <span key={skill.id} className="badge badge-secondary my-1 mx-2 px-2">{skill.name}</span> 
                                    ))}
                            </div>
                                </div>
                            </Link>
                        ))}
                        </div>
                        <div className="d-flex w-100 justify-content-center mt-5">
                        <Link to="/projects" className="badge-pill bg-dark h4 py-2 px-4 border border-success">See more projects</Link>
                        </div>

                    </div>
                </section>
            )
            }
}


      
export default Project