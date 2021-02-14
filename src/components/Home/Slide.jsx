import React, { useEffect, useState } from 'react';

function Slide(props) {
    const {width, pics,height} = props
    const slides = pics || []
    const [letf, setletf] = useState([])
    const [num, setnum] = useState([])
    let path = process.env.PUBLIC_URL + "/images/"
    useEffect(() => {
        let numb = [];
        let str = []
        var starttransition = document.getElementsByClassName("slides")
        for (let i = 0; i < slides.length; i++) {
            numb[i] = i * 100
            str[i] = numb[i].toString() + "%"
            starttransition[i].style.transition = "left 1s ease-in-out"
        }
        setnum(numb)
        setletf(str)
        // happy()
    }, [slides.length])
    
    const move = () => {
        let numb = [];
        let str = [];
        var starttransition = document.getElementsByClassName("slides")
        for (let i = 0; i < slides.length; i++) {
            numb[i] = num[i]-100
            str[i] = numb[i].toString() + "%"
            starttransition[i].style.transition = "left 1s ease-in-out"
        }
        if(numb[numb.length-1] === 0){
            var stoptransition = document.getElementsByClassName("slides")
            for (let i = 0; i < slides.length; i++) {
                numb[i] = i * 100
                str[i] = numb[i].toString() + "%"
                stoptransition[i].style.transition = "left ease-out"
            }
            setnum(numb)
            setletf(str)
        }else{
            setnum(numb)
            setletf(str)
        }
    }
    const goLeft=()=>{
        let numb = [];
        let str = [];
        var starttransition = document.getElementsByClassName("slides")
        for (let i = 0; i < slides.length; i++) {
            numb[i] = num[i]+100
            str[i] = numb[i].toString() + "%"
            starttransition[i].style.transition = "left 1s ease-in-out"
        }
        if(numb[0] === 0){
            var stoptransition = document.getElementsByClassName("slides")
            for (let i = 0; i < slides.length; i++) {
                numb[i] = i / 100
                str[i] = numb[i].toString() + "%"
                stoptransition[i].style.transition = "left ease-out"
            }
            setnum(numb)
            setletf(str)
        }else{
            setnum(numb)
            setletf(str)
        }
    }
    const dots = {
        opacity : ".1" ,backgroundImage:"inherit",backgroundColor:"red"
    }
    return (
        <div className={"d-flex position-relative"} style={{left:"0", width:width||"600px", height:height|| "500px", overflow: "hidden" }}>
            {slides.map((img, index) => {
                return (
                    <div 
                    style={{ width: width, height: "100%", left: letf[index]}}
                         id={index + "id"} 
                        className="border position-absolute slides">
                        <div className='position-absolute w-25 h-100' onClick={() => { move(index) }}
                         style={{right:"0",zIndex:"100",opacity:"0"}}></div>
                        <div className='position-absolute w-25 h-100' onClick={() => { goLeft(index) }} 
                        style={{left:"0",zIndex:"100",opacity:"0"}}></div>
                         <img src={path+ img} height="100%" width={width} alt="" />

                         <i className='fa fa-arrow-left leftarrow arr'></i>
                        <i className='fa fa-arrow-right rightarrow arr'></i>
                        <div style={dots}>{slides.map((x => {
                            return <i className='fa fa-circle'></i>
                        }))}</div>
                    </div>
                )
            })}
        </div>
    );
}

export default Slide;