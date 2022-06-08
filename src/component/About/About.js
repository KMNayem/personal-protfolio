import React from 'react';
import './About.css';
import me2 from '../../Access/me2.jpeg';
import {AiOutlineCheck} from 'react-icons/ai';
import {AiOutlineRise} from 'react-icons/ai';
import {AiOutlineTool} from 'react-icons/ai';

const About = () => {
    return (
        <div>
            <section id='about'>
                <div className='about-title'>
                <h4>Get To Know</h4>
                <h1>About Me</h1>
                </div>

                <div className='container about-container'>
                <div className='about-me'>
                    <div className='about__me-img'>
                        <img src={me2} alt='About img'/>
                    </div>
                 </div>
            <div className='about-content'>
                <div className='about-cards'>
                    <article className='about-card'>
                        <AiOutlineCheck/>
                        <h3>Expertise</h3>
                        <small>JavaScript, ES6, React,  HTML5, CSS3.</small>
                    </article>

                
                    <article className='about-card'>
                        <AiOutlineRise/>
                        <h3>Comfortable</h3>
                        <small> Firebase, Nodejs, GitHub, Stripe</small>
                    </article>

                
                    <article className='about-card'>
                        <AiOutlineTool/>
                        <h3>Tools</h3>
                        <small>Git, VS Code, JWT, Heroku, Netlify, Figma</small>
                    </article>
                </div><br/>
                <div className='about-content'>
                        <p> A web developer is a programmer who develops World Wide Web applications using a client–server model. The applications typically use HTML, CSS and JavaScript in the client, PHP, ASP.NET, Python, Node.js, Go or Java in the server, and http for communications between client and server.</p><br/>

                        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                    </div>
            </div>
                </div>

            </section>
        </div>
    );
};

export default About;