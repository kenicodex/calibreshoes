import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './auth.css'

function Confrim(props) {
    const [code, setCode] = useState("")
    const [sec, setSec] = useState(59) 
    const [min, setMin] = useState(1)

    useEffect(() => {
        fetch("https://kennyserver.herokuapp.com/calibreauth/logged").then(res=>res.json()).then(data =>{
            if (data.log) {
                window.location.assign('/admin')
            }
        })
        let cle = setInterval(() => {
            setSec(r => r-1);
        }, 1000);
        setTimeout(() => {
            sessionStorage.removeItem("unknown")
            setMin(0); setSec(59); 
        }, 60000);
        setTimeout(()=>{
            clearInterval(cle)
        },120000)
    }, [])
    // const resend =()=>{
    //     let code = Math.floor(Math.random() * 1000000);
    //     sessionStorage.setItem("unknown",code)
    // }
    const toSend =()=>{
        if (code === "") {
            alert("enter the code please");
        } else {
            let values = localStorage.getItem("user")
            // let to = {details:values,code:code}
            if (sessionStorage.getItem("unknown")===code) {
                alert(values)
                fetch("https://kennyserver.herokuapp.com/calibreauth/confirm", {
                    method: 'post',
                    headers : {'Content-Type':'application/json'},
                    body: values
                }) 
                .then(res => res.json())
                .then(data =>{
                    if (data.status === "success") {
                        localStorage.setItem("isLoggedin",true)
                        localStorage.setItem("toget",values.Email)
                        window.location.assign("/admin")          
                    }
                })
            } else {
                alert("invalid code")
            }
        }

    }
    return (<div>
        
        
        <nav className="authnav">
        <Link to="/" className="pt-2">Calibre</Link>
    </nav>
        <div className=" container text-center" style={{ width: "100vw", height: "95vh", paddingTop:"20vh", display: "block" }}>
            <h2>We just emailed you a verification code</h2>
            <input type="tel" value={code} name="code" style={{}} className="rounded border py-2 px-3"
            placeholder="Enter code" onChange={(event) => { setCode(event.target.value) }} /> <br />
            <button onClick={()=>{toSend()}} className="mt-4 p-2 w-25 btn border">send</button>
            <div className=" p-2">
            {min}:{sec}
            </div>
        </div>
    </div>
    );
}

export default Confrim;