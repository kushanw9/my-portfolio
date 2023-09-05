import React from 'react'
import NewButton from '../../NewButton/NewButton'
import './type1.css'


export default function Type1(props) {
  return (

      <div className="project d-flex flex-column align-items-center">
            <div className="projectTitle">
                <span>{props.projectTitle}</span>
            </div>
            <div className="projectContainer d-flex">
                <div className="imageContainerType1">
                    <img src={props.imageSource} alt="" className="projectImage" />
                </div>
                <div className="projectDescription">
                  <div className="description">
                      {props.description}
                      </div>
                  <div className="usedTech">
                      {props.techStack}
                  </div>
                  <div className="sourceButton">
                      <a className='text-deco' href={props.link}><NewButton text={props.text}/></a>
                  </div>

                </div>

            
            </div>
    </div>
   
  )
}
