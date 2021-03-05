import React, { useEffect, useState } from 'react';
import './Admin.css'
import { clothes, food, jewery, phones, ret, shoes } from './categories';
function Add(props) {
    const [state, setstate] = useState({})
    const [staus, setStaus] = useState('')
    const [temp, setTemp] = useState("")
    const [img, setImg] = useState("upload")
    const [pics, setPics] = useState([])
    useEffect(() => {
        setstate(state => ({ ...state, seller: props.seller }))
    }, [props.seller])
    const writ = (input) => {
        const name = input.target.name, value = input.target.value;
        setstate(state => ({ ...state, [name]: value }))
    }
    const Message = (props) => {
        let color;
        if (props.status === "error") { color = "danger" } else if (props.status === "info") { color = "info" } else if (props.status === "success") { color = "success" }
        return (
            <div className={`text-${color}`}>
                <b>{props.message}</b>
            </div>
        )
    }
    const submit = () => {
        if (state.Name === undefined || state.Price === undefined || state.Extra_info === undefined || state.Category === undefined || img === "upload") {
            setStaus(<Message message="Please fill in all fields" status="error" />);
        } else {
            const formData = new FormData();
            formData.append('words', JSON.stringify(state))
            // forcing 4 pics
            for (let i = 0; i < 4; i++) {
                formData.append(`pic${i}`, pics[i])
            }

            setStaus(<Message message={"Adding item " + state.Name + "..."} status="info" />)
            fetch('http://localhost:5000/calibre/add', {
                method: "post",
                // body : JSON.stringify({words:state,img : img})
                body: formData
            })
                .then(res => res.json())
                .then(response => {
                    setStaus(<Message message={response.message} stauts={response.status} />)
                })
        }
    }
    const Upload = (e) => {
        let types = ['image/jpeg', 'image/jpg', 'image/png']
        if (e.target !== undefined) {
            if (types.some(x => x === e.target.files[0].type)) {
                setStaus(<Message message="" status="" />)
                if (pics.length < 4) {
                    setPics([...pics, e.target.files[0]])
                    setImg(e.target.files[0])
                    let next = URL.createObjectURL(e.target.files[0])
                    setTemp(next)
                }
            } else { setStaus(<Message message="You can't upload this type of file. Photos only!" status="error" />) }
        }
    }
    return (
        <div id="form" encType="multipart/form-data" >
            <h3 style={{ marginLeft: "1%" }} >Add New Item</h3>  <div style={{ marginLeft: "1%" }}>{staus}</div>
            <div className="d-flex" style={{ overflowX: "scroll" }}>
                <img src={temp} alt="" width="150px" height="180px" className="m-1" />
                <label className="rounded border text-center p-4 m-1" htmlFor="photo" style={{ height: "200px", width: "150px", cursor: "pointer" }}>
                    <input type="file" className="d-none" onChange={(event) => { Upload(event) }} id="photo" />
                    Add photo<br />
                    <i className="fa fa-plus" style={{ fontSize: "50px", marginTop: "42%" }}></i> <br />
                    max : 4
                </label>
                {pics.map((imgs) => {
                    let img = URL.createObjectURL(imgs)
                    return (
                        <div className="d-block position-relative mx-1">
                            <img src={img} width="100px" height="100px" alt="" />
                        </div>)
                })}
            </div>
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
                    {/* <input className="inputs rounded border" type="text" name={"Category"}
                        placeholder={"Category"} value={state.Category} onChange={(event) => { writ(event) }} /> */}
                    <select name="Category" className="inputs rounded border"
                        onChange={(event) => setstate(state => ({ ...state, Category: event.target.value }))}>
                        <option value={undefined} selected>Select Category</option>
                        {ret("Shoes", shoes)}
                        {ret("Clothes", clothes)}
                        {ret("Devices", phones)}
                        {ret("Food", food)}
                        {ret("Jeweries", jewery)}
                    </select>
                </div>
            </div>
            <div className="w-100 text-center mt-3">
                <button className="btn border p-3 w-25" type="submit" onClick={() => { submit() }}>Add</button>
            </div>
        </div>
    );
}

export default Add;