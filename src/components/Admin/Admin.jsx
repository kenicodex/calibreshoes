import React from 'react';
import Add from './Add';
import Delete from './Delete';
import Edit from './Edit';
import './Admin.css'

function Admin(props) {
    return (
        <div>
            {/* <Navbar color="black" /> */}
            <div className="container border-left border-right">
                <div className='jumbotron mt-2 h1'>
                    Welcome Admin
                </div>
                
                <Add />
                <Edit />
                <Delete />
            </div>
        </div>
    );
}

export default Admin;