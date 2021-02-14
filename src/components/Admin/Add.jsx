import React, { useState } from 'react';
function Add(props) {
    const [state, setstate] = useState({})
    const [data, setdata] = useState('')
    const writ = (input) => {
        const name = input.target.name;
        const value = input.target.value;
        setstate({ [name]: value })
    }
    const submit =() => {
        fetch('https://kennyserver.herokuapp.com/calibre/edit')
        .then(res => res.text())
        .then(response => setdata(response))
    }
    return (
        <div>
            Add Item {data}<br />
            <div className='grid-input'> 
                <input className="inputs rounded border" type="text" name="name" value={state.name} onChange={(event) => { writ(event) }} /> <br />
                <input className="inputs rounded border" type="text" name="item" value={state.item} onChange={(event) => { writ(event) }} /> <br />
                <input className="inputs rounded border" type="text" name="towrite" value={state.towrite} onChange={(event) => { writ(event) }} />
                <br/>
                <button className="btn border p-2 w-25" onClick={()=>{submit()}}>Add</button>
            </div>
        </div>
    );
}

export default Add;