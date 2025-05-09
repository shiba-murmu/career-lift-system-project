import React from 'react'
import { useParams } from 'react-router-dom';
function ExamSinglePage() {
  const { id , postId} = useParams()
  return (
    <>
      <h1>My id is : {id} and its post ID is : {postId}</h1>
    </>
  )
}

export default ExamSinglePage