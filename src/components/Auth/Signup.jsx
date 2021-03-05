import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { check } from '../Extras/check';
import './auth.css'
function Signup(props) {
    const [input, setInput] = useState({})
    const [say, setSay] = useState("")

    let online = "https://kennyserver.herokuapp.com"
    let local = "http://localhost:5000";
    const [hide, setHide] = useState(true)
    useEffect(() => {
        if (localStorage.getItem("logged") === "in") {
            window.location.assign('/admin')
        }
    }, [online, local])
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
    const { Firstname, Lastname, Email, Password, Phone, Confirm } = input
    const submit = () => {
        // if (window.navigator.onLine === false) {
        //     setSay(<Msg message="Network Error" status="error" />)
        // } else {
            if (check(Firstname, "") || check(Lastname, "") || check(Email, "") || check(Password, "") || check(Phone, "") || check(Confirm, undefined)) {
                setSay(<Msg message="Please fill in all fields " status="error" />)
            } else {
                if (!Email.includes("@") && !Email.includes("mail.com") && Email.includes(" ")) {
                    setSay(<Msg message="Invalid email" status="error" />)                    
                } else {
                if (!check(Password, Confirm)) {
                    setSay(<Msg message="Passwords don't match" status="error" />)
                } else {
                    if (Password.length < 8) {
                        setSay(<Msg message="Passwords too short" status="error" />)
                    } else {
                        let regex = /^[A-Za-z]\w{7,14}$/
                        if (Password.match(regex)) {
                            setSay(<Msg message="Password must contain at least 1 uppercase, 1 lowwercase and 1 special character.eg" status="error" />)
                        } else {
                            const formData = new FormData();
                            formData.append('details', JSON.stringify(input))
                            setSay(<Msg message="Loading..." status="info" />)
                            fetch(local + "/calibreauth/signup", {
                                method: "post",
                                body: formData
                            })
                                .then(res => res.json())
                                .then(data => {
                                    setSay(<Msg message={data.message} status={data.status} />)
                                    sessionStorage.setItem("sent", JSON.stringify(input))
                                    if (data.status === "success") {
                                        localStorage.setItem("logged","in")
                                        window.location.assign("/admin")
                                    }
                                })
                        }
                    }
                }
                }
            }
        // }
    }
    return (
        <div className="w-100">
            <nav className="authnav">
                <Link to="/" className="pt-2">EasyShoppings</Link>
            </nav>
            <div className="container border-left border-right d-flex justify-content-center pb-3" style={{ height: "auto" }}>
                <div className="col-lg-4 col-md-6 col-sm-12 rounded border position-relative p-0" style={{ top: '10vh' }}>
                    <div className="border-bottom name">Register
                    <div style={{ fontSize: "12px" }}>Create and account with us and start selling</div></div>
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
                        <div className="inputele position-relative">
                            <input type={hide ? "password" : "text"} value={input.Password} name="Password" placeholder="Password" onChange={(event) => { change(event) }} />
                            <div className="position-absolute text-center pt-2" onClick={() => { if (hide) { setHide(false) } else { setHide(true) } }}
                                style={{ right: "1.2px", height: "80%", top: "10%", width: "50px", cursor: "pointer" }}>{hide ? "hide" : "show"}</div>
                        </div>
                        <div className="inputele position-relative">
                            <input type={hide ? "password" : "text"} value={input.Confirm} name="Confirm" placeholder="Confirm" onChange={(event) => { change(event) }} />
                            <div className="position-absolute text-center pt-2" onClick={() => { if (hide) { setHide(false) } else { setHide(true) } }}
                                style={{ right: "1.2px", height: "80%", top: "10%", width: "50px", cursor: "pointer" }}>{hide ? "hide" : "show"}</div>
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