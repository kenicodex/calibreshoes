import React, { useEffect, useState } from 'react';
import './Admin.css'
function Add(props) {
    const [state, setstate] = useState({
        // Name : 2,
        // Price : "DD",
        // Extra_info : "",
        // Category : ""
    })
    const [staus, setStaus] = useState('')
    const writ = (input) => {
        const name = input.target.name;
        const value = input.target.value;
        setstate(state => ({...state,[name]:value }))
    }
    const Message = (props) => {let color;
        if (props.status === "error") {color = "danger"} else if (props.status === "info") {color = "info"} else if (props.status === "success") {color = "success"}
        return (
            <div className={`text-${color}`}>
                <b>{props.message}</b>
            </div>
        )
    }
    const submit = () => {
        if (state.Name === undefined || state.Price === undefined || state.Extra_info === undefined || state.Category === undefined){
            setStaus(<Message message="Please fill in all fields" status="error" />); 
        } else {alert("ok")
            setStaus(<Message message={"Adding item " + state.Name + "..."} status="info" /> )
            fetch('https://kennyserver.herokuapp.com/calibre/edit')
                .then(res => res.text())
                .then(response => {
                    setStaus(<Message message="Item successfully added" stauts="success"/>)
                })
        }
    }
    return (
        <div>
            <h3 style={{marginLeft:"1%"}} >Add  New Item</h3>  <div style={{marginLeft:"1%"}}>{staus} </div>
            <div className='grid-input'>
                <div className="intag" >
                    <input className="inputs rounded border" type="text" name={"Name"}
                        placeholder={"Name"} value={state.Name} onChange={(event) => { writ(event) }} />
                </div>
                <div className="intag" >
                    <input className="inputs rounded border" type="text" name={"Price"}
                        placeholder={"Price"} value={state.Price} onChange={(event) => { writ(event) }} />
                </div>
                <div className="intag" >
                    <input className="inputs rounded border" type="text" name={"Extra_info"}
                        placeholder={"Extra_info"} value={state.Extra_info} onChange={(event) => { writ(event) }} />
                </div>
                <div className="intag" >
                    <input className="inputs rounded border" type="text" name={"Category"}
                        placeholder={"Category"} value={state.Category} onChange={(event) => { writ(event) }} />
                </div>
            </div>
            <div className="w-100 text-center mt-3">
                <button className="btn border p-3 w-25" onClick={() => { submit() }}>Add</button>
            </div>
        </div>
    );
}

export default Add;