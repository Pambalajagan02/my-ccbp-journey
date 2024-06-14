// Write your code here
import {Chrono} from 'react-chrono'
import './index.css'
import CourseItem from '../CourseTimelineCard'
import ProjectItem from '../ProjectTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props
  const items = timelineItemsList.map(each => {
    const obj = {
      title: each.title,
    }
    return obj
  })
  return (
    <div className="app-container">
      <h1 className="ccbp-heading">
        MY JOURNEY OF <br />
        CCBP 4.0
      </h1>
      <Chrono
        mode="VERTICAL_ALTERNATING"
        items={items}
        theme={{
          secondary: 'white',
        }}
      >
        {timelineItemsList.map(each => {
          if (each.categoryId === 'COURSE') {
            return <CourseItem citem={each} key={each.id} />
          }
          return <ProjectItem pitem={each} key={each.id} />
        })}
      </Chrono>
    </div>
  )
}
export default TimelineView
