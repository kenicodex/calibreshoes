import React from 'react';

function Delete(props) {
    const del = (id) => {
        alert(id)
    }
    return (
            <button onClick={() => { del(props.id) }} style={{right:"0"}}
            className='btn border border-danger text-danger py-3 p-1 w-25 position-absolute'
            >Delete</button>
     
    );
}

export default Delete;