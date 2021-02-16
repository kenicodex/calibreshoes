import React, { Fragment, useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './CSS/Cart.css'
function Cart(props) {
    // let arr = ['shop.jpg', 'wl3.jpg', 'wl2.jpg', 'wl.jpg', 'diff.jpg', 'inovate.jpg']
    useEffect(() => {
        setShoppingcart(JSON.parse(sessionStorage.getItem("cart")))
        
    }, [])
    const [shoppingcart, setShoppingcart] = useState(JSON.parse(sessionStorage.getItem("cart")))
    const Itemsincart=()=>{
        return(<Fragment>
            
            <div className="h2 jumbotron m-auto position-relative">
                    Your have {shoppingcart.length} items in your cart
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
        // const style = {left:styles.left , width:styles.width, top:"50%", padding:"10px"}
        return(
            <div className="position-fixed text-center rounded-lg h2 p-3 border border-danger text-danger empty">
                <span style={{fontSize:"40px"}}>😟</span>
                <br/>
                You Cart is empty 
                <br/>
                <button className="btn btn-info border border-info">Go back to store</button>
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
            <div className='container position-relative m-auto' style={{ top: "5vh" }}>
                <Render />
            </div>
        </div>
    );
}

export default Cart;