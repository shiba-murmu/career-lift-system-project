import React from "react";
import { useParams } from "react-router-dom";
// import ExamExplore from ''
import ExamExplore from "../../component/ExamExplore";

function GraduationExams() {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <ExamExplore id={id} />
    </>
  );
}

export default GraduationExams;
