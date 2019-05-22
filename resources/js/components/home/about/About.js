import React, { Component } from 'react';


class About extends Component {
    render() {
        return (
            <div className="section py-5" style={{flex: "1"}}>
                <div className="container">
                <h1 className="mt-5 mb-3 text-success border-bottom border-success">ABOUT ME</h1>
                <div className="d-flex justify-content-md-between flex-wrap">
                    <div className="col-12 col-md-6 text-success pt-md-5 mt-5 text-justify">
                        <p className="h4">Welcome to my portfolio, I am a web developer in Bruxelles, I have a passion for the code, since I started my traineeship, I always wanted to do more, learn new methods, new better language, solve problems. <br/>
                        I started with HTML/CSS, as everyone, then we moved on Javascript, which was my first Programming Language, and I loved it, I took a course on Udemy because I wanted to go further in that language, and I realize that learning on the internet was so easy when you take the time. 
                        After that I learned React also on Udemy, and we were learning Wordpress Developer at my traineeship, then we had to do a big project with Wordpress, but I felt something wrong with it, I couldn't do everything I wanted. <br/>
                        So I decided to learn Laravel but this time, by my self, without courses to see if it was more for me. And it was, I did the same project with Laravel, and I just had so much fun doing it, doing some bonus stuff,... <br/>
                        Now I am writing this Portfolio on Laravel mixed with React.
                        I really love all of this.</p>
                    </div>
                    <div id="timeline" className="col-12 col-md-6">
                        <div className="container">

                            <div className="timeline-block timeline-block-right">
                                <div className="marker"></div>
                                <div className="timeline-content">
                                    <h3>2018 - 2019</h3>
                                    <span>Molengeek</span>
                                    <p>This is where I have really started to code, I loved it, it was a 6 months traineeship where I've learn a lot of libraries and frameworks, but also how to learn faster and by myself</p>
                                </div>
                            </div>

                            <div className="timeline-block timeline-block-right">
                                <div className="marker"></div>
                                <div className="timeline-content">
                                    <h3>2017 - 2018</h3>
                                    <span>HEFF</span>
                                    <p>I switched from Publicity to Infography at the same school, this is where I first get to code something, it was the begining of something </p>
                                </div>
                            </div>

                            <div className="timeline-block timeline-block-right">
                                <div className="marker"></div>
                                <div className="timeline-content">
                                    <h3>2016 - 2017</h3>
                                    <span>HEFF</span>
                                    <p>Student at a Publicity school, I learned (briefly) composition in design </p>
                                </div>
                            </div>

                            <div className="timeline-block timeline-block-right">
                                <div className="marker"></div>
                                <div className="timeline-content">
                                    <h3>2014 - 2016</h3>
                                    <span>IHECS</span>
                                    <p>Student at a Communication school, I learned Design concepts and technologies</p>
                                </div>
                            </div>

                    </div>
                </div>
            </div>
            </div>
        </div>
        );
    }
}

export default About
