import React, { useEffect, useState } from 'react';
import Delete from './Delete';
import Edit from './Edit';

function Products(props) {
    const [prod, setProd] = useState([])
    let online = "https://kennyserver.herokuapp.com"
    //  local = "http://localhost:5000";
    useEffect(() => {
        fetch(online+"/calibre/items", {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ seller: props.seller })
        })
            .then(res => res.json())
            .then(data => setProd(data.message))
    }, [props.seller,online])
    return (
        <div >
            <h3 style={{ marginLeft: "1%" }} >Your Products</h3>
            {prod.map(({ name, image }) => {
                return (
                    <div className="col-lg-2 col-md-4 col-sm-6 bg-light border rounded-top px-0" style={{ marginLeft: "1%" }} >
                        <div className="bg-white" style={{ height: "150px" }}>
                        </div>
                        <div className="position-relative">
                            <div>
                                {(image.split(",")).map(x => {
                                    return (
                                        <p>
                                            <img src="C:/Users/PC/Desktop/Works/jobs/calibre/ServerAPIs/public/images/1614357191273-{EE84ECD9-D5FF-4329-9F88-5EA07409946E}.png.jpg"
                                             alt="" width="100%" height="100%"/> 
                                        </p>
                                    )
                                })}
                            </div>
                            <div>
                                {name}
                            </div>
                        </div>
                        <div className="d-flex w-100">
                            <Edit id="edit" />
                            <Delete id="delete" />
                        </div>
                    </div>)
            })}
        </div>
    );
}

export default Products;