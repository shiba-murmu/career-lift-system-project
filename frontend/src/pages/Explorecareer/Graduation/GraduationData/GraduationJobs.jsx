import React from "react";
import ContentCards from "../../../../components/ContentCard/ContentCards";

function GraduationJobs() {
  const FilterBox = () => {
    return (
      <div className="flex justify-center mb-0 md:mb-4 w-[100%] dark:bg-neutral-900 p-4">
      <input
        type="text"
        placeholder="Search..."
        className="border border-gray-300 rounded-sm p-2 w-1/2"
      />
      <button className="ml-2 bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600">
        Search
      </button>
      </div>
    );
  };

  return (
    <>
      <FilterBox />

      <div className="md:flex">
        {/* Sidebar */}
        <div className="md:w-2/12 bg-gray-200 p-4 dark:bg-neutral-800 rounded-r-2xl hidden md:block">
          <h3 className="font-bold mb-4">Sidebar</h3>
          <ul>
            <li className="mb-2">
              <a href="#">Option 1</a>
            </li>
            <li className="mb-2">
              <a href="#">Option 2</a>
            </li>
            <li className="mb-2">
              <a href="#">Option 3</a>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="md:w-10/12 flex flex-wrap justify-around h-[150vh] overflow-y-scroll bg-white dark:bg-neutral-900">
          {/* Header */}
          {/* Job Cards */}
          <div className="flex flex-wrap justify-around p-4 w-[100%] gap-3">
            <ContentCards />
            <ContentCards />
            <ContentCards />
          </div>
          <div className="flex flex-wrap justify-around p-4 w-[100%] gap-3 ">
            <ContentCards />
            <ContentCards />
            <ContentCards />
          </div>
          <div className="flex flex-wrap justify-around p-4 w-[100%] gap-3 ">
            <ContentCards />
            <ContentCards />
            <ContentCards />
          </div>
          <div className="flex flex-wrap justify-around p-4 w-[100%] gap-3">
            <ContentCards />
            <ContentCards />
            <ContentCards />
          </div>
        </div>
      </div>
    </>
  );
}

export default GraduationJobs;
