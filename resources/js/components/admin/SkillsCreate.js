import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select';

const options = [
    { value: 'basic', label: 'Basic' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' },
    { value: 'expert', label: 'Expert' }
  ];

class SkillsCreate extends Component {
    constructor (props) {
    super(props)
    this.state = {
        name: '',
        level: null,
        errors: []
    }
    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.handleSelectChange = this.handleSelectChange.bind(this)
    this.handleCreateNewskill = this.handleCreateNewskill.bind(this)
    this.hasErrorFor = this.hasErrorFor.bind(this)
    this.renderErrorFor = this.renderErrorFor.bind(this)
    }
    

    handleFieldChange (event) {
    this.setState({
        [event.target.name]: event.target.value
    })
    }
    handleSelectChange (option) {
    this.setState({
        level: option
    })
    }

    handleCreateNewskill (event) {
    event.preventDefault()

    const { history } = this.props
    let skill = new FormData();
    skill.append('name', this.state.name)
    skill.append('level', this.state.level.value)
    

    axios.post('/api/admin/skills', skill, {
        headers: {
        'Content-Type': 'multipart/form-data'
        }
        })
        .then(response => {
        history.push('/admin/skills')
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

    render () {
    return (
        <div>
        <Link to="/admin/skills/" className="btn btn-dark text-light">Back</Link>
        <div className="card mt-3">
        <h5 className="card-header bg-light text-center py-3 mt-0">
            <strong>New skill</strong>
        </h5>
        <div className="card-body px-lg-5 ">
            <form className="text-center" onSubmit={this.handleCreateNewskill} encType="multipart/form-data">
                <div className="md-form my-2">
                    <input 
                    name="name" 
                    type="text" 
                    className={`form-control ${this.hasErrorFor('name') ? 'is-invalid' : ''}`} 
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.handleFieldChange}
                    />
                    {this.renderErrorFor('name')}
                </div>

                <div className="md-form my-2">
                    <Select
                    name='level'
                    className={`${this.hasErrorFor('level') ? 'is-invalid' : ''}`}
                    placeholder="Level"
                    options={options}
                    value={this.state.level}
                    onChange={this.handleSelectChange}
                    />
                    {this.renderErrorFor('level')}
                </div>
    
                <button className="btn btn-info btn-rounded btn-block z-depth-0 my-3" type="submit">Create</button>
    
            </form>
    
        </div>
    
    </div>
    </div>
    )
    }
}

export default SkillsCreate;