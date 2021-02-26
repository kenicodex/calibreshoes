import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './auth.css'

function Confrim(props) {
    const [code, setCode] = useState("")
    const [sec, setSec] = useState(59)
    const [min, setMin] = useState(1)
    const [msg, setMsg] = useState("")
    let online = "https://kennyserver.herokuapp.com"
    //  local = "http://localhost:5000";
     

    useEffect(() => {
        fetch(online + "/calibreauth/logged").then(res => res.json()).then(data => {
            if (data.log) {
                window.location.assign('/admin')
            }
        })
        let cle = setInterval(() => setSec(r => r - 1) , 1000);
        setTimeout(() => {setMin(0); setSec(59);} , 60000);
        setTimeout(() => clearInterval(cle), 120000)
    }, [online])
    // const resend =()=>{
    //     let code = Math.floor(Math.random() * 1000000);
    //     sessionStorage.setItem("unknown",code)
    // }
    const Msg = (props) => {
        let color;
        if (props.status === "success") { color = "success" } else if (props.status === "info") { color = "info" } else if (props.status === "error") { color = "danger" }
        return <div className={`border border-${color} text-center w-auto mx-5 rounded p-2 text-${color}`}>{props.message}</div>
    }
    const toSend = () => {
        if (code === "") {
            alert("enter the code please");
        } else {
            fetch(online + "/calibreauth/confirm", {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ code: code })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.status === "success") {
                        window.location.assign("/admin")
                    } else if (data.message === "Invalid code") {
                        setMsg(<Msg message={data.message} status={data.status}/>)
                    }else{
                        window.location.assign('/signup')
                    }
                })
        }
    }
    return (<div>


        <nav className="authnav">
            <Link to="/" className="pt-2">Calibre</Link>
        </nav>
        <div className=" container text-center" style={{ width: "100vw", height: "95vh", paddingTop: "20vh", display: "block" }}>
            <h2>We just emailed you a verification code</h2>
            {msg}
            <input type="tel" value={code} name="code" style={{}} className="rounded border py-2 px-3"
                placeholder="Enter code" onChange={(event) => { setCode(event.target.value) }} /> <br />
            <button onClick={() => { toSend() }} className="mt-4 p-2 w-25 btn border">send</button>
            <div className=" p-2">
                {min}:{sec}
            </div>
        </div>
    </div>
    );
}

export default Confrim;