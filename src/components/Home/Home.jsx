import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './css/style.css'
import './css/HomeMobile.css';
import { cate, products } from './products';
import Header from './Header';
import { Link } from 'react-router-dom';
import Slide from './Slide';
function Home(props) {
    const locate = (id, pic) => {
        localStorage.setItem("item", JSON.stringify({ id: id, img: pic }))
    }
    const [chill, setChill] = useState("block")
    useEffect(() => {
        fetch('https://kennyserver.herokuapp.com/users', {
            method: "post",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({ "name": "whatever" })
        })
            .then(res => res.json())
            .then(data => {
                if (data.info === "loaded") {
                    setChill("none"); 
                }
            })
    }, [])
    const rand = () => {
        return arr[Math.floor((Math.random() * arr.length))]
    }
    let path = process.env.PUBLIC_URL + '/images/'
    let arr = ['shop.jpg', 'wl3.jpg', 'wl2.jpg', 'wl.jpg', 'diff.jpg', 'inovate.jpg']
    return (
        <div className='body position-relative'> 
        <div className="position-fixed bg-dark text-center" style={{width:"100vw",height:'100vh',zIndex:"1000",display:chill}}>
            <div className="h1 position-relative text-light" style={{top:"40%"}}>EasyShoppings </div>
        </div>
            <div className='darken' style={{ backgroundImage: `url(${path + 'nbg.jpg'})` }}></div>
            <Navbar />
            <Header />
            <main className='bg-light h-auto'>
                <div className='xyz container'>
                    <div className='border border-success aaa'>
                        <div className="a-head ff">Categories </div>
                        <div className="cate">
                            {cate.map(({ sex, link }) => {
                                return (<div className="eachcate">
                                    {sex}
                                </div>)
                            })}
                        </div>

                    </div>
                    <div className="bbb position-relative">
                        <Slide height="100%" width="100%" pics={arr} />
                    </div>
                    <div className="eee">
                        <span style={{ color: "green" }}>Q</span>uick
                        <span style={{ color: "black" }}> D</span>elivery
                    </div> 
                    <div className='product bg-light' id="products">
                        {products.map(({ name, img, desc, price }, index) => {
                            return (
                                <div className="h-auto item" onClick={() => { locate(index, rand()) }}>
                                    <Link  to={"/item?id=" + index + "?srcpathquery?=" + rand()} className="rounded-lg prod" >
                                        <img src={path + rand()} alt="" width="100%" height="70%" />
                                        <div className="desc text-dark" style={{ height: "30%" }}>
                                            <span className='name'>{name}</span> <br />
                                            <span className="price"><span>&#x20A6;</span>{price}</span>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                    <div className="ddd" >
                        <div className='ddd1'>
                        </div>
                        <div className='ddd2'>
                        </div>
                    </div>
                </div>
            </main>
            <footer className='text-light bg-dark ' style={{bottom:"0",height:'150%'}}>
                <div className="d-lg-flex w-100">                        
                    <div className="about pb-4 col-lg-6 p-2 h3">
                    EasyShopping is an online shopping site where anyone with any type of business can affordably advertise
                    </div>
                    <div className="contact pb-4 px-3 col-lg-6 ">
                        <h3>Contact us on any of these :</h3>
                        Phone : 08085503290 <br/>
                        Email : kehindesalaudeen222@gmail.com <br/>
                        facebook : pending <br/>
                        instagram : pending <br/>
                        whatsapp : pending
                    </div>
                </div>
                <span className="position-absolute">© copyright kennyCode</span>
            </footer>
        </div>
    );
}
export default Home;