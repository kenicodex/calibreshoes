import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { check } from '../Extras/check';
import './auth.css'
function Signup(props) {
    const [input, setInput] = useState({})
    const [say, setSay] = useState("")
    let online = "https://kennyserver.herokuapp.com"
    // local = "http://localhost:5000";
    useEffect(() => {
        fetch(online + "/calibreauth/logged").then(res=>res.json()).then(data =>{
            if (data.log) {
                window.location.assign('/admin')
            }
        })
    }, [online])
    const change = (e) => {
        var name = e.target.name;
        var value = e.target.value;
        setInput(input => ({ ...input, [name]: value }))
    }
    const Msg = (props) => {
        let color;
        if (props.status === "success") { color = "success" } else if (props.status === "info") { color = "info" } else if (props.status === "error") { color = "danger" }
        return <div className={`border border-${color} text-center w-auto mx-5 rounded p-2 text-${color}`}>{props.message}</div>
    }
    const { Firstname,Lastname, Email, Password, Phone, Confirm } = input
    const submit = () => {

        if (check(Firstname, "") || check(Lastname, "") || check(Email, "") || check(Password, "") || check(Phone, "") || check(Confirm, undefined)) {
            setSay(<Msg message={"Please fill in all fields "} status="error" />)
        } else {
            if (!check(Password, Confirm)) {
                setSay(<Msg message="Passwords don't match" status="error" />)
            } else {
                if (Password.length < 8) {
                    setSay(<Msg message="Passwords too short" status="error" />)
                } else {
                    let regex =  /^[A-Za-z]\w{7,14}$/
                    if (Password.match(regex)) {
                        setSay(<Msg message="Password must contain at least 1 uppercase, 1 lowwercase and 1 special character.eg" status="error" />)   
                    } else {
                        const formData = new FormData();
                        formData.append('details',JSON.stringify(input))
                        setSay(<Msg message="Loading..." status="info" />)
                        fetch(online+"/calibreauth/signup", {
                            method: "post",
                            body: formData
                        })
                            .then(res => res.json())
                            .then(data => {
                                setSay(<Msg message={data.message} status={data.status} />)
                                sessionStorage.setItem("sent",JSON.stringify(input))
                                if(data.status === "success"){
                                    window.location.assign("/confirm?email="+Email)
                                }
                            })
                    }
                }
            }
        }
    }
    return (
        <div className="w-100">
            <nav className="authnav">
                <Link to="/" className="pt-2">Calibre</Link>
            </nav>
            <div className="container border-left border-right d-flex justify-content-center pb-3" style={{ height: "auto" }}>
                <div className="col-lg-4 col-md-6 col-sm-12 rounded border position-relative p-0" style={{ top: '10vh' }}>
                    <div className="border-bottom name">Register
                    <div style={{fontSize:"12px"}}>Create and account with us and start selling</div></div>
                    <div className="w-100">
                        {say}
                        <div className="inputele">
                            <input type="text" value={input.Firstname} name="Firstname" placeholder="Firstname" onChange={(event) => { change(event) }} />
                        </div>
                        <div className="inputele">
                            <input type="text" value={input.Lastname} name="Lastname" placeholder="Lastname" onChange={(event) => { change(event) }} />
                        </div>
                        <div className="inputele">
                            <input type="email" value={input.Email} name="Email" placeholder="Email" onChange={(event) => { change(event) }} />
                        </div>
                        <div className="inputele">
                            <input type="tel" value={input.Phone} name="Phone" placeholder="Phone" onChange={(event) => { change(event) }} />
                        </div>
                        <div className="inputele">
                            <input type="password" value={input.Password} name="Password" placeholder="Password" onChange={(event) => { change(event) }} />
                        </div>
                        <div className="inputele">
                            <input type="password" value={input.Confirm} name="Confirm" placeholder="Confirm" onChange={(event) => { change(event) }} />
                        </div>
                    </div>
                    <div className="w-100 mb-2 text-center">
                        <button className="btn border" onClick={() => { submit() }}>Resgiter</button>
                    </div>
                </div>
            </div>
            <div className="w-100 text-center position-relative" style={{ top: "10vh" }}>
                Already have an account? <Link to="/login">Sign in</Link>
            </div>
        </div>
    );
}

export default Signup;