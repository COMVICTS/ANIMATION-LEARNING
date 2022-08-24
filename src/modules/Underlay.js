import React from 'react'
import "../styles/Underlay.css"
import { MdOutlineMenu } from "react-icons/md"

function Underlay() {
  return (
    <div className= "underlay">
        <div className = "nav">
            <p className = "logo">COMVICTS</p>
            <div className = "icon"> <MdOutlineMenu size = '30px'/> </div>
        </div>
        <div className= "hero">
        <div className = "text">Creating unique brands is <br></br> what we do . </div>
        </div>
    </div>
  )
}

export default Underlay