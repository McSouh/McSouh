import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
    constructor () {
        super()
        this.state = {
            skills: [],
            visible: ''
        }
    }

    componentDidMount(){
        axios.get('/api/skills')
        .then(response => {
            this.setState({
                skills: response.data
            })
            $(".skills-progress").inViewport(function(px){
                if(px) $(this).addClass("launch");
            });
        })
        .catch(error => {
            console.log(error.response)
        })
        
    }
    componentWillUnmount(){
        $(".skills-progress").removeClass("launch");
    }
      
    render(){
            return (
                <section id="about" className="section">
                <div className="container text-success py-3 px-5">
                    <h1 className="mt-5 text-uppercase border-bottom border-success">About me</h1>

                    <p className="h2 text-justify mb-5">Hello, my name is Maxime, and I've been learning Web Development since 2018. I love to code, discover new possibilities, create new functionalities, solve problems, challenge myself.</p>

                    <div className={`px-lg-5 skills-progress ${this.state.visible}`}>
                    {this.state.skills.map(skill => (
                        <div key={skill.id} className={`bar ${skill.level}`}  data-skill={skill.name}></div>
                    ))}
                    </div>
                    <div className="d-flex w-100 justify-content-center mt-5">
                        <Link to="/about" className="badge-pill bg-dark h4 py-2 px-4 border border-success">More about me</Link>
                    </div>

                    <img src="/img/leaf-right-green.png" className="leaf-bottom-right" />

                </div>
            </section>
            )
            }
}


      
export default About