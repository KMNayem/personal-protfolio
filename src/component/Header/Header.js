import React from 'react';
import './Header.css';
import CTA from './CTA';
import pic from '../../Access/me1.png';
import HeaderSocial from './HeaderSocial';


const Header = () => {
    return (
        <header>
            <div className='container header__container'>
               <div className='header-title'>
               <h3>Hallo,  I'm</h3>
                <h1>K.M. Nayem Uddin</h1>
                <h4 className='text-light'>Junior Web Developer</h4>
                <CTA></CTA>
               </div>
                <div className='me'>
                    <img className='me-pic' src={pic} alt='me' />
                </div>  
            </div>
            {/* <HeaderSocial></HeaderSocial> */}
        </header>
    );
};

export default Header;