import React from 'react'
import './homeBody.css'
// import Button from 'react-bootstrap/Button';
import Newbutton from '../NewButton/NewButton';
import { Link } from 'react-router-dom';

export default function HomeBody() {
  return (
    <div className='homeBodyContainer'>
      <div className="detailBox">
      
        <div className="namePrefixContainer">
        
        <div className="namePrefix">
            <span>It's me</span>
        </div>
        </div>
        
        <div className="nameTitle">
            KUSHAN WEERARATHNE
        </div>
        <div className="profession">
            FULL - STACK  DEVELOPER
        </div>
        <div className="subDetails">
            Full-stack Developer | Web Developer | Software Engineer
        </div>

        <div className="buttonsContainer">
          <Link className='text-deco' to="/works"><Newbutton text="My Works"/></Link>
          <Link className='text-deco' to="/about"><Newbutton text="About Me"/></Link>
           
                        
        </div>
        

      </div>
      <div className="imageContainer">
            <img src="/images/mainImage.jpeg" alt="" className="mainImage" />
      </div>
      
    </div>
  )
}
