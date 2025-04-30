import React from "react";

function GraduationExams() {

  return (
   <>
      <div className="p-2">
        <h1 className="text-2xl font-bold text-center mb-4">Graduation Exams</h1>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="block bg-white text-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 p-5 w-[20rem] h-[25rem] border border-gray-300">
            <h2 className="text-xl font-bold text-blue-700">Exam 1</h2>
            <p className="text-sm text-gray-500">Details about Exam 1</p>
          </div>
          <div className="block bg-white text-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 p-5 w-[20rem] h-[25rem] border border-gray-300">
            <h2 className="text-xl font-bold text-blue-700">Exam 2</h2>
            <p className="text-sm text-gray-500">Details about Exam 2</p>
          </div>
        </div>
      </div>
   </>
  );
}

export default GraduationExams;
