import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ProjectsEdit extends Component {
    constructor (props) {
    super(props)
    this.state = {
        title: '',
        description: '',
        allSkills: [],
        skills: [],
        github: '',
        image: null,
        imagePath: '',
        errors: []
    }
    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.handleCheckChange = this.handleCheckChange.bind(this)
    this.handleUpdateProject = this.handleUpdateProject.bind(this)
    this.hasErrorFor = this.hasErrorFor.bind(this)
    this.renderErrorFor = this.renderErrorFor.bind(this)
    this.handleImage = this.handleImage.bind(this)
    }

    componentDidMount () {
    const projectId = this.props.match.params.id

    axios.get(`/api/admin/projects/${projectId}/edit`).then(response => {
        let project = response.data
        let skills = []
        project.skills.forEach(skill => skills.push(String(skill.id)))
        
        this.setState({
            title: project.title,
            description: project.description,
            github: project.github,
            imagePath: project.image,
            skills: skills
        })
    })
    axios.get(`/api/admin/skills`).then(response => {
        let allSkills = response.data
        this.setState({
            allSkills: allSkills,
        })
        
    })
    
      }
    

    handleFieldChange (event) {
    this.setState({
        [event.target.name]: event.target.value
    })
    }

    handleCheckChange (event) {
        let skills = this.state.skills
        let skill = event.target.name
        
        if(skills.indexOf(skill) === -1){
            skills.push(skill)
        } else {
            let index = skills.indexOf(skill)
            skills.splice(index, 1)
        }
        this.setState({
            skills: skills
        }) 
        
    }

    handleUpdateProject (event) {
    event.preventDefault()
    const projectId = this.props.match.params.id
    const { history } = this.props
    let project = new FormData();
    project.append('_method', 'PATCH')
    project.append('title', this.state.title)
    project.append('description', this.state.description)
    project.append('github', this.state.github)
    if(this.state.skills.length > 0){
        project.append('skills', this.state.skills)
    }
    if(this.state.image !== null){
        project.append('image', this.state.image)
    }


    axios.post(`/api/admin/projects/${projectId}`, project, {
        headers: {
        'Content-Type': 'multipart/form-data'
        }
        })
        .then(response => {
        history.push('/admin/projects')
        })
        .catch(error => {
        console.log(error.response.data.errors)
        this.setState({
            errors: error.response.data.errors
        })
        })
    }

    hasErrorFor (field) {
    return !!this.state.errors[field]
    }

    renderErrorFor (field) {
    if (this.hasErrorFor(field)) {
        return (
        <span className='invalid-feedback'>
            <strong>{this.state.errors[field][0]}</strong>
        </span>
        )
    }
    }


    handleImage() {
        var oFReader = new FileReader();
        oFReader.readAsDataURL(document.getElementById("uploadImage").files[0]);

        oFReader.onload = (oFREvent) => {
            this.setState({
                imagePath: oFREvent.target.result
            })
        };
        this.setState({
            image: document.getElementById("uploadImage").files[0]
        })
    };

    render () {
        let { allSkills } = this.state
        
    return (
        <div>
        <Link to="/admin/projects/" className="btn btn-dark text-light">Back</Link>
        <div className="card mt-3">
        <h5 className="card-header bg-light text-center py-3 mt-0">
            <strong>Edit project</strong>
        </h5>
        <div className="card-body px-lg-5 ">
            <form className="text-center" onSubmit={this.handleUpdateProject} encType="multipart/form-data">
                <div className="md-form my-2">
                    <input 
                    name="title" 
                    type="text" 
                    className={`form-control ${this.hasErrorFor('title') ? 'is-invalid' : ''}`} 
                    placeholder="Title"
                    value={this.state.title}
                    onChange={this.handleFieldChange}
                    />
                    {this.renderErrorFor('title')}
                </div>

                <div className="md-form my-2">
                    <textarea 
                    name='description'
                    className={`form-control ${this.hasErrorFor('description') ? 'is-invalid' : ''}`}
                    rows='5'
                    placeholder="Description"
                    value={this.state.description}
                    onChange={this.handleFieldChange}
                    />
                    {this.renderErrorFor('description')}
                </div>

                <div className="md-form my-2">
                    {allSkills.map(skill => (
                        <div className="d-inline mx-3" key={skill.id}>
                        <label className="mr-1">{skill.name}</label>
                        <input
                        type='checkbox'
                        name={skill.id}
                        onChange={this.handleCheckChange}
                        defaultChecked={this.state.skills.indexOf(String(skill.id)) != -1}
                        />
                        </div>
                    ))}
                </div>

                <div className="md-form my-2">
                    <input 
                    name="github" 
                    type="text" 
                    className={`form-control ${this.hasErrorFor('github') ? 'is-invalid' : ''}`} 
                    placeholder="Github link"
                    value={this.state.github}
                    onChange={this.handleFieldChange}
                    />
                    {this.renderErrorFor('github')}
                </div>
                
                <div className="md-form my-2 d-flex">
                    <div className="w-100">
                        <label className={`form-control text-left text-muted  ${this.hasErrorFor('image') ? 'is-invalid' : ''}`} htmlFor="uploadImage">Featured image : <span id="uploadLabel">{this.state.image ? this.state.image.name : this.state.imagePath}</span></label>
                        <input 
                        id="uploadImage" 
                        className="d-none" 
                        type="file" 
                        name="image" 
                        onChange={this.handleImage}
                        />
                        {this.renderErrorFor('image')}
                    </div>
                </div>
                <div className="md-form my-3 d-flex">
                    <div className="w-100">
                        <img id="uploadPreview" src={this.state.imagePath} style={{height: '100px'}} />
                    </div>
                </div>
    
                <button className="btn btn-info btn-rounded btn-block z-depth-0 my-3" type="submit">Update</button>
    
            </form>
    
        </div>
    
    </div>
    </div>
    )
    }
}

export default ProjectsEdit;