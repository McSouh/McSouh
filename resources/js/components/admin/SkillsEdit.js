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


class SkillsEdit extends Component {
    constructor (props) {
    super(props)
    this.state = {
        name: '',
        level: '',
        errors: []
    }
    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.handleSelectChange = this.handleSelectChange.bind(this)
    this.handleUpdateskill = this.handleUpdateskill.bind(this)
    this.hasErrorFor = this.hasErrorFor.bind(this)
    this.renderErrorFor = this.renderErrorFor.bind(this)
    }

    componentDidMount () {
    const skillId = this.props.match.params.id

    axios.get(`/api/admin/skills/${skillId}`).then(response => {
        let skill = response.data
        let firstLetter = skill.level.charAt(0);
        let otherLetters = skill.level.slice(1)
        let skillObject = {
            value: firstLetter.toLowerCase() + otherLetters,
            label: firstLetter.toUpperCase() + otherLetters
        }
        
        this.setState({
            name: skill.name,
            level: skillObject
        })
    })
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

    handleUpdateskill (event) {
    event.preventDefault()
    const skillId = this.props.match.params.id
    const { history } = this.props
    let skill = new FormData();
    skill.append('_method', 'PATCH')
    skill.append('name', this.state.name)
    skill.append('level', this.state.level.value)


    axios.post(`/api/admin/skills/${skillId}`, skill, {
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
            <strong>Edit skill</strong>
        </h5>
        <div className="card-body px-lg-5 ">
            <form className="text-center" onSubmit={this.handleUpdateskill} encType="multipart/form-data">
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
                    placeholder={this.state.level}
                    options={options}
                    value={this.state.level}
                    onChange={this.handleSelectChange}
                    />
                    {this.renderErrorFor('level')}
                </div>
    
                <button className="btn btn-info btn-rounded btn-block z-depth-0 my-3" type="submit">Update</button>
    
            </form>
    
        </div>
    
    </div>
    </div>
    )
    }
}

export default SkillsEdit;