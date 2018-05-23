import React from 'react'
import './hamburger.css'
 const Hamburger = (props) => {
  return (
      <button
        onClick={props.showNav} 
        
          className={props.isActive ? "hamburger hamburger--collapse is-active" :"hamburger hamburger--collapse"}
        type="button">
        <span className="hamburger-box">
          <span className="hamburger-inner"/>
        </span>
      </button>)
    
}

export default Hamburger; 