import React from 'react'
import HigherEducation from '../../component/HigherEducation'
import { useParams } from 'react-router-dom'
// import CareerSideBar from '../../CareerSideBar'
function GraduationHigherCourses() {
  const { id } = useParams()
  return (
    <>
      <HigherEducation id={id} />
    </>
  )
}

export default GraduationHigherCourses