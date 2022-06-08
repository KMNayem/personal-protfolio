import React, { useState } from 'react';
import './Nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {AiOutlineProject} from 'react-icons/ai';
import {AiOutlineMessage} from 'react-icons/ai';


const Nav = () => {
    const [ activeNav, setActiveNav ] = useState('#')
    return (
        <nav>
            <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
            <a href='#about'  onClick={() => setActiveNav('#about')}  className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
            <a href='#project' onClick={() => setActiveNav('#project')} className={activeNav === '#project' ? 'active' : ''}><AiOutlineProject/></a>
            <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMessage/></a>
        </nav>
    );
};

export default Nav;