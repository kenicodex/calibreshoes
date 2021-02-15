import React from 'react';
import Add from './Add';
import Delete from './Delete';
import Edit from './Edit';
import './Admin.css'
import Products from './Products';

function Admin(props) {
    return (
        <div>
            {/* <Navbar color="black" /> */}
            <div className="container border-left border-right">
                <div className='jumbotron mt-2 h1'>
                    Welcome Admin
                </div>
                
                <Add /> 
                <hr/>
                <Products />
            </div>
        </div>
    );
}

export default Admin;