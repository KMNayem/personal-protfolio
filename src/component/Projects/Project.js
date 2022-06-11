import React from 'react';
import './Project.css';
import { useNavigate } from 'react-router-dom';

const Project = ({project}) => {

    // const navigate = useNavigate();
    const { id, picture, name, about, link} = project || {};

    return (
        <div className="col-lg-4 col-md-6 col-12">
        <div className="single-project py-4 h-100 ">
          <img className="w-100 mx-auto rounded-4 p-4" src={picture} alt="" />
          <div className="text-start p-4">
            <h3 className='text-center'><span>{name}</span></h3>
            <p>
              <small>
                {about}
              </small>
            </p>
            <button className='btn btn-primary m-3' >
              <a href={link} target="_blank" className='text-black button-a'>Live Site</a>
            </button>
            <button className='btn btn-primary'>
              <a href={link} target="_blank" className='text-black button-a'>Details</a>
            </button>
          </div>
        </div>
      </div>
    );
};

export default Project;