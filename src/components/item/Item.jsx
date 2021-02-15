import React, { useEffect, useRef, useState } from 'react';
import { add } from '../Cart/store';
import { products } from '../Home/products';
import Navbar from '../Navbar/Navbar';
import './css/item.css'

function Item(props) {
    let path = process.env.PUBLIC_URL + '/images/'
    let href = window.location.href
    let id = href.substring(href.indexOf("=") + 1, href.lastIndexOf("?s"))
    let pic = href.substring(href.lastIndexOf("=") + 1)
    const [query, setQuery] = useState({ id: id, pic: pic })
    const [bought, setBought] = useState(false)
    const [disp, setDisp] = useState({opac:"0",rit:"-50%"})
    const btn = useRef("")
    useEffect(() => {
        setQuery({ id: id, pic: pic })
        document.title = " Item | KennyCode"
        if (sessionStorage.getItem(`carted-item${id}`) !== null) {
            setBought(true)
            btn.current.click = function(){
                window.location.assign("/cart")
            }
        }
    }, [id, pic])
    const adding=(e)=>{
        setDisp({opac:"1",rit:"0"});
         setBought(true); add(products[query.id],query.id)
        setTimeout(() => {
            setDisp({opac:"0",rit:"-50%"})
        }, 3000);
        if(btn.current.innerHTML !== "Add to cart"){
            window.location.assign("/cart")
        }
    }
    const { name, price } = products[query.id];
    return (
        <div className="bg-light">
            <Navbar color="black" />
            <div className="itempage bg-light container">
                <div className="position-fixed w-50 bg-success text-white px-2 pt-5 h4 sl text-center" 
                style={{top:"60px",height:"100px",right:disp.rit,opacity:disp.opac,transition:"3s right",zIndex:"100"}}>
                    Item successfully added 
                </div>
                <div className="picture rounded">
                    <img src={path + query.pic} width="100%" height="100%" alt="" />
                </div>
                <div className="details rounded-bottom text-dark bg-white">
                    <div className="p-3">
                        <h2>{name} </h2> {query.pic}
                        <h3><span>&#x20A6;</span>{price}</h3>
                    Delivery info :
                    </div>
                    {/* <div className="mate d-flex">
                        <button className="cartbtn">view cart and checkout</button>
                        <button  className="cartbtn"> </button>
                    </div> */}
                    <button className="w-50 border btncart" ref={btn}
                        style={{ backgroundColor: bought ? "green" : "none", color: bought ? "white" : "grey", fontSize:"13px" }} 
                        onClick={(event) => { adding(event) }}>
                        {bought ? "View cart and checkout" : "Add to cart"}</button>
                </div>
            </div>
        </div>
    );
}

export default Item;