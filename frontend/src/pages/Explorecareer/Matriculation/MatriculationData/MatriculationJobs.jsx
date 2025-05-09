import React from 'react'
import JobContentRender from '../../component/JobContentRender'
// import useParams from 'react-router-dom'
import { useParams } from 'react-router-dom'
function MatriculationJobs() {
  const { id } = useParams();
  return (
    <div>
      <JobContentRender id={id} />
    </div>
  )
}

export default MatriculationJobs