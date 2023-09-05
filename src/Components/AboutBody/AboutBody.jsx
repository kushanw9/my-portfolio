import React from 'react'
import './aboutBody.css'
import Newbutton from '../NewButton/NewButton';
import { Link } from 'react-router-dom';

export default function AboutBody() {
  return (
    <div className='aboutBodyBox'>
      <div className="aboutMeContainer">
        <div className="aboutMeTitle">
            <span className="aboutMe">About Me</span>
        </div>
        
        <div className="aboutMeDescription">
            I am a Full-stack developer and UI/UX designer with a great passion for building things with code.
            <br />
            <br />

            The main area of my expertise is in web technologies.I have a solid foundation in the MERN stack(MongoDB,Express,React and Node).For Back-end development I mainly use NodeJS or Java(J2EE,Spring and SpringBoot). I also use TypeScript and Hibernate in my projects.
            <br /><br />
            I'm currently working on web technologies and in the process of learning Angular and cloud technologies.


        </div>
        <div className="btnContainerAtAbout">
            <Link className='text-deco' to={"/works"}><Newbutton text="View Projects"/></Link>
            <a className='text-deco' href='https://github.com/kushanw9?tab=repositories'><Newbutton text="All Projects"/></a>

        </div>
        
      </div>
      <div className="techStackContainer">
            <img src="/images/tech-stack/1.png" alt="" className="techStack" />
            <img src="/images/tech-stack/2.png" alt="" className="techStack" />
            <img src="/images/tech-stack/3.png" alt="" className="techStack" />
            <img src="/images/tech-stack/4.png" alt="" className="techStack" />
            <img src="/images/tech-stack/5.png" alt="" className="techStack" />
            <img src="/images/tech-stack/6.png" alt="" className="techStack" />
            <img src="/images/tech-stack/7.png" alt="" className="techStack" />
            <img src="/images/tech-stack/8.png" alt="" className="techStack" />
            <img src="/images/tech-stack/9.png" alt="" className="techStack" />
            <img src="/images/tech-stack/10.png" alt="" className="techStack" />
            <img src="/images/tech-stack/11.png" alt="" className="techStack" />
            <img src="/images/tech-stack/12.png" alt="" className="techStack node" />
            <img src="/images/tech-stack/13.png" alt="" className="techStack" />
            <img src="/images/tech-stack/14.png" alt="" className="techStack" />
            <img src="/images/tech-stack/15.png" alt="" className="techStack" />
            <img src="/images/tech-stack/16.png" alt="" className="techStack" />
            <img src="/images/tech-stack/17.jpg" alt="" className="techStack" />
            <img src="/images/tech-stack/18.png" alt="" className="techStack" />
            <img src="/images/tech-stack/19.png" alt="" className="techStack" />
            <img src="/images/tech-stack/20.png" alt="" className="techStack" />
            <img src="/images/tech-stack/21.png" alt="" className="techStack" />
            <img src="/images/tech-stack/22.png" alt="" className="techStack" />
            <img src="/images/tech-stack/23.png" alt="" className="techStack" />
            <img src="/images/tech-stack/24.png" alt="" className="techStack" />
            <img src="/images/tech-stack/25.png" alt="" className="techStack" />
            
        </div>
    </div>
  )
}
