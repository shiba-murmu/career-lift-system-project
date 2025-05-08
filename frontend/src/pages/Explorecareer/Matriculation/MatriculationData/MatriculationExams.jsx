import React from "react";
import { useParams } from "react-router-dom";
import ExamExplore from "../../component/ExamExplore";
function MatriculationExams() {
  const { id } = useParams();
  return (
    <>
      <ExamExplore id={id} />
    </>
  );
}

export default MatriculationExams;
