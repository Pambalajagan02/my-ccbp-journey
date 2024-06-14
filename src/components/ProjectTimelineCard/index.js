// Write your code here

import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectItem = props => {
  const {pitem} = props
  const {projectTitle, description, imageUrl, projectUrl} = pitem
  const {duration, categoryId} = pitem
  return (
    <div className="project-container">
      <img src={imageUrl} className="img-style" alt={categoryId} />
      <div className="project-flex-con">
        <div>
          <h1 className="projectTitle">{projectTitle}</h1>
          <div className="clock-container-mobile1">
            <AiFillCalendar className="icon1" />
            <p className="duration1">{duration}</p>
          </div>
          <p>{description}</p>
          <a href={projectUrl} className="ancor">
            visit
          </a>
        </div>
        <div className="clock-container1">
          <AiFillCalendar className="icon1" />
          <p className="duration1">{duration}</p>
        </div>
      </div>
    </div>
  )
}
export default ProjectItem
