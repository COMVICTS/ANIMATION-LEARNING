import React from 'react'
import "../styles/Overlay.css"
import { gsap, Power4, Expo } from 'gsap'


function Overlay() {

    React.useEffect(function(){

        let tl = gsap.timeline({defaults: {ease: "power4.inOut"}})

        tl.to(".text", {clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", opacity: 1, y: 0, duration: 3 })
    
        tl.to(".overlay-top", {clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)", stagger: 0.4})

        tl.to(".overlay-bottom", {clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)", duration: 1.6,  ease: "expo.inOut"})


    },[])
    




  return (
    <div className= "container">
    <div className = "overlay-top one"></div>
    <div className = "overlay-top two"></div>
    <div className = "overlay-top three"></div>
    <div className = "overlay-bottom four"></div>
    
    
    </div>
  )
}

export default Overlay