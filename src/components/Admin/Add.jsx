import React, { useState } from 'react';
import './Admin.css'
function Add(props) {
    const [state, setstate] = useState({})
    const [staus, setStaus] = useState('')
    const [img, setImg] = useState("upload")
    const writ = (input) => {
        const name = input.target.name, value = input.target.value;
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
        if (state.Name === undefined || state.Price === undefined || state.Extra_info === undefined || state.Category === undefined || img === "upload"){
            setStaus(<Message message="Please fill in all fields" status="error" />); 
        } else {
            const formData = new FormData();
            formData.append('words',JSON.stringify(state))
            formData.append('pic',img) 
            setStaus(<Message message={"Adding item " + state.Name + "..."} status="info" /> )
            fetch('http://localhost:5000/calibre/add',{
                method : "post",
                // body : JSON.stringify({words:state,img : img})
                body : formData
            })
                .then(res => res.json())
                .then(response => {
                    setStaus(<Message message={response.message} stauts={response.status}/>)
                })
        }
    }
    const Upload =(e)=>{
        if (e.target !== undefined) {
            setImg(e.target.files[0])
        }
        return (
            <div className="rounded border p-4" style={{height:"200px",width:"200px", cursor:"pointer"}}>
                {img.name? img.name:  "Add photo"}
            </div>
        )
    }
    return (
        <div id="form" encType="multipart/form-data" >
            <h3 style={{marginLeft:"1%"}} >Add  New Item</h3>  <div style={{marginLeft:"1%"}}>{staus}</div> 
            <label className="photo-upload" htmlFor="photo"> <Upload />
                <input type="file" className="d-none" onChange={(event)=>{Upload(event)}} id="photo"/>
            </label>
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
                <button className="btn border p-3 w-25" type="submit"  onClick={() => { submit() }}>Add</button>
            </div>
        </div>
    );
}

export default Add;