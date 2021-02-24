import React, { useEffect, useState } from 'react';
import Add from './Add';
import './Admin.css'
import Products from './Products';

function Admin(props) {
    const [acct, setAcct] = useState({})
    useEffect(()=>{
        fetch("https://kennyserver.herokuapp.com/calibreauth/logged").then(res=>res.json()).then(data =>{
            if (!data.log) {
                window.location.assign('/login')
            }
        })
        if (!localStorage.getItem("isLoggedin")) {
            window.location.assign("/login")
        }else{
            fetch("https://kennyserver.herokuapp.com/calibreauth/user",{
                method:"get",
            })
            .then(res => res.json())
            .then(data => {
                setAcct(data.user[0])
            })
            
        }
    },[])
    return (
        <div>
            <div className="container border-left border-right">
                <div className='jumbotron mt-2 h1'>
                    Welcome {acct.Firstname}
                    {/* Welcome test {acct.map(({Firstname})=>{
                        return <p>{Firstname}</p>
                    })} */}
                     <button className="btn h6 float-right border"
                      onClick={()=>{localStorage.setItem("isLoggedin",false)}}>logout</button>
                </div>
                
                <Add /> 
                <hr/>
                <Products />
            </div>
        </div>
    );
}

export default Admin;