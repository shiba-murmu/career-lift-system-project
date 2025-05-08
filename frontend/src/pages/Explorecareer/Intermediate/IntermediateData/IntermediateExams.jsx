import React from 'react'
import { useParams } from 'react-router-dom'
import ExamExplore from '../../component/ExamExplore'
function IntermediateExams() {
  const { id } = useParams();
  return (
    <>
      <ExamExplore id={id} />
    </>
  )
}

export default IntermediateExams