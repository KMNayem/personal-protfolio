import React from 'react';
import './Contact.css';
import { useRef } from 'react';
import emailjs from 'emailjs-com';



const Contact = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pdjnxng', 'template_51l419m', form.current, 'c3IwrFGaAb_lwXsOE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };


    return (
        <section id='contact'>
            <div className='text-center mb-3'>
            <h3>Get in Touch</h3>
            <h1>Contact</h1>
            </div>
            <form ref={form} onSubmit={sendEmail} className='container mt-5 email-box'>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your Name"/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your Email"/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button className='btn btn-primary' >SEND Email</button>
            </form>
        </section>
    );
};

export default Contact;