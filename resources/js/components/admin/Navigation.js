import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Projects from './Projects'
import ProjectsCreate from './ProjectsCreate'
import ProjectsEdit from './ProjectsEdit'
import Skills from './Skills'
import SkillsCreate from './SkillsCreate'
import SkillsEdit from './SkillsEdit'

const Navigation = () => (
    <div className="container-fluid h-100">
        <div className="row h-100">
                <div style={{ position: 'fixed', height: '100vh'}} className="col-2 bg-dark text-light d-flex flex-column py-4">
                    <a href="/" className="mb-4 text-light text-decoration-none">
                        <h3 className="text-center">McSouh</h3>
                    </a>
                    <Link to='/admin/projects' className='w-100 my-1 btn btn-light'>Projects</Link>
                    <Link to='/admin/skills' className='w-100 my-1 btn btn-light'>Skills</Link>
                    <a href="/logout" className="w-100 mt-auto mb-4 btn btn-danger">Logout</a>
                </div>
                <div className="offset-2 col-10 bg-light p-3">
                    <Switch>
                        <Route exact path='/admin/projects' component={Projects} />
                        <Route exact path='/admin/projects/create' component={ProjectsCreate} />
                        <Route path='/admin/projects/:id/edit' component={ProjectsEdit} />
                        <Route exact path='/admin/skills' component={Skills} />
                        <Route exact path='/admin/skills/create' component={SkillsCreate} />
                        <Route path='/admin/skills/:id/edit' component={SkillsEdit} />
                    </Switch>
                </div>
        </div>
    </div>
)

export default Navigation