import React from 'react'
import { useParams } from 'react-router-dom'
function EducationSinglePage() {
    const { id, postId } = useParams()
    return (
        <div>
            <h1>Education Details for ID: {id} and Post ID: {postId}</h1>
        </div>
    )
}

export default EducationSinglePage