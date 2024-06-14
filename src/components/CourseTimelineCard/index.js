// Write your code here
import './index.css'

import {AiFillClockCircle} from 'react-icons/ai'

const CourseItem = props => {
  const {citem} = props
  const {courseTitle, description, tagsList, duration} = citem
  return (
    <div className="course-container">
      <div className="static-con">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="clock-container-mobile">
          <AiFillClockCircle className="icon" />
          <p className="duration">{duration}</p>
        </div>
        <p>{description}</p>
        <ul className="ul-container">
          {tagsList.map(each => (
            <li key={each.id} className="list-container">
              <p className="name-para">{each.name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="clock-container">
        <AiFillClockCircle className="icon" />
        <p className="duration">{duration}</p>
      </div>
    </div>
  )
}
export default CourseItem
