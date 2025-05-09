import React from "react";
import { useParams } from "react-router-dom";

function JobSinglePage() {
  const { id, postId } = useParams(); // Get the ID from the URL parameters
  return (
    <>
      <div>
        <h1>My id is : {id}</h1>
        {/* Main Card Container */}
        <h1 className="text-xl font-bold">Job Details for Post ID: {postId}</h1>
        {/* Additional job details can be added here */}
      </div>
    </>
  );
}

export default JobSinglePage;
