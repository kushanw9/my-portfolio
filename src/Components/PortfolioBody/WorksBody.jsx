import React from 'react'
import Type1 from '../ProjectBoxes/Type1/Type1'
import Type2 from '../ProjectBoxes/Type2/Type2'
import './worksBody.css'

export default function WorksBody() {
  return (
    <div className='worksBodyContainer'>

        
        <div className="projectsContainer">
          <div className="portfolioTitleBox">

              <span className="title">
                  PORTFOLIO
              </span>
              
          </div>

            <Type1 text="SOURCE" projectTitle="sellTec" imageSource="/images/projects/1-pos.png" link="https://github.com/kushanw9?tab=repositories" techStack="Spring boot | MySQL | Maven | Hibernate | Bootstrap | Html" description="A web application designed for monitoring and controlling transactions in a retail store. It mainly focuses on adding new customers, managing inventory, updating product information, searching for products and customers, and providing the ability to process sales and returns. Emphasis is placed on effectively managing multi-user environments, including transaction handling."/>
            <Type2 text="SOURCE" projectTitle="To-Do-App" imageSource="/images/projects/1-pos.png" link="https://github.com/kushanw9/simple-task-app" techStack="TypeScript | NodeJs | Express | Mysql | Angular" description="This application provides a user-friendly interface that enables users to efficiently manage multiple tasks. Users can easily create, edit, and delete tasks and track their progress."/>
            <Type1 text="SOURCE" projectTitle="Imitari" imageSource="/images/projects/2-imitari.png" link="https://github.com/kushanw9/Wallpaper-gallery-app" techStack="Java | Spring Framework | JavaScript | HTML 5 | jQuery AJAX" description="This is a user-friendly web application designed as a public wallpaper gallery. The application allows users to easily download their desired images and also provides an option to upload images. With its fully responsive design, users can conveniently access and use the application on any device."/>
            <Type2 text="SOURCE" projectTitle="Zombie Rival" imageSource="/images/projects/3-Zombie Rival.png" link="https://github.com/kushanw9/simple-task-app" techStack="HTML 5 | CSS 3 | JavaScript" description="Experience a fun and interactive mini-game built with HTML, CSS,and JavaScript. Play and enjoy while practicing JavaScript skills,exploring frontend technologies, and learning about event handling and responsive web design."/>
            <Type1 text="SOURCE" projectTitle="Smart SIS" imageSource="/images/projects/4-Smart SIS.png" link="https://github.com/kushanw9/student-management-system" techStack="JavaSE | MySQl | JavaFX | Maven" description="This student information system is focused on essential functionalities for users, such as adding,modifying, and searching student details in a MySQL database. It serves as a valuable platform to practice JavaSE programming skills and gain insights into working with databases."/>
           
          </div>

    </div>
  )
}
