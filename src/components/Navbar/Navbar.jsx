import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import './mobile.css'
import Search from './search';
import Sidebar from './Sidebar';

function Navbar(props) {
    useEffect(() => {
    }, [])
    return (
        <nav className='w-100' style={{backgroundColor:props.color || "none"}} >   <Sidebar />
            <div className="brand">
                <Link to="/">Calibre</Link>
            </div>
            <Search />
            <div className='links' >
                <div><Link to="/">products</Link> </div>
                <div><Link to="/">men</Link> </div>
                <div><Link to="/">women</Link> </div>
                <div><Link to="/">About us</Link> </div>
                <div><Link to="/">Help</Link> </div>
            </div>

            <button className='right'><Link to="/cart" className="text-white"><i className='fa fa-shopping-cart'></i></Link></button>
            {/* <i className="fa fa-bars position-fixed text-white d-sm" onClick={() => (toggle())}
                style={{ fontSize: '24px', right: '2%', top: '10px', cursor: 'pointer', zIndex: '1000' }}></i> */}

        </nav>
    );
}

export default Navbar;