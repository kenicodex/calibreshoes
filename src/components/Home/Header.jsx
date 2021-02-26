import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    let path = process.env.PUBLIC_URL + '/images/'
    return (
        <header className='header'>
        <div className='text'>
            <span>Easy Shopping</span>
            <br />
            <span>Easy and Affordable Deals <br/> buy and sells products</span>
        </div>
       <Link to="/signup"><button className='rounded bg-success'>Join Us</button></Link> 
        <img src={path + 'yespng'} alt="" className='ad' />
    </header>
    );
}

export default Header;