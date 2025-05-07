import React from 'react'
import HigherEducation from '../../component/HigherEducation'
import { useParams } from 'react-router-dom'
function MatriculationHigherCourses() {
  const { id } = useParams()
  return (
    <>
      <HigherEducation id={id} />
    </>
  )
}

export default MatriculationHigherCourses