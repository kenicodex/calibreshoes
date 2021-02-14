import React, { useEffect, useState } from 'react';

function Items(props) {
    const [state, setstate] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/items',{
            method:'get',
            // headers: { 'Content-Type': 'application/json' },
        })
        .then(res => res.text())
        .then(stat => alert(stat))
    }, [])
    return (
        <div>
            items
            {state}
        </div>
    );
}

export default Items;