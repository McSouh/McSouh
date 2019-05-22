import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Projects extends Component {
    constructor () {
    super()
    this.state = {
        projects: []
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.excerpt = this.excerpt.bind(this)
    }

    componentDidMount () {
    axios.get('/api/admin/projects').then(response => {
        this.setState({
        projects: response.data
        })
    })
    .catch(error => {
        console.log(error.response)
    });
    }

    handleDelete(event, id){
        event.preventDefault();
        const { history } = this.props
        axios.delete(`/api/admin/projects/${id}`).then(response => {
            this.setState(prevState => ({
                projects: prevState.projects.filter(project => {
                  return project.id !== id
                })
              }))
        })
        .catch(error => {
            console.log(error.response)
        });
    }

    excerpt(str, limit){
        var excerpt = new String(str);
        excerpt = excerpt.substr( 0, excerpt.lastIndexOf( ' ', limit ) ) + '...';
        return excerpt;
    }

    render () {
    const { projects } = this.state
    return (
        <div>
            <Link to="/admin/projects/create" className="btn btn-dark text-light">New project</Link>

            { projects.map(project => (
                <div className="media bg-dark text-light py-3 pr-3 my-2" key={project.id}>
                <div style={{minWidth: '80px'}} className="d-flex justify-content-center">
                    <img style={{height: '50px', width:'50px', backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}  alt=""/>
                </div>
                <Link to={`/admin/projects/${project.id }/edit`} className="text-light text-decoration-none">
                    <div className="media-body">
                        <h5 className="mt-0">{ project.title } 
                        { project.skills.map(skill =>(
                            <span key={skill.id} className="badge badge-secondary mx-1 px-2">{skill.name}</span> 
                            ))}
                        </h5>
                        { this.excerpt(project.description, 200) }
                    </div>
                </Link>
                <form onSubmit={(event) => this.handleDelete(event, project.id)} className="ml-auto">
                    <button type="submit" className="btn btn-danger">Delete</button>
                </form>
            </div>
            ))}
        </div>
    )
    }
}

export default Projects;