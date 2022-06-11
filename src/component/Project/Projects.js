
import React, { useEffect, useState } from 'react';
import Project from '../Projects/Project';

import './Projects.css';



const Projects = () => {

    const [projects, setProjects] = useState([]);
    
    useEffect(() =>{
        fetch('project.json')
        .then(res => res.json())
        .then(data => setProjects(data));
    }, []);

    return (
        <section id='project'>
            <div className='project-title'>
                <h4>Explore My All</h4>
                <h1>Project's</h1>
            </div>
            <div className='container'>
              <div className='row g-4 mt-2'>
              {
                projects.map(projects => (
                    <Project 
                    key={projects.id} project ={projects}
                    
                    ></Project>
                    
                ))
            }
              </div>
            </div>
        </section>
    );
};

export default Projects;