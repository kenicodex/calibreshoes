import React from 'react';
import Navbar from '../Navbar/Navbar';
import './auth.css'

function Login(props) {
    return (
        <div className="w-100">
            <Navbar color="black" />
            <div className="container border-left border-right d-flex justify-content-center ">
                <div className="col-lg-4 col-md-6 col-sm-12 rounded border position-relative p-0" style={{top:'25vh'}}>
                    <div className="border-bottom px-3 py-2 b h4">Login</div> 
                    <div>
                        content
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Login;