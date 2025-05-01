import React from 'react'
import ContentCards from "../../../../components/ContentCard/ContentCards";

function IntermediateJobs() {
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
        <ContentCards />
        <ContentCards />
        <ContentCards />
        <ContentCards />
        <ContentCards />
        <ContentCards />
        <ContentCards />
        <ContentCards />
        <ContentCards />
      </div>
    </>
  )
}

export default IntermediateJobs