import React, { useEffect } from 'react';
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
    useEffect(() => {
        fetch('http://localhost:3000/users', {
            method: "post",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({ "name": "whatever" })
        })
            .then(res => res.json())
            .then(data => alert(data.info))
    }, [])
    const rand = () => {
        return arr[Math.floor((Math.random() * arr.length))]
    }
    let path = process.env.PUBLIC_URL + '/images/'
    let arr = ['shop.jpg', 'wl3.jpg', 'wl2.jpg', 'wl.jpg', 'diff.jpg', 'inovate.jpg']
    return (
        <div className='body position-relative'>
            <div className='darken' style={{ backgroundImage: `url(${path + 'shoebg.jpg'})` }}></div>
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
                    <div className='product bg-light'>
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
            <footer className='text-light' style={{bottom:"0"}}>
                <span className="position-absolute">© copyright kennyCode</span>
            </footer>
        </div>
    );
}
export default Home;