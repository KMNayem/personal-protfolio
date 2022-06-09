import { Button } from 'bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';
import './Projects.css';


const Projects = () => {
    return (
        <section id='project'>
            <div className='project-title'>
                <h4>Explore My All</h4>
                <h1>Project's</h1>
            </div>
            <div className='container'>
                <div className='row'>
               <div className='col'>
               <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src="holder.js/100px180" />
             <Card.Body>
                 <Card.Title>Pro Paint</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
               <a href='https://pro-paint.firebaseapp.com/' className='btn btn-primary '>Live Link</a> 
            </Card.Body>
            </Card>
               </div>
               <div className='col'>
               <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src="holder.js/100px180" />
             <Card.Body>
                 <Card.Title>Toy House</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
            <a href='https://toy-house-b1a2d.web.app' className='btn btn-primary '>Live Link</a> 
            </Card.Body>
            </Card>
               </div>
               <div className='col'>
               <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src="holder.js/100px180" />
             <Card.Body>
                 <Card.Title>Influencer Hub</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
            <a href='https://kmnayem.github.io/influencer-gear-main/' className='btn btn-primary '>Live Link</a> 
            </Card.Body>
            </Card>
               </div>
               <div className='col'>
               <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src="holder.js/100px180" />
             <Card.Body>
                 <Card.Title>Panda Shop</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
            <a href='https://kmnayem.github.io/panda-bootstrap/' className='btn btn-primary '>Live Link</a> 
            </Card.Body>
            </Card>
               </div>
               <div className='col'>
               <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src="holder.js/100px180" />
             <Card.Body>
                 <Card.Title>Horror</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
            <a href='https://kmnayem.github.io/horror/' className='btn btn-primary '>Live Link</a> 
            </Card.Body>
            </Card>
               </div>
               <div className='col'>
               <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src="holder.js/100px180" />
             <Card.Body>
                 <Card.Title>Convention Hall</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
            <a href='https://kms-convention-center.netlify.app/' className='btn btn-primary '>Live Link</a> 
            </Card.Body>
            </Card>
               </div>
             
                </div>
            </div>

            


        </section>
    );
};

export default Projects;