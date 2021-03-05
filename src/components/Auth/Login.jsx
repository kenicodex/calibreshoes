import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { check } from '../Extras/check';
import './auth.css'

function Login(props) {
    let online = "https://kennyserver.herokuapp.com"
    // let local = "http://localhost:5000";
    useEffect(() => {
        if (localStorage.getItem("logged") === "in") {
            window.location.assign('/admin')
        }
    }, [online])
    const [input, setInput] = useState({})
    const [say, setSay] = useState("")
    const [hide, setHide] = useState(true)
    const change = (e) => {
        var name = e.target.name;
        var value = e.target.value;
        setInput(input => ({ ...input, [name]: value }))
    }
    const Msg = (props) => {
        let color;
        if (props.status === "success") { color = "success" } else if (props.status === "info") { color = "info" } else if (props.status === "error") { color = "danger" }
        return <div className={`border border-${color} text-center w-50 m-auto rounded p-2 text-${color}`}>{props.message}</div>
    }
    const submit = () => {
        const { Email, Password } = input;
        if (window.navigator.onLine === false) {
            setSay(<Msg message="Network error" status="error" />)
        } else {
            if (check(Email, "") || check(Password, "")) {
                setSay(<Msg message="Please fill in all fields" status="error" />)
            } else {
                setSay(<Msg message="Loading..." status="info" />)
                fetch(online + "/calibreauth/login", {
                    method: "post",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(input)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.status === "success") {
                            setSay(<Msg message={data.message + " successfully logged in"} status={data.status} />);
                            localStorage.setItem("user", JSON.stringify(input))
                            window.location.assign('/admin')
                        } else {
                            setSay(<Msg message={data.message} status={data.status} />);
                            localStorage.setItem("logged","in")
                            window.location.assign('/admin')
                        }
                    })
            }
        }
    }
    return (
        <div className="w-100">
            <nav className="authnav">
                <Link to="/" className="pt-2">EasyShoppings</Link>
            </nav>
            <div className="container border-left border-right d-flex justify-content-center" style={{ height: "auto" }}>
                <div className="col-lg-4 col-md-6 col-sm-12 rounded border position-relative p-0" style={{ top: '20vh' }}>
                    <div className="border-bottom name">Login
                    <div style={{ fontSize: "12px" }}>check out your store</div></div>
                    <div className="w-100">
                        {say}
                        <div className="inputele">
                            <input type="text" value={input.Email} name="Email" placeholder="Email" onChange={(event) => { change(event) }} />
                        </div>
                        <div className="inputele position-relative">
                            <input type={hide ? "password" : "text"} value={input.Password} name="Password" placeholder="Password" onChange={(event) => { change(event) }} />
                            <div className="position-absolute text-center pt-2" onClick={() => { if (hide) { setHide(false) } else { setHide(true) } }}
                                style={{ right: "1.2px", height: "80%", top: "10%", width: "50px", cursor: "pointer" }}>{hide ? "hide" : "show"}</div>
                        </div>
                    </div>
                    <div className="w-100  text-center">
                        <button className="btn border mb-2" type="submit" onClick={() => { submit() }}>Login</button>
                    </div>
                    <div className="position-absolute" style={{ right: "1px", bottom: "2px" }}>
                        Forgot password?
                    </div>
                </div>
            </div>
            <div className="w-100 text-center position-relative" style={{ top: "30vh" }}>
                Don't have an account? <Link to="/signup">Signup</Link>
            </div>
        </div>
    );
}

export default Login;