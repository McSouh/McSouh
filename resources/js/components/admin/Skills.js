import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Skills extends Component {
    constructor () {
    super()
    this.state = {
        skills: []
    }
    this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount () {
    axios.get('/api/skills').then(response => {
        this.setState({
        skills: response.data
        })
    })
    .catch(error => {
        console.log(error.response)
    });
    }

    handleDelete(event, id){
        event.preventDefault();
        const { history } = this.props
        axios.delete(`/api/skills/${id}`).then(response => {
            this.setState(prevState => ({
                skills: prevState.skills.filter(skill => {
                  return skill.id !== id
                })
              }))
        })
        .catch(error => {
            console.log(error.response)
        });
    }

    render () {
    const { skills } = this.state
    return (
        <div>
            <Link to="/admin/skills/create" className="btn btn-dark text-light">New skill</Link>

            { skills.map(skill => (
                <div className="media bg-dark text-light py-3 pr-3 my-2" key={skill.id}>
                <Link to={`/admin/skills/${skill.id }/edit`} className="text-light text-decoration-none">
                <div className="d-flex justify-content-start ml-5 mr-2">
                    <h2>{ skill.name }</h2>
                </div>
                </Link>
                    <div className="media-body">
                        <h5 className="mt-0">{skill.level}</h5>
                    </div>
                <form onSubmit={(event) => this.handleDelete(event, skill.id)} className="ml-auto">
                    <button type="submit" className="btn btn-danger">Delete</button>
                </form>
            </div>
            ))}
        </div>
    )
    }
}

export default Skills;