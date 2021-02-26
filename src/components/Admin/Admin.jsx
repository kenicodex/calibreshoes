import React, { useEffect, useState } from 'react';
import Add from './Add';
import './Admin.css'
import Products from './Products';

function Admin(props) {
    const [acct, setAcct] = useState({})
    let online = "https://kennyserver.herokuapp.com", local = "http://localhost:5000";
    useEffect(()=>{
        fetch(online+"/calibreauth/logged").then(res=>res.json()).then(data =>{
            if (!data.log) {
                window.location.assign('/login')
            }
        })
        if (!localStorage.getItem("isLoggedin")) {
            window.location.assign("/login")
        }else{
            fetch(online+"/calibreauth/user",{
                method:"get",
            })
            .then(res => res.json())
            .then(data => {
                setAcct(data.user)
            })
            
        }
    },[online,local])
    const logout =()=>{
        var con =  window.confirm("Are you sure you want to log out?")
        if(con){
            fetch(online + "/calibreauth/logout",{
                method :'post'
            })
            .then(res => res.json())
            .then(data => {
                if(data.logout){
                    window.location.assign("/login")
                }
            })
        }
    }
    return (
        <div>
            <div className="container border-left border-right">
                <div className='jumbotron mt-2 h1'>
                    Welcome {acct.Firstname}
                     <button className="btn h6 float-right border"
                      onClick={()=>{logout()}}>logout</button>
                      <div className="h6">
                            Start selling Products With us
                      </div>
                </div>
                <div>
                    <h3>Details : </h3>
                    Name : {acct.Firstname} {acct.Lastname} <br/>
                    Email : {acct.Email} <br/>
                    Phone  : {acct.Phone} <br/>

                </div>
                
                <Add seller={acct.id} /> 
                <hr/>
                <Products seller={acct.id} />
            </div>
        </div>
    );
}
export default Admin;