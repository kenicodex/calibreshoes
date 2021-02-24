// export const isLoggedin = function name(params) {
//      let x = 
//     alert(x.log)
// }
import React, { useEffect } from 'react';

function IsLoggedin(props) {
    const [bool, setBool] = React.useState(false)
    useEffect(()=>{
        fetch("http://localhost:5000/calibreauth/logged")
        .then(res => res.json())
        .then(data => { 
            alert(data.log)
            setBool(data.log)
        })
    })
    return bool
}

export default IsLoggedin;