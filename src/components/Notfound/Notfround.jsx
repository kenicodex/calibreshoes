import React from 'react';

function Notfround(props) {
    const style = {
        height : '100vh',
        width : '100%',
        textAlign : "center",
        paddingTop : "20%",
        backgroundColor : " #23f44e"
    }
    return (
        <div className="h1" style={style}>
            <b >oops</b> <br/>
            error in loading
        </div>
    );
}

export default Notfround;