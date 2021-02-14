import React from 'react';

function Header(props) {
    let path = process.env.PUBLIC_URL + '/images/'
    return (
        <header className='header'>
        <div className='text'>
            <span>Calibre</span>
            <br />
            <span>Easy and Affordable Deals</span>
        </div>
        <button className='rounded'>Buy Now</button>
        <img src={path + 'yespng'} alt="" className='ad' />
    </header>
    );
}

export default Header;