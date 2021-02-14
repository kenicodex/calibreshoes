import React, { useState } from 'react';

function Search(props) {
    const [key, setKey] = useState('')
    const arr = ['meme', 'hayy', 'writer', 'write', 'search', 'six']
    const [result, setResult] = useState([])
    const effect = (e) => {
        if (key !== '') {
            let vals = []
            arr.forEach((element, index) => {
                let str = element.toString()
                if (str.includes(e.target.value, 0)) {
                    vals.push(element)
                }
            });
            setResult(vals)
        }
    }
    return (
        <div className='input'>
            <button onClick={()=>{effect()}}><i className='fa fa-search'></i> </button>
            <input type="text" placeholder='Search...' value={key} onChange={(event) => { effect(event) ;
            setKey(event.target.value)
            }} /> <br />
            <div className='position-relative bg-secondary text-dark p-2' style={{ height: '250px', zIndex: '1000', display:"none" }} >
                {result.map(g => {
                    return (
                        <p>{g}</p>
                    )
                })}
            </div>
        </div>
    )
}

export default Search;