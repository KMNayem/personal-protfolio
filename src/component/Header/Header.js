import React from 'react';
import './Header.css';
import CTA from './CTA';
import pic from '../../Access/me1.png';
import HeaderSocial from './HeaderSocial';


const Header = () => {
    return (
        <header>
            <div className='container header__container'>
                <h3>Hallo,  I'm</h3>
                <h1>K.M. Nayem Uddin</h1>
                <h4 className='text-light'>Junior Web Developer</h4>
                <CTA></CTA>
                <HeaderSocial></HeaderSocial>

                <div className='me'>
                    <img src={pic} alt='me' />
                </div>
                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    );
};

export default Header;