import React from 'react';
import Navbar from '../Navbar/Navbar';

function Notfround(props) {
    const style = {
        height: '100vh',
        width: '100%',
        textAlign: "center",
        backgroundColor: "#fff",
        paddingTop: "35vh"
    }
    return (
        <div className="w-100">
            <Navbar />
            <div className="text-danger text-center px-0" style={style}>
            <div className="border rounded-lg border-danger m-auto w-50 p-5">
                <b className="h1"> OOPS😟</b>
                <h3>Error  404</h3> 
                 <h4>page does not existing</h4>
             </div>
        </div>
        </div>
    );
}

export default Notfround;