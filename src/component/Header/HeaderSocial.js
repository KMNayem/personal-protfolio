import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {AiFillGithub} from 'react-icons/ai';
import {FaFacebookSquare} from 'react-icons/fa';

const HeaderSocial = () => {
    return (
        <div className='header__socials'>
            <a href="http://linkedin.com" target='_blank'><BsLinkedin/></a>
            <a href="http://github.com" target='_blank'><AiFillGithub/></a>
            <a href="http://facebook.com" target='_blank'><FaFacebookSquare/></a>
        </div>
    );
};

export default HeaderSocial;