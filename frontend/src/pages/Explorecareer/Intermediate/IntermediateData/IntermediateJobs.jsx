import React from 'react'
import JobContentRender from '../../component/JobContentRender'
// import useParams from 'react-router-dom'
import { useParams } from 'react-router-dom'
function IntermediateJobs() {
  const { id } = useParams();
  /**
   *  Applying id based rendering now..
   *
   */
  return (
    <div>
      <JobContentRender id={id} />
    </div>
  )
}

export default IntermediateJobs