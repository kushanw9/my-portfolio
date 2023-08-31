import React from 'react'
import './homeBody.css'
// import Button from 'react-bootstrap/Button';
import Newbutton from '../NewButton/NewButton';

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
            <Newbutton/>
            <Newbutton/>
           
                        
        </div>
        

      </div>
      <div className="imageContainer">
            <img src="/images/mainImage.jpeg" alt="" className="mainImage" />
      </div>
      
    </div>
  )
}
