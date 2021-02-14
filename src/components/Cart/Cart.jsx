import React, { Fragment, useEffect, useState } from 'react';
import Slide from '../Home/Slide';
import Navbar from '../Navbar/Navbar';
import './CSS/Cart.css'
function Cart(props) {
    let arr = ['shop.jpg', 'wl3.jpg', 'wl2.jpg', 'wl.jpg', 'diff.jpg', 'inovate.jpg']
    useEffect(() => {
        setShoppingcart(JSON.parse(sessionStorage.getItem("cart")))
        if(sessionStorage.getItem("cart") == null){
            // window.location.assign("/item")
        }
    }, [])
    const [shoppingcart, setShoppingcart] = useState(JSON.parse(sessionStorage.getItem("cart")))
    const Itemsincart=()=>{
        return(<Fragment>
            
            <div className="h2 jumbotron m-auto position-relative">
                    {/* Your have {shoppingcart.length} items in your cart */}

                    <span className="position-absolute h4" style={{ right: "2%" }}>clear</span>
                </div>
            {shoppingcart.map(({name, img, price, desc},index) => {
                    return (
                        <div key={index}>
                            <div className="carted rounded d-flex mt-1 bg-secondary text-white" style={{ height: "100px" }}>
                                <img src="" alt="" className="col-3" />
                                <div className="about col-5 h3">
                                    price    {price} <br />
                                    {/* <button className="btn border text-white btn-outline-dark">add</button> */}
                                </div>
                                <div className="col-4 h4">
                                    {name}
                                </div>
                            </div>
                        </div>
                    )
                })}</Fragment>
        )
    }
    const Empty =()=>{
        const style = {left:"auto", top:"50%", padding:"20px"}
        return(
            <div className="position-fixed text-center h2 border border-danger text-danger" style={style}>
                You Cart is empt
            </div>
        )
    }
    const Render=()=>{
        if (shoppingcart === null) {
            return (
                <Empty />
            )
        } else {
            return <Itemsincart/>
        }
    }
    return (
        <div className='w-100 position-relative '>
            <Navbar color="black" />
            <div className='col-lg-9 position-relative m-auto col-sm-12' style={{ top: "5vh" }}>
                <Render />
                <Slide width="500px" pics={arr} height="400px" className="rounded" />
            </div>
        </div>
    );
}

export default Cart;