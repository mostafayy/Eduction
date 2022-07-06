import React from 'react'
import Back from '../common/back/Back'
import CoursesCard from './CourseCard'
import OnlineCourses from './OnlineCourses'

const CourseHome = () => {
  return (
    <div>
<Back title='Explore Courses'/>
<div className="margin"></div>
<CoursesCard/>
<OnlineCourses/>
    </div>
  )
}

export default CourseHome