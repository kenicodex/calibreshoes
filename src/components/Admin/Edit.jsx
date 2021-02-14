import React from 'react';

function Edit(props) {
    const edit = (id) => {
}
return (
    <div className="w-100"> 
        Edit <br/>
        <button onClick={()=>{edit(2)}} className='btn border m-2 p-1 w-25'>edit</button>
    </div>
);
}
export default Edit;