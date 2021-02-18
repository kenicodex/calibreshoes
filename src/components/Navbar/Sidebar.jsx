import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'

function Sidebar(props) {
    const [status, setStatus] = useState("hide")
    useEffect(() => {
    }, [])
    const hi = useRef(null)
    const toggle = () => {
        if (status === "hide") {
            setStatus("show")
            hi.current.style.display= "block"
            hi.current.style.opacity= "1"
            // hi.current.style.width= "50%"
        } else if (status === "show") {
            setStatus("hide")
            hi.current.style.display= "none"
            hi.current.style.opacity= "0"
            // hi.current.style.width= "0"
        }
    }
    return (
        <React.Fragment>
            <i className="fa fa-bars position-fixed text-white d-sm" onClick={() => (toggle())}
                style={{ fontSize: '24px', right: '2%', top: '10px', cursor: 'pointer', zIndex: '10000' }}></i>
            <div className="bg-dark sidebar" ref={hi}>
                <div className="side" onClick={toggle} ></div>
                <div className="position-fixed text-white bg-dark content" style={{ zIndex: "1000" }}>
                    <div><Link to="/">products</Link> </div>
                    <div><Link to="/">men</Link> </div>
                    <div><Link to="/">women</Link> </div>
                    <div><Link to="/">About us</Link> </div>
                    <div><Link to="/login">Login</Link> </div>
                    <span className="position-fixed bg-dark py-2 text-center w-50"
                    style={{bottom:"0"}}>©kennycode 2021</span>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Sidebar;