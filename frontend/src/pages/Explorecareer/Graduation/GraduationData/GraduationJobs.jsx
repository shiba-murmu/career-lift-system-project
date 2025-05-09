import React from 'react'
import JobContentRender from '../../component/JobContentRender'
import { useParams } from 'react-router-dom'
function GraduationJobs() {
  const { id } = useParams();
  return (
    <div>
      <JobContentRender id={id} />
    </div>
  )
}

export default GraduationJobs
