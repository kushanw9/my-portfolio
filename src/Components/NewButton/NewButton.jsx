import React from 'react'
import './newButton.css'
import 'animate.css';

export default function NewButton(props) {
  return (
   
    <div class="btnsContainer">

       <button className='btnHome'>{props.text}</button>

    </div>
  )
}
