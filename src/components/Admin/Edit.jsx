import React from 'react';

function Edit(props) {
    const edit = (id) => {
        alert(id)
    }
    return (
        <button onClick={() => { edit(props.id) }}
         className='btn border border-info text-info py-3 p-1 w-25'>Edit</button>
    );
}
export default Edit;