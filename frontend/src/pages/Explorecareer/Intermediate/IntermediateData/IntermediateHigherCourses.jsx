import React from "react";

function IntermediateHigherCourses() {
  const FilterBox = () => {
    return (
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded-lg p-2 w-1/3"
        />
      </div>
    );
  };
  return (
    <>
      <FilterBox />
      <div className="flex flex-wrap justify-around gap-10 p-4">
        <div className="card bg-white shadow-md rounded-lg p-4 w-1/4">
          <h2 className="text-xl font-bold">Course 1</h2>
          <p className="text-gray-700">Description of Course 1</p>
        </div>
        <div className="card bg-white shadow-md rounded-lg p-4 w-1/4">
          <h2 className="text-xl font-bold">Course 2</h2>
          <p className="text-gray-700">Description of Course 2</p>
        </div>
        <div className="card bg-white shadow-md rounded-lg p-4 w-1/4">
          <h2 className="text-xl font-bold">Course 3</h2>
          <p className="text-gray-700">Description of Course 3</p>
        </div>
        <div className="card bg-white shadow-md rounded-lg p-4 w-1/4">
          <h2 className="text-xl font-bold">Course 4</h2>
          <p className="text-gray-700">Description of Course 4</p>
        </div>
        <div className="card bg-white shadow-md rounded-lg p-4 w-1/4">
          <h2 className="text-xl font-bold">Course 5</h2>
          <p className="text-gray-700">Description of Course 5</p>
        </div>
      </div>
    </>
  );
}

export default IntermediateHigherCourses;
