import { Button } from 'bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';
import './Projects.css';
import web1 from '../../Access/web1.PNG';
import web2 from '../../Access/web2.PNG';
import web3 from '../../Access/web3.PNG';
import web4 from '../../Access/web4.PNG';
import web5 from '../../Access/web5.PNG';
import web6 from '../../Access/web6.PNG';


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
               <Card style={{ width: '18rem' }} className='card-box'>
             <Card.Img className='card-img' variant="top" src={web1} /><br/>
             <Card.Body>
                <h2>Pro Paint</h2>
            <Card.Text>
            This project is basically a Paint roller base.
             A full-fledged paint roller website.
            Service are provided separately for all type of products
            </Card.Text><br/>
               <div >
               <a href='https://pro-paint.firebaseapp.com/'  target='_blank' className='btn btn-primary  m-2'>Live Link</a> 
               <a href='https://pro-paint.firebaseapp.com/'  target='_blank' className='btn btn-primary '>Details</a> 
               </div>
            </Card.Body>
            </Card>
               </div>
               <div className='col'>
               <Card style={{ width: '18rem' }} className='card-box'>
             <Card.Img variant="top" className='card-img' src={web2} /><br/>
             <Card.Body>
                 <h2>Toy House</h2>
            <Card.Text>
            This project is basically for kids.
             This project deals with adding and removing product.
            It’s also a responsive Website.

            </Card.Text><br/>
            <a href='https://toy-house-b1a2d.web.app'  target='_blank' className='btn btn-primary '>Live Link</a> 
            <a href='https://toy-house-b1a2d.web.app'  target='_blank' className='btn btn-primary  m-2'>Details</a>
            </Card.Body>
            </Card>
               </div>
               <div className='col'>
               <Card style={{ width: '18rem' }} className='card-box'>
             <Card.Img variant="top" className='card-img' src={web3} /><br/>
             <Card.Body>
                 <h2>Influencer Hub</h2>
            <Card.Text>
            This project is basically an influence base.
             It’s just a frontend project for influence product
            It’s also a responsive Website
            </Card.Text><br/>
            <a href='https://kmnayem.github.io/influencer-gear-main/'  target='_blank' className='btn btn-primary '>Live Link</a> 
            <a href='https://kmnayem.github.io/influencer-gear-main/'  target='_blank' className='btn btn-primary  m-2'>Details</a>
            </Card.Body>
            </Card>
               </div>
               <div className='col'>
               <Card style={{ width: '18rem' }} className='card-box'>
             <Card.Img variant="top" className='card-img' src={web4} /><br/>
             <Card.Body>
                 <h2>Panda Shop</h2>
            <Card.Text>
            This project is basically an gadge base.
             It’s just a frontend project selling product
            It’s also a responsive Website.
            </Card.Text><br/>
            <a href='https://kmnayem.github.io/panda-bootstrap/'  target='_blank' className='btn btn-primary '>Live Link</a>
            <a href='https://kmnayem.github.io/panda-bootstrap/'  target='_blank' className='btn btn-primary  m-2'>Details</a> 
            </Card.Body>
            </Card>
               </div>
               <div className='col'>
               <Card style={{ width: '18rem' }} className='card-box'>
             <Card.Img variant="top" className='card-img' src={web5} /><br/>
             <Card.Body>
                 <h2>Horror</h2>
            <Card.Text>
            This project is basically an Horror base.
             It’s just a frontend project Hallowen party product
            It’s also a responsive Website
            </Card.Text><br/>
            <a href='https://kmnayem.github.io/horror/'  target='_blank' className='btn btn-primary '>Live Link</a> 
            <a href='https://kmnayem.github.io/horror/'  target='_blank' className='btn btn-primary  m-2'>Details</a>
            </Card.Body>
            </Card>
               </div>
               <div className='col'>
               <Card style={{ width: '18rem' }} className='card-box'>
             <Card.Img variant="top" className='card-img' src={web6} /><br/>
             <Card.Body>
                 <h2>Convention Hall</h2>
            <Card.Text>
            This project is basically an convention base.
             It’s just a frontend project for marry or any kind of party booking.
            It’s also a responsive Website
            </Card.Text><br/>
            <a href='https://kms-convention-center.netlify.app/' target='_blank' className='btn btn-primary '>Live Link</a>
            <a href='https://kms-convention-center.netlify.app/'  target='_blank' className='btn btn-primary  m-2'>Details</a> 
            </Card.Body>
            </Card>
               </div>
             
                </div>
            </div>

            


        </section>
    );
};

export default Projects;